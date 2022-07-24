import React from "react";
import TaskContainer from "./TaskContainer";

const BodyContainer = (props) => {
    return(
        <>
            <TaskContainer s={props.s} />
        </>
    );
}

export default BodyContainer;