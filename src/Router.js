import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainField from "./Components/MainField";
import MainSecondPage from "./SecondPage/MainSecondPage.js";
import axios from "axios";
import {
  REGION,
  TRANSMISSION_FROM,
  TRANSMISSION_TO,
  YEARSAFTER,
  YEARSBEFORE,
  CHOICECURRENCY,
  CHOICETRANSMISSION,
  ENGINETYPE,
  BODYTYPE,
  TYPEOFDRIVE,
  MILEAGE,
} from "./StaticDATA/LISTS";
import { type } from "@testing-library/user-event/dist/type";

export default function Router() {
  const [isLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState([]);

  function getMetrickId(data, dataValue) {
    return data.find((a) => a.value === dataValue).id;
  }

  const FetchAds = async (
    mark,
    currency,
    regions,
    model,
    yearFrom,
    yearTo,
    priceFrom,
    priceTo,
    engineTypes,
    engineCapacityFrom,
    engineCapacityTo,
    transmissionType,
    bodyType,
    typeOfDrive,
    mileage
  ) => {
    let query = `https://wa-auto-aggregator-api-dev.azurewebsites.net/api/cars?make=${mark}&currency=${currency}`;
    if (regions.length != 0) {
      regions.forEach((region) => {
        query += `&regionId=${getMetrickId(REGION, region)}`;
      });
    }
    if (model != "" && model != "Не важно") {
      query += `&model=${model}`;
    }
    if (yearFrom != 0 || yearTo != 0) {
      let min = yearFrom;
      let max = yearTo;
      if (yearFrom != 0 && yearTo != 0) {
        if (yearFrom > yearTo) {
          max = yearFrom;
          min = yearTo;
        }
      }
      if (yearFrom != 0) {
        query += `&yearFrom=${min}`;
      }
      if (yearTo != 0) {
        query += `&yearTo=${max}`;
      }
    }
    if (priceFrom != 0 || priceTo != 0) {
      let min = priceFrom;
      let max = priceTo;
      if (priceFrom != 0 && priceTo != 0) {
        if (priceFrom > priceTo) {
          max = priceFrom;
          min = priceTo;
        }
      }
      if (priceFrom != 0) {
        query += `&fromPrice==${min}`;
      }
      if (priceTo != 0) {
        query += `&toPrice=${max}`;
      }
    }
    if (engineTypes.length != 0) {
      engineTypes.forEach((type) => {
        query += `&engineType=${getMetrickId(ENGINETYPE, type)}`;
      });
    }
    //engineCapacityFrom/To
    if (transmissionType != "Не важно") {
      query += `&transmission=${getMetrickId(
        CHOICETRANSMISSION,
        transmissionType
      )}`;
    }
    if (bodyType.length != 0) {
      bodyType.forEach((type) => {
        query += `&bodyType=${getMetrickId(BODYTYPE, type)}`;
      });
    }
    if (typeOfDrive.length != 0) {
      typeOfDrive.forEach((type) => {
        query += `&typeofDrive=${getMetrickId(TYPEOFDRIVE, type)}`;
      });
    }
    if (mileage != 0) {
      let value = mileage.split("_")[1];
      query += `&toMileage=${value}`;
    }
    console.log(query);
    await axios
      .get(query)
      .then((res) => setData(res.data.cars))
      .then((res) => setIsLoading(false));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainField
              FetchAds={FetchAds}
              setIsLoading={setIsLoading}
              setData={setData}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Ads"
          element={<MainSecondPage Data={Data} isLoading={isLoading} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
