import React, { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

import { Todolist } from "./Todolist";

const App = () => {
        const [inputList, setInputList] = useState("");
        const [items, setItems] = useState([]);

        const changinginput = (e) => {
                setInputList(e.target.value);
        };

        const listofitems = () => {
                setItems((prev) => {
                        return [...prev, inputList];
                });
                setInputList("");
        };

        const deleteItems=(id)=>{
          //console.log("deleted");
          setItems((prev) => {
                return prev.filter((arr,ind)=>{
                        return id!==ind
                })
        });   
        }

        return (
                <>
                        <div className="container">
                                <div className="box">
                                        <div className="heading">ToDo List</div>
                                        <input
                                                type="text"
                                                placeholder="Add the Items"
                                                onChange={changinginput}
                                                value={inputList}
                                        />
                                        <AddCircleRoundedIcon
                                                className="icon"
                                                style={{ fontSize: 40 }}
                                                onClick={listofitems}
                                        />

                                        <ol>
                                                
                                                {items.map((item, index) => {
                                                        return (
                                                                <Todolist
                                                                        key={
                                                                                index
                                                                        }
                                                                        id={
                                                                                index
                                                                        }
                                                                        onSelect={deleteItems}
                                                                        text={
                                                                                item
                                                                        }
                                                                />
                                                        );
                                                })}
                                        </ol>
                                </div>
                        </div>
                </>
        );
};
//
export default App;
