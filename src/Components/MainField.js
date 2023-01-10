import React, { useEffect, useState, useRef } from "react";
import Selection from "./Selection";
import FixSelector from "./FixSelector";
import Range from "./Range";
import {
  REGION,
  TRANSMISSION_FROM,
  TRANSMISSION_TO,
  YEARSAFTER,
  YEARSBEFORE,
} from "../StaticDATA/LISTS";
import { CHOICECURRENCY } from "../StaticDATA/LISTS";
import { CHOICETRANSMISSION } from "../StaticDATA/LISTS";
import { ENGINETYPE } from "../StaticDATA/LISTS";
import { BODYTYPE } from "../StaticDATA/LISTS";
import { TYPEOFDRIVE } from "../StaticDATA/LISTS";
import { MILEAGE } from "../StaticDATA/LISTS";
import "./Styles/MainField.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function MainField({ FetchAds }) {
  // All states from inputs and forms
  const [regions, setRegions] = useState([]);
  const [make, setMake] = useState("");
  const [model, setModel] = useState(false);
  const [yearBefore, setYearBefore] = useState(Number);
  const [yearAfter, setYearAfter] = useState(Number);
  const [currency, setCurrency] = useState("USD");
  const [priceBefore, setPriceBefore] = useState(Number);
  const [priceAfter, setPriceAfter] = useState(Number);
  const [engineTypes, setEngineTypes] = useState([]);
  const [engineVolumeBefore, setEngineVolumeBefore] = useState(Number);
  const [engineVolumeAfter, setEngineVolumeAfter] = useState(Number);
  const [transmissionType, setTransmissionType] = useState("Не важно");
  const [bodyType, setBodyType] = useState([]);
  const [typeOfDrive, setTypeOfDrive] = useState([]);
  const [mileage, setMileage] = useState(Number);

  const [isDisabled, setIsDisabled] = useState(true);

  // Two Lists from fetch API
  const [AUTOMARKS, setAUTOMARKS] = useState([]);
  const [MODELS, setMODELS] = useState([]);

  const cleaning = () => {
    window.location.reload();
  };

  const RefForMakes = useRef();
  const RefForModels = useRef();

  const FetchMarks = async () => {
    let response = await axios.get(
      "https://wa-auto-aggregator-api-dev.azurewebsites.net/api/makes"
    );
    let arr = [{ id: -1, viewName: "Не важно" }];
    setAUTOMARKS(arr.concat(response.data.makes));
  };

  const FetchModels = async (mark) => {
    if (mark === "Не важно" || mark === "") {
      setMODELS([]);
      RefForModels.current.resetSelectedValues();
    } else {
      let queryMark = mark.split(" ").join("_");
      let response = await axios.get(
        `https://wa-auto-aggregator-api-dev.azurewebsites.net/api/makes/${queryMark}/models`
      );
      let arr = [{ id: -1, viewName: "Не важно" }];
      setMODELS(arr.concat(response.data.models));
    }
  };

  useEffect(() => {
    FetchMarks();
  }, []);

  const LOG = () => {
    console.log(regions);
    console.log(make);
    console.log(model);
    console.log(yearBefore);
    console.log(yearAfter);
    console.log(currency);
    console.log(priceBefore);
    console.log(priceAfter);
    console.log(engineTypes);
    console.log(engineVolumeBefore);
    console.log(engineVolumeAfter);
    console.log(transmissionType);
    console.log(bodyType);
    console.log(typeOfDrive);
    console.log(mileage);
  };

  const getValues = (objectList) => {
    return objectList.map((a) => a.value);
  };

  const getvaluesFromAPI = (objectList) => {
    return objectList.map((a) => a.viewName);
  };

  return (
    <div className="containerForMainField">
      <h1>AutoAggregator</h1>
      <Selection
        choiceValues={getValues(REGION)}
        isMultySelector={true}
        SelectValue={regions}
        setValue={setRegions}
        NameOfSelectValue={"Регион"}
        placeholder={"Выберите регион"}
      />
      <Selection
        choiceValues={getvaluesFromAPI(AUTOMARKS)}
        FetchModels={FetchModels}
        setValue={setMake}
        NameOfSelectValue={"Марка"}
        placeholder={"Выберите марку"}
        MakeRef={RefForMakes}
      />
      <Selection
        choiceValues={getvaluesFromAPI(MODELS)}
        setValue={setModel}
        NameOfSelectValue={"Модель"}
        placeholder={"Выберите модель"}
        ModelRef={RefForModels}
      />
      <Range
        min={1970}
        max={new Date().getFullYear()}
        isSelect={true}
        SelectValueBefore={getValues(YEARSBEFORE)}
        SelectValueAfter={getValues(YEARSAFTER)}
        setValueBefore={setYearBefore}
        setValueAfter={setYearAfter}
        NameOfSelectValue={"Год"}
        placeholder_from="от"
        placeholder_to="до"
      />
      <FixSelector
        choiceValues={CHOICECURRENCY}
        setValue={setCurrency}
        NameOfSelectValue={"Валюта"}
      />
      <Range
        min={0}
        max={Infinity}
        setValueBefore={setPriceBefore}
        setValueAfter={setPriceAfter}
        NameOfSelectValue={"Стоимость"}
      />
      <Selection
        choiceValues={getValues(ENGINETYPE)}
        isMultySelector={true}
        setValue={setEngineTypes}
        NameOfSelectValue={"Тип двигателя"}
        placeholder={"Выберите тип двигателя"}
      />
      <Range
        min={"1.0"}
        max={"9.0"}
        isSelect={true}
        SelectValueBefore={getValues(TRANSMISSION_FROM)}
        SelectValueAfter={getValues(TRANSMISSION_TO)}
        setValueBefore={setEngineVolumeBefore}
        setValueAfter={setEngineVolumeAfter}
        NameOfSelectValue={"Объем двигателя, л"}
        placeholder_from="от"
        placeholder_to="до"
      />
      <FixSelector
        choiceValues={CHOICETRANSMISSION}
        setValue={setTransmissionType}
        NameOfSelectValue={"Коробка передач"}
      />
      <Selection
        choiceValues={getValues(BODYTYPE)}
        isMultySelector={true}
        setValue={setBodyType}
        NameOfSelectValue={"Тип кузова"}
        placeholder={"Выберите тип кузова"}
      />
      <Selection
        choiceValues={getValues(TYPEOFDRIVE)}
        isMultySelector={true}
        setValue={setTypeOfDrive}
        NameOfSelectValue={"Тип привода"}
        placeholder={"Выберите тип привода"}
      />
      <Selection
        choiceValues={getValues(MILEAGE)}
        setValue={setMileage}
        NameOfSelectValue={"Пробег до, км"}
        placeholder={"Выберите пробег"}
      />
      <button disabled={isDisabled} className="adSearching">
        <NavLink
          to="/Ads"
          className="NavLink"
          onClick={() =>
            FetchAds(
              make,
              currency,
              regions,
              model,
              yearBefore,
              yearAfter,
              priceBefore,
              priceAfter,
              engineTypes,
              engineVolumeBefore,
              engineVolumeAfter,
              transmissionType,
              bodyType,
              typeOfDrive,
              mileage
            )
          }
        >
          ПОКАЗАТЬ ОБЪЯВЛЕНИЯ
        </NavLink>
      </button>
      <h5 className="cleanBtn" onClick={cleaning}>
        &#128465;&#65039; Сбросить всё
      </h5>
    </div>
  );
}
