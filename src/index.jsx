import React from "react";
import ReactDOM from "react-dom";

import "./styles";

class HelloWorld extends React.Component {
    render () {
        return <span>Hello world!</span>
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
