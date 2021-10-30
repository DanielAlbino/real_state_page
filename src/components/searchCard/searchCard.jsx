import React from "react";
import "../../css/searchCard.css";

export class SearchCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-8 search-card mt-2">
          <div className="col-12 input-div">
            <label>Location</label>
            <input placeholder="e.g Transylvania" />
          </div>
          <div className="col-12 input-div">
            <label>Type</label>
            <input placeholder="e.g Castle" />
          </div>
          <div className="col-12 input-div">
            <label>Price range</label>
            <input placeholder="$ 300k - 400k" />
          </div>
        </div>
        <div className="col-2 btn-search">
          <i class="fas fa-search fa-2x"></i>
        </div>
      </div>
    );
  }
}
