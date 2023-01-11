import React, { createRef, useRef, useState } from "react";
import Select, { components } from "react-select";
import Multiselect from "multiselect-react-dropdown";
import "./Styles/Selection.css";

const MoreSelectedBadge = ({ items }) => {
  const style = {
    marginLeft: "auto",
    background: "#d4eefa",
    borderRadius: "4px",
    fontFamily: "Open Sans",
    fontSize: "11px",
    padding: "3px",
    order: 99,
  };

  const title = items.join(", ");
  const length = items.length;
  const label = `+ ${length} item${length !== 1 ? "s" : ""} selected`;

  return (
    <div style={style} title={title}>
      {label}
    </div>
  );
};

const MultiValue = ({ index, getValue, ...props }) => {
  const maxToShow = 1;
  const overflow = getValue()
    .slice(maxToShow)
    .map((x) => x.label);

  return index < maxToShow ? (
    <components.MultiValue {...props} />
  ) : index === maxToShow ? (
    <MoreSelectedBadge items={overflow} />
  ) : null;
};

const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  // styles
  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex ",
  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };

  const handleChange = event => {
    return 0
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type="checkbox" onChange={handleChange} checked={isSelected}/>
      <span>{children}</span>
    </components.Option>
  );
};

export default function Selection({ choiceValues, isMultySelector, FetchModels, setValue, NameOfSelectValue, placeholder, MakeRef, ModelRef}) {
  
  const [Values, setValues] = useState([])

  const [selectedOption, setSelectedOption] = useState([]); //add initial state

  const filterOptions = (candidate, input) => {
    if (input) {
      if (candidate.label.toLowerCase().includes(input.toLowerCase()))
        return true;
      if (
        selectedOption.some((opt) => {
          if (opt.value === candidate.value) return true;
          else return false;
        })
      )
        return true;
      return false;
    }
    return true;
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [activeOption, setActiveOption] = useState(String);
  const formatOptionLabel = (option) => (
    <div
      style={{
        height: "35px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        cursor: "pointer",
        margin: 0,
      }}
      onClick={() => {
        setActiveOption(option.value);
      }}
    >
      <div>{option.label}</div>
      {/* <span className={(activeOption === option.value)?'active':'false'}>&#10003;</span> */}
      <svg
        width="12"
        height="8"
        viewBox="1 1 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 4L4.5 7.5L11 1"
          stroke="#5A9DFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={activeOption === option.value ? "active" : "false"}
        />
      </svg>
    </div>
  );

  const singleSelectStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "black",
      margin: 0,
      backgroundColor: state.isSelected ? "#F5FCFF" : "white",
    }),
  };

  return (
    <div className="containerForSelect">
      {isMultySelector ? (
        <>
          <p>{NameOfSelectValue}</p>
          <Select
            defaultValue={[]}
            isMulti
            placeholder={placeholder}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            onChange={(options) => {
              if (Array.isArray(options)) {
                setSelectedOptions(options.map((opt) => opt.value));
              }
              setSelectedOption(options);
              setValue(options);
            }}
            options={choiceValues}
            components={{
              Option: InputOption,
              MultiValue,
            }}
            filterOption={filterOptions}
          />
        </>
      ) : (
        <>
          <p>{NameOfSelectValue}</p>
          <Select
            styles={singleSelectStyles}
            isDisabled={choiceValues.length === 0 ? true : false}
            singleSelect={true}
            placeholder={placeholder}
            isObject={false}
            options={choiceValues}
            ref={NameOfSelectValue === "Марка" ? MakeRef : ModelRef}
            onChange={(option) => {
              if (NameOfSelectValue === "Марка") {
                FetchModels(option.label);
                setValue(option.value);
              } else {
                setValue(option.label.split(" ").join("_"));
              } // переписать в другую функцию!
            }}
            formatOptionLabel={formatOptionLabel}
            showArrow
          />
        </>
      )}
    </div>
  );
}
