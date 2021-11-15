import React from "react";
import "./style.css";
import {Button} from '../Button/Index.jsx'
export const Table = (props) => {
  const data = props.tableData;
  return (
    <>
      <table className="table">
        <tr className="tableHeading">
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Class</th>
          <th>Registration_No</th>
          <th>Action</th>
        </tr>
        {data.map((items) => {
          return (
            <>
              <tr>
                <td>{items.id}</td>
                <td>{items.username}</td>
                <td>{items.age}</td>
                <td>{items.class}</td>
                <td>{items.reg}</td>
                <td>
                  < Button id="formBtn" value="Edit" name="edit"/>
                  < Button id="formBtn" value="Delete" name="delete"/>
                  < Button id="formBtn" value="View" name="view"/>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};
