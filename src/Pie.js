import React from "react";
import { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import { PieChart } from "react-minimal-pie-chart";
import { Chart } from "react-google-charts";
import Reschart from "./Components/Reschart";
const PieChart2 = ({ alldata }) => {
  // Sample data for the pie chart
  const options = {
    title: "All Employee Details",
    is3D: true,
    // width: 100,
    // width_units: "%",
    height: 440,
    height_units: "%",
    responsive: true,
  };

  const [pidata, setpidata] = useState([["Role", "Number"]]);
  const [Resdata, setResdata] = useState([]);
  // const [CategoryList, setCategoryList] = useState({});
  useEffect(() => {
    // console.log("uuuuuuuseefffect2 ");
    // setCategoryList({});
    let CategoryList = {};
    alldata.map((user) => {
      let keys = Object.keys(CategoryList);
      if (keys.indexOf(user.designation) === -1) {
        CategoryList[user.designation] = alldata.filter(
          (use) => use.designation === user.designation
        ).length;
      }
    });
    // setCategoryList(CategoryList);
    let arr = [["Role", "Number"]];
    let sdata = [];
    Object.entries(CategoryList).forEach(([role, count]) => {
      // console.log(`${role}: ${count}`);
      arr.push([role, count]);
      sdata.push({ label: role, y: count });
    });
    setpidata(arr);
    setResdata(sdata);
    // console.log("chart", pidata);
  }, [alldata]);
  return (
    <div className="Piecontainer">
      <div
        style={{
          border: "2px solid white",
          borderRadius: "10px",
          width: "50vw",
          backgroundColor: "white",
        }}
      >
        <Chart chartType="PieChart" data={pidata} options={options} />
      </div>
      <div
        style={{
          width: "45%",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "black",
          height: "450px",
          // overflowY: "scroll",
          padding: "2%",
          marginRight: "7px",
        }}
      >
        <Reschart data={Resdata}></Reschart>
        {/* {pidata.map((e, i) => {
          if (i === 0) return "";
          return (
            <ul
              key={i}
              style={{
                backgroundColor: "#494e6b",
                color: "white",
                borderRadius: "2px",
                padding: "7px",
                textAlign: "center",
                marginBottom: "-9px",
                justifyContent: "space-around",
                display: "flex",
                marginLeft: "3%",
                marginRight: "3%",
              }}
            >
              <div>{e[0]}</div>
              <div>{e[1]}</div>
            </ul>
          );
        })} */}
      </div>
    </div>
  );
};

export default PieChart2;
