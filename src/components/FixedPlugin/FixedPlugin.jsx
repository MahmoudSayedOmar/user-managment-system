/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.classes === "dropdown") {
      this.setState({ classes: "dropdown show" });
    } else {
      this.setState({ classes: "dropdown" });
    }
  }
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <i className="fa  fa-search fa-2x" />
          </div>
          <div className="dropdown-menu show">
            <div>
              {" "}
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
              search Goes hsere <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
