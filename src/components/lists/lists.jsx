import React, { useState, useEffect } from "react";

export function List({ list, styleClass }) {
  const [newLi, setLi] = useState([]);

  const setList = () => {
    const li = list.map((value, index) => {
      return (
        <li key={index} className={styleClass[1]}>
          {value}
        </li>
      );
    });
    setLi(li);
  };

  useEffect(() => {
    console.log("here");
    setList();
  }, []);

  return <ul className={styleClass[0]}>{newLi}</ul>;
}
