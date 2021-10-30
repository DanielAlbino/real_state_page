import React from "react";
import "../../css/downCircle.css";

export class DownCircle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="down">
        <i class="fas fa-arrow-down"></i>
      </div>
    );
  }
}
