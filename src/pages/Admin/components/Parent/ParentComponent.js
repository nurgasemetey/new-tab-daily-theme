import React, { Component } from "react";
import FocusContent from "../FocusContent/FocusContent";
import SideNavigation from "../SideNavigation/SideNavigation";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { selected_day: "Monday" };
  }

  updateSelectedDay = selected_day => {
    this.setState({ selected_day: selected_day });
  };

  render() {
    return (
      <div>
        <SideNavigation
          selected_day={this.state.selected_day}
          updateSelectedDay={this.updateSelectedDay}
        />
        <article className="rainbow-admin_main-inner">
          <FocusContent selected_day={this.state.selected_day} />
        </article>
      </div>
    );
  }
}
