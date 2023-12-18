import React from "react";
import { ResponsivePie } from "@nivo/pie";

interface chartProps {
  gettingStatistics?: boolean;
}

function PieChart({}: chartProps) {
  const pieData = [
    {
      id: "onServer",
      label: "On Server",
      value: 20,
      color: "hsl(90, 70%, 50%)",
    },
    {
      id: "active",
      label: "Active",
      value: 40,
      color: "hsl(186, 70%, 50%)",
    },
    {
      id: "onDelivery",
      label: "On Delivery",
      value: 40,
      color: "hsl(104, 70%, 50%)",
    },
  ];
  return (
    <div style={{ height: 250 }}>
      <ResponsivePie
        data={pieData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      />
    </div>
  );
}

export default PieChart;
