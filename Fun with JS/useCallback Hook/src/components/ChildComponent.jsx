import  React from "react";

const ChildComponent = React.memo(
    (props) => {

        console.log("child component go re-rendered again")

        return (
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    }
)

export default ChildComponent;

// React.map -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi tho re-render nahi hoga.

// if u r sending a function , then react.memo wont be able to save you re-rendering.
