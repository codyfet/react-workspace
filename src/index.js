import React from "react";
import ReactDOM from "react-dom";

import "./main.less";

class HelloWorld extends React.Component {
    render () {
        return <div>Hellow, world!</div>
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));