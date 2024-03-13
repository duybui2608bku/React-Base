import React from "react";

class MyComponents extends React.Component {
    render() {
        return (
            <>
                <div>My Firt Component</div>
                <div>{(Math.random() * 10).toFixed(0)}</div>
            </>
        )
    }
};

export default MyComponents;