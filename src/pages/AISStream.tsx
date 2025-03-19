import * as React from 'react';
import { Map } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Paper } from "@mantine/core";
import {MapLibreEvent} from "maplibre-gl";

export function AISStream() {
    function onMapLoad(event: MapLibreEvent) {
        event.target.resize();
    }

    return (
      <Paper shadow="xl" radius="md" p="md" withBorder>
        <Map
          initialViewState={{
            longitude: 0,
            latitude: 0,
            zoom: 2,
          }}
          onLoad={(e) => onMapLoad(e)}
          mapStyle={{
            version: 8,
            sources: {
              'raster-tiles': {
                type: 'raster',
                tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                tileSize: 256,
                attribution:
                  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              },
            },
            layers: [
              {
                id: 'simple-tiles',
                type: 'raster',
                source: 'raster-tiles',
                minzoom: 0,
                maxzoom: 22,
              },
            ],
          }}
          style={{ height: 'calc(100vh - 10rem)', width: '100%' }}
        />
      </Paper>
    );

}
