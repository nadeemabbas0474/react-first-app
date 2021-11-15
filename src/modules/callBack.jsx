import React from "react";
let num1,num2,num3,num4
const fun1 = (p1)=>{
return (num1= 10 ,
     p1(fun3)
     )

}
const fun2 = (p2)=>{
    return (num2= 10,
        p2(fun4))
    }
const fun3 = (p3)=>{
    return (num3= 10, p3(fun5))
    }
const fun4 = (p4)=>{
        return (num4= 10,
        p4())
        }
const fun5 = ()=>{
    console.log(num4)
            return(
                <div className="App">
                    <h1>total = {num1+num2+num3+num4}</h1>
                </div>
            )
            }
fun1(fun2);

export default fun1(fun2)