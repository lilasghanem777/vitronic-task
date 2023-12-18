import React from "react";
import { ResponsiveLine } from "@nivo/line";

interface chartProps {
  gettingOverview?: boolean;
}
function LineChart({}: chartProps) {
  var dataArray = [
    {
      x: "fab",
      y: 49,
    },
    {
      x: "jan",
      y: 184,
    },
    {
      x: "march",
      y: 71,
    },
    {
      x: "april",
      y: 254,
    },
    {
      x: "jun",
      y: 118,
    },
    {
      x: "july",
      y: 35,
    },

    {
      x: "aug",
      y: 272,
    },
    {
      x: "sep",
      y: 232,
    },
    {
      x: "oct",
      y: 201,
    },
    {
      x: "nov",
      y: 36,
    },
    {
      x: "dec",
      y: 202,
    },
  ];
  var data = [
    {
      id: "Implementation",
      color: "hsl(252, 70%, 50%)",
      data: dataArray,
    },
    {
      id: "Acceptence",
      color: "hsl(340, 70%, 50%)",
      data: dataArray,
    },
    {
      id: "Delivery",
      color: "hsl(140, 70%, 50%)",
      data: dataArray,
    },
  ];
  return (
    <div style={{ height: 250 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default LineChart;
