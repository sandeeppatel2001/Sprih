import React, { useRef, useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const CanvasJS = CanvasJSReact.CanvasJS;
const addSymbols = (e) => {
  var suffixes = [""];
  var order = Math.max(
    Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)),
    0
  );

  if (order > suffixes.length - 1) order = suffixes.length - 1;

  var suffix = suffixes[order];
  if (
    Math.floor(CanvasJS.formatNumber(e.value / Math.pow(1000, order))) !=
    CanvasJS.formatNumber(e.value / Math.pow(1000, order))
  ) {
    return "";
    // console.log(
    //   "sss",
    //   Math.floor(CanvasJS.formatNumber(e.value / Math.pow(1000, order)))
    // );
  }
  return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
};
// console.log(addSymbols)
const Reschart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Accessing chart instance
      //   console.log(chartRef.current.chart);
    }
  }, []);
  const options = {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "See All You Employee Here ",
    },
    axisY: {
      title: "Number of Employee",
      labelFormatter: addSymbols,
      scaleBreaks: {
        autoCalculate: true,
      },
    },
    axisX: {
      title: "Role",
      labelAngle: 0,
    },
    data: [
      {
        type: "column",
        dataPoints: data,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} ref={chartRef} />
      {/* You can get reference to the chart instance as shown above using ref. */}
    </div>
  );
};

export default Reschart;
