import React from "react";
import { Student } from "./student";


const data = [
  {
    id:1,
    username: "Ali",
    age: "22",
    class: "JavaScript",
    reg:"423",
  },
  {
    id:2,
    username: "Shahzad",
    age: "24",
    class: "JavaScript",
    reg:"453",
  },
  {
    id:3,
    username: "Zahid",
    age: "25",
    class: "React",
    reg:"429",
  },
  {
    id:4,
    username: "Nadeeem",
    age: "26",
    class: "React",
    reg:"403",
  },
  {
    id:5,
    username: "Haider",
    age: "26",
    class: "JavaScript",
    reg:"523",
  },

]
const tchrData = [
  {
    username: "Shahzad",
    age: "29",
    class: "React"
  },
  {
    username: "Zafar",
    age: 28,
    class: "JavasCript"
  },
]

const Index = () => {
  return <Student heading="table" tableData={data} teacherDetail={tchrData}/>;
};

export default Index;
