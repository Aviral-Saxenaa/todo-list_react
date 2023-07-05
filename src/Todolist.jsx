import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
const Todolist = (props) => {
        return (
                <>
                        <li>
                                <CancelIcon
                                        className="icon-cross"
                                        style={{
                                                fontSize: 40,
                                        }}
                                        onClick={props.onSelect}
                                />
                                {props.text}
                        </li>
                </>
        );
};

export {Todolist,CancelIcon};

