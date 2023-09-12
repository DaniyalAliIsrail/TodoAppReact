import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import { InputDefault } from "./components/inputbarshowui";

function App() {
  const [todoElement, settodoElements] = useState("");
  const [uiShow, setuiShow] = useState([]);
  let [uiinput, setuiInput] = useState("");
  // ******************** AddTodo function ****************************************
  const addTodo = () => {
    let objTodo = {
      isEdit: false,
      value: todoElement,
    };
    if (!objTodo.value) {
      alert("fill input filled");
      return;
    }
    uiShow.push(objTodo);
    setuiShow([...uiShow]);
    settodoElements("");
  };

  console.log(todoElement);
  console.log(uiShow);
  // ******************** DeleteAll function ****************************************
  const delAll = () => {
    setuiShow([]);
  };
  // ******************** DeleteTodo function *********************

  const delTodo = (index) => {
    uiShow.splice(index, 1);
    setuiShow([...uiShow]);
  };
  // ******************** EditTodo function ****************************************

  const editTodo = (index) => {
    uiShow.forEach((element) => {                                  
      console.log(element);
      element.isEdit = false;
    });
    
    uiShow[index].isEdit = true;
    setuiShow([...uiShow]);
    setuiInput(uiShow[index].value); //setuiinput 3rd state hay or iskay kay andr first vlaue savehay hay js may nay bilal lkh kr addtodo keya
  };
  const edit_todo_element = (index) => {
    uiShow[index].isEdit = false;//(save pay click to dusry field false mtlb ui say input gaebshah)
    uiShow[index].value = uiinput;//jo value input may deya hay hamnay wo save hojae save pr click krnay say or uiShow[index].value iska matlab hay array k current value kay andr jo new value wo save hojae
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
            className="border w-full rounded-lg p-3 outline-none border-purple-600 focus:ring-purple-900 "
            id="todoInput"
            onChange={(e) => {
              settodoElements(e.target.value);
            }}
            value={todoElement}
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
            <section key={index}>
              {value.isEdit ? (
                <>
                  {" "}
                  <section className="w-[70%] mx-auto mt-5">
                    <ul>
                      <li className="text-xl p-3 border rounded-lg flex justify-between items-center">
                        <input
                          type="text"
                          className="w-full border border-none outline-none p-2"
                          onChange={(e) => {
                            setuiInput(e.target.value);
                          }}
                          value={uiinput}
                        ></input>
                        <div className="flex">
                          <Button
                            trigger={() => {
                              edit_todo_element(index);
                            }}
                            title="save"
                          />
                          <Button
                            trigger={() => delTodo(index)}
                            title="complet"
                          />
                        </div>
                      </li>
                    </ul>
                  </section>
                </>
              ) : (
                <>
                  {" "}
                  <section className="w-[70%] mx-auto mt-5">
                    <ul>
                      <li className="text-xl p-3 border rounded-lg flex justify-between items-center">
                        {value.value}
                        <div className="flex">
                          <Button
                            trigger={() => editTodo(index)}
                            title="EDIT"
                          />
                          <Button
                            trigger={() => delTodo(index)}
                            title="Delete"
                          />
                        </div>
                      </li>
                    </ul>
                  </section>
                </>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}

export default App;
