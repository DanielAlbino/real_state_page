import React, { Component } from "react";
import { List } from "../lists/lists";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: ["Properties", "Buyers", "Sellers", "Contact"],
      show: false,
    };
  }

  showHideDropDownMenu(e) {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Hoopla
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <List
            styleClass={["navbar-nav mr-auto", "nav-item"]}
            list={this.state.menu}
          />
          <div className="right-menu">
            <div className="profile-img"></div>
            {!this.state.show ? (
              <i
                class="fas fa-bars"
                onClick={(e) => this.showHideDropDownMenu(e)}
              ></i>
            ) : (
              <i
                class="fas fa-times"
                onClick={(e) => this.showHideDropDownMenu(e)}
              ></i>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
