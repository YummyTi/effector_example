import React, { MouseEvent, MouseEventHandler } from "react";

export type ClassNameTypes = {
  className: string;
};

export type MouseEventTypes = MouseEvent<HTMLButtonElement>;
export type ButtonTypes = {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

// export const URL = process.env.BASI_API_URL;
// export const URL = 'http://167.160.91.82:8080/api/';
// export const URL = 'http://192.168.0.11:8080/api/';
// export const URL = 'http://192.168.0.197:8080/api/'; //Xurshida
// export const URL = 'http://192.168.0.170:8081/api/'; //Ismoil aka M
export const URL = "http://192.168.0.23:8081/api/"; //Ismoil aka

export const device = {
  mobile: "600px",
  planshet: "1000px",
  laptop: "1500px",
};

export enum MAP_ICON {
  POINT = "https://bit.ly/3hcRprR",
  STATION = "https://bit.ly/34Y3pep",
  BUS = "https://bit.ly/3hdhKWF",
}

export enum FILE_TYPE {
  type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  extension = ".xlsx",
}

export enum EVEN_DAY {
  EVEN = "Чет",
  NOTEVEN = "Нечет",
}

export const yQuery = {
  ns: "use-load-option",
  apikey: "e3e687ba-3f11-4a48-92de-55ca45ab88b9",
  load: "Map,control.GeolocationControl,control.FullscreenControl",
};

export const yStyle = {
  width: "100%",
  height: "100vh",
  transition: "all 0.5s linear",
};

export const objectModule = [
  "objectManager.addon.objectsBalloon",
  "objectManager.addon.objectsHint",
];

export enum YENUM {
  MODULE = "multiRouter.MultiRoute",
}

export const tashkentzoom = [41.32847446609404, 69.24298268717716];
