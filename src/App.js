import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";

import orgChartJson from "./data/a.json";
import alldata from "./data/data.json";
import { useCenteredTree } from "./helpers";
import "./styles.css";
import PieChart2 from "./Pie.js";
import FileData from "./Fileupload.js";
import Card from "./Components/Card.js";
import Dropandsearch from "./Components/Dropandsearch.js";
import ListOfUsers from "./Components/ListofUsers.js";
import Footer from "./Components/Footer.js";
const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => (
  <g>
    <circle r="55" onClick={toggleNode} />
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div
        style={{
          border: "",
          display: "flex",
          flexDirection: "column",
          width: "85%",
        }}
      >
        {/* <Card user={All_users[0]}></Card> */}
        {nodeDatum.attributes ? (
          <Card user={nodeDatum.attributes}></Card>
        ) : (
          <h3 style={{ color: "black" }}>{""}</h3>
        )}

        {/* <img
          alt=""
          style={{ width: "200px", height: "100px" }}
          src="https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png"
        ></img> */}

        {/* {nodeDatum.children && (
          <button style={{ width: "100%" }} onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
          </button>
        )} */}
      </div>
    </foreignObject>
  </g>
);

export default function App() {
  const [All_users, setAll_users] = useState(alldata);

  const [translate, containerRef] = useCenteredTree();
  const [Stringdata, setStringdata] = useState(orgChartJson);
  const nodeSize = { x: 700, y: 600 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: 0,
  };
  const datacame = (data, originaljson) => {
    setStringdata(JSON.parse(data));
    setAll_users(originaljson);
  };
  // -----------------------------
  const [search, setsearch] = useState("");
  const [category, setCategory] = useState("All");
  const [userList, setuserList] = useState(
    All_users.filter((users) => users.designation !== "Director")
  );

  useEffect(() => {
    if (category !== "All") {
      setuserList(
        All_users.filter(
          (users) =>
            users.designation === category &&
            users.designation !== "Director" &&
            (users.firstName.toLowerCase().includes(search.toLowerCase()) ||
              users.lastName.includes(search.toLowerCase()) ||
              (users.firstName + " " + users.lastName)
                .toLowerCase()
                .includes(search.toLowerCase()))
        )
      );
    } else {
      setuserList(
        All_users.filter(
          (users) =>
            users.designation !== "Director" &&
            (users.firstName.toLowerCase().includes(search.toLowerCase()) ||
              users.lastName.includes(search.toLowerCase()) ||
              (users.firstName + " " + users.lastName)
                .toLowerCase()
                .includes(search.toLowerCase()))
        )
      );
    }
  }, [search, category, All_users]);

  return (
    <div>
      <div>
        <div className="Nav">
          <FileData fun={datacame}></FileData>
          <p>Upload json File</p>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span>For better View do Zoomin/Zoomout</span>
        <span>Click On node To do expaind/collaps</span>
      </div> */}
        <div className="Tree_Ref" ref={containerRef}>
          <Tree
            zoom={0.22}
            data={Stringdata}
            translate={translate}
            nodeSize={nodeSize}
            renderCustomNodeElement={(rd3tProps) =>
              renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
            }
            orientation="vertical"
          />
        </div>
        {/* <hr></hr> */}
        <PieChart2 alldata={All_users}></PieChart2>

        <div style={{ margin: "7%" }}>
          <Card user={All_users[0]} />
          <Dropandsearch
            search={search}
            category={category}
            setCategory={setCategory}
            setSearch={setsearch}
            users={All_users}
            // alldata={All_users}
          />
          <ListOfUsers users={userList} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
