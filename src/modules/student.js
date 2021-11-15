import React, { useState } from "react";
import './style.css'
import { Button } from "../components/Button/Index";
import { Heding1 } from "../components/Heading";
import { Table } from "../components/Table";
import { Teacher } from "../components/Teacher";


export const Student = (props) => {
  console.log(props, "value")
  const [ count, setCount ] = useState(5);
  const [ tableData, setTableData ] = useState(props.tableData)
  const [ std, setStd ] = useState({
    stdName: 'ali'
  })
  
  const handleSubmit = () => {
    return(
        console.log("btn")
    )
}
  return (

    <>
    <dis className="App"></dis>
    <Button value="Add_Student" className="homeBtn"/>
      <Heding1 value={props.heading}/>      
      <Heding1 value="Student_List"/>      
      <Table tableData={tableData}/>
      <Heding1 value="Teacher Details"/>
      <Teacher  teacherDetail={props.teacherDetail}/>
    

      <button className="btn btn-primary" 
        onClick={ () => setCount(count + 4)}
        >Submit</button>
      <p>You clicked {count} times</p>
    </>

  );
};
