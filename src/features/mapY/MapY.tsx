import { useStore } from "effector-react";
import React from "react";
import {
  YMaps,
  Map,
  TrafficControl,
  ZoomControl,
  RulerControl,
  ObjectManager,
} from "react-yandex-maps";
import { MAP_ICON, tashkentzoom } from "../../types";
import { $stations, setStations } from "./model";

const mapState = {
  center: tashkentzoom,
  zoom: 12,
  behaviors: ["default", "scrollZoom"],
  controls: [],
};
const MapY = () => {
  const stationsList = useStore($stations);

  const onMapClick = (e: any) => {
    console.log(e, "event");
  };

  const onStationClick = () => {
    console.log("click");
  };

  return (
    <YMaps
      query={{
        ns: "use-load-option",
        apikey: "e3e687ba-3f11-4a48-92de-55ca45ab88b9",
        load: "Map,control.GeolocationControl,control.FullscreenControl",
      }}
    >
      <Map
        style={{
          width: "100vw",
          height: "100vh",
          transition: "all 0.5s linear",
        }}
        defaultState={mapState}
        onClick={onMapClick}
        modules={["multiRouter.MultiRoute"]}
        state={mapState}
        options={{
          maxZoom: 20,
        }}
      >
        <ObjectManager
          onClick={onStationClick}
          options={{
            clusterize: true,
            gridSize: 40,
          }}
          features={stationsList?.map((item) => ({
            type: "Feature",
            id: item.id,
            geometry: {
              type: "Point",
              coordinates: [item.lat, item.lng],
            },
            options: {
              iconLayout: "default#image",
              iconImageSize: [25, 35],
              iconImageHref: MAP_ICON.STATION,
            },
          }))}
          modules={[
            "objectManager.addon.objectsBalloon",
            "objectManager.addon.objectsHint",
          ]}
        />

        <TrafficControl options={{ float: "right" }} />
        <ZoomControl options={{ float: "right" }} />
        <RulerControl
          options={{
            float: "right",
          }}
        />
      </Map>
    </YMaps>
  );
};

export default MapY;
