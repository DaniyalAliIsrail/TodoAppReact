import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";

function App() {
  const [todoElement, settodoElements] = useState("");
  const [uiShow, setuiShow] = useState([]);

  const addTodo = () => {
    if (todoElement !== "") {
      uiShow.push(todoElement);
      setuiShow([...uiShow]);
      
    } else {
      alert("fill input filled");
    }
  };
  console.log(uiShow);
  const delAll = () => {    
    setuiShow([]);
  };
  const delTodo = (ind) => {
    uiShow.splice(ind, 1);
    setuiShow([...uiShow]);
  };

  const editTodo = (index) => {
    uiShow[index] = prompt("Edit Value");
    setuiShow([...uiShow]);
  };

  return (
    <>
      <section>
        <Header />
      </section>

      {/* Input-Bar */}

      <div className=" flex justify-center  items-center mt-5 flex-col  ">
        <div className="w-[70%]">
          <input
            type="text"
            placeholder="ENTER YOUR NAME"
            className="border w-full rounded-lg p-3 outline-none border-gray-600 focus:ring-purple-900 "
            id="todoInput"
            onChange={(e) => {
              settodoElements(e.target.value);
            }}
          />
        </div>
        <div className=" flex gap-3 mt-5 ">
          <Button title="Addtodo" trigger={addTodo} />
          <Button title="Delete All" trigger={delAll} />
        </div>
      </div>
      {/* Todos item */}

      <div>
        {uiShow.map((value, index) => {
          return (
            <div className="  w-[70%] mx-auto mt-5 ">
              <ul key={index} className="">
                <li className="text-xl p-3 border rounded-lg flex justify-between items-center">
                  {value}
                  <div className="flex">
                    <Button trigger={() => editTodo(index)} title="EDIT" />
                    <Button trigger={() => delTodo(index)} title="Delete" />
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
