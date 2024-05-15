import React from "react";

const Separation = ({ title, id }) => {
  return (
    <div className="title-with-lines my-16" id={id}>
      <div className="title-line" />

      <h3 className="text-3xl text-center px-6  font-semibold">{title}</h3>
      <div className="title-line" />
    </div>
  );
};

export default Separation;
