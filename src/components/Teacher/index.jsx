import React from "react";
import "./style.css";

export const Teacher = (props) => {
  const tchrData = props.teacherDetail;
  return (
    <>
      <table className="teacherTable">
        <tr className="teacherHeading">
          <th>Name</th>
          <th>Age</th>
          <th>class_Offer</th>
          
        </tr>
        {tchrData.map((items) => {
          return (
            <>
              <tr>
                <td>{items.username}</td>
                <td>{items.age}</td>
                <td>{items.class}</td>
               
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};
