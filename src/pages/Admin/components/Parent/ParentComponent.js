import React, { Component } from "react";
import FocusContent from "../FocusContent/FocusContent";
import SideNavigation from "../SideNavigation/SideNavigation";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selected_day: "Monday",
      dayMap:{
        "Monday": {
          focusText: "Design",
        },
        "Tuesday": {
          focusText: "Design",
        },
        "Wednesday": {
          focusText: "Design",
        },
        "Thursday": {
          focusText: "Design",
        },
        "Friday": {
          focusText: "Design",
        },
        "Saturday": {
          focusText: "Design",
        },
        "Sunday": {
          focusText: "Design",
        }
      }
    };
  }

  updateSelectedDay = selected_day => {
    this.setState({ selected_day: selected_day });
  };
  updateFocusText = focusText => {
    let dayMap = this.state.dayMap;
    dayMap[this.state.selected_day].focusText = focusText;
    this.setState({ dayMap:dayMap });
  };

  render() {
    return (
      <div>
        <SideNavigation
          selected_day={this.state.selected_day}
          updateSelectedDay={this.updateSelectedDay}
        />
        <article className="rainbow-admin_main-inner">
          <FocusContent selected_day={this.state.selected_day} dayMap={this.state.dayMap} updateFocusText={this.updateFocusText} />
        </article>
      </div>
    );
  }
}
