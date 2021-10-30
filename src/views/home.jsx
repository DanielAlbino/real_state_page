import React, { Component } from "react";
import { NavBar } from "../components/navbar/navbar";
import { SearchCard } from "../components/searchCard/searchCard";
import { ImageCard } from "../components/imageCard/imageCard";
import { DownCircle } from "../components/downCircle/downCircle";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <hr class="line rotate" />
        <hr class="line" width="87%" />

        <div className="col-12 row">
          <div className="col-12 col-md-6">
            <div className="col-6">
              <h1 className="title">Buy, Sell, Haunt.</h1>
            </div>
            <div>
              <p className="sub-title">
                Your ninghtmare house is no longer just a nightmare.
              </p>
            </div>
            <div className="col-12 col-md-8 searchCard">
              <SearchCard />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <ImageCard />
          </div>
        </div>
        <div className="col-12">
          <DownCircle />
        </div>
      </div>
    );
  }
}

export default Home;
