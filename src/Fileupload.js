// ImportData.js

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./styles.css";
const FileData = (props) => {
  const [fileContent, setFileContent] = useState(null);

  const handleFileChange = async (event) => {
    const file = await event.target.files[0];
    if (!event.target.files[0]) {
      toast.error("Select a json File");
      return;
    }
    // console.log(event.target.files[0].name.split(".")[1]);
    if (event.target.files[0].name.split(".")[1] !== "json") {
      toast.error("Please Upload a '.json' File Only");
      // alert("Please Upload a .json File Only");
      return;
    }
    const reader = new FileReader();
    // console.log(file, "sssssssssssssssss");
    reader.onload = (e) => {
      const content = e.target.result;
      setFileContent(content);
      setTimeout(() => {
        document.getElementById("filebtn").click();
        toast.success(event.target.files[0].name + " Uploaded Suscessfully");
      }, 500);
    };

    reader.readAsText(file);
  };

  const handleUpload = () => {
    if (!fileContent) {
      toast.error("Plaese Upload File");
      return;
    }
    if (fileContent) {
      try {
        const jsonData = JSON.parse(fileContent);

        function buildHierarchy(data, managerId) {
          const manager = data.find((employee) => employee.id === managerId);
          if (!manager) return null;

          const managerNode = {
            name: manager.firstName,
            attributes: {
              ...manager,
            },
          };

          const subordinates = data.filter(
            (employee) => employee.managerId === managerId
          );
          subordinates.forEach((subordinate) => {
            const subordinateNode = {
              name: subordinate.firstName,
              attributes: {
                ...subordinate,
              },
            };
            const grandchildren = buildHierarchy(data, subordinate.id);
            if (grandchildren !== null || grandchildren?.length !== 0) {
              subordinateNode.children = grandchildren;
            }
            if (!managerNode.children) {
              managerNode.children = [];
            }
            managerNode.children.push(subordinateNode);
          });

          return managerNode.children;
        }

        function convertDataToHierarchy(data) {
          const ceo = data.find((employee) => !employee.managerId);
          const hierarchy = {
            name: ceo.firstName,
            attributes: {
              ...ceo, // You can customize this attribute if needed
            },
          };

          const ceoSubordinates = data.filter(
            (employee) => employee.managerId === ceo.id
          );
          ceoSubordinates.forEach((subordinate) => {
            const subordinateNode = {
              name: subordinate.firstName,
              attributes: {
                ...subordinate,
              },
            };
            const grandchildren = buildHierarchy(data, subordinate.id);

            if (grandchildren !== null || grandchildren?.length !== 0) {
              subordinateNode.children = grandchildren;
            }

            if (!hierarchy.children) {
              hierarchy.children = [];
            }

            hierarchy.children.push(subordinateNode);
          });

          return hierarchy;
        }
        const hierarchy = convertDataToHierarchy(jsonData);
        // document.getElementById("fileinpute").value = "";
        props.fun(JSON.stringify(hierarchy, null, 2), jsonData);
      } catch (error) {
        console.error("Error parsing JSON file:", error);
      }
    }
  };

  return (
    <div className="uploadHead">
      <img
        style={{ padding: "0px", borderRadius: "3px" }}
        alt="..please Refresh"
        width={"200px"}
        height={"60px"}
        src="https://www.sprih.com/wp-content/uploads/2023/12/Sprih-Logo-1.svg"
      ></img>
      <input
        style={{ outline: 0 }}
        className="fileinpute"
        type="file"
        onChange={handleFileChange}
      />

      <button id="filebtn" onClick={handleUpload}>
        Upload
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default FileData;
