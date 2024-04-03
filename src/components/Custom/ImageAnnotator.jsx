import React, { useState, useEffect } from "react";
import { ReactPictureAnnotation } from "react-picture-annotation";
import Dropdown from "./Dropdown";

const Annotataor = (props) => {
  const [pageSize, setPageSize] = useState({
    width: 400,
    height: 400,
  });

  useEffect(() => {
    // Check if the window object is available
    if (typeof window !== "undefined") {
      // Set the initial page size
      setPageSize({
        width: 800,
        height: 500,
      });

      console.log(window.innerHeight, window.innerWidth);

      // Add event listener for window resize
      const handleResize = () => {
        setPageSize({
          width: 800,
          height: 500,
        });
      };
      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const onSelect = (e, selectedId) =>
    console.log("onselct", selectedId, "e", e);
  const onChange = (data) => console.log("onChnage", data);

  return (
    <ReactPictureAnnotation
      {...props}
      inputElement={(value, onChange, onDelete) => (
        <Dropdown
          value={value}
          onChange={onChange}
          onDelete={onDelete}
          options={props.options}
        />
      )}
      image="https://source.unsplash.com/random/400x400"
      onSelect={onSelect}
      onChange={onChange}
      width={pageSize.width}
      height={pageSize.height}
      //   width={400}
      //   height={400}
    />
  );
};

export default Annotataor;