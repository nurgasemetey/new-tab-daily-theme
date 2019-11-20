import React, { Component } from "react";
import "./styles.css";
import "./media-queries.css";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import {defaultDayMap} from './Constants';
import FocusContent from "./components/FocusContent/FocusContent";

class AdminExample extends Component {

  constructor(props) {
    super(props);
    let dayMap = null;
    if(!localStorage.getItem('dayMap')) {
      dayMap = defaultDayMap;
    }
    else {
      dayMap = JSON.parse(localStorage.getItem('dayMap'));
    }
    this.state = { 
      selectedDay: "Monday",
      dayMap: dayMap
    };
  }

  updateSelectedDay = selected_day => {
    this.setState({ selectedDay: selected_day });
  };
  updateFocusText = focusText => {
    let dayMap = this.state.dayMap;
    dayMap[this.state.selectedDay].focusText = focusText;
    this.setState({ dayMap:dayMap });
    localStorage.setItem('dayMap', JSON.stringify(dayMap));
  };
  render() {
    return (
      <main className="rainbow-admin_view-port rainbow-background-color_gray-1">
        <SideNavigation
            selected_day={this.state.selected_day}
            updateSelectedDay={this.updateSelectedDay}
          />
        <article className="rainbow-admin_main-inner">
          <FocusContent selectedDay={this.state.selectedDay} dayMap={this.state.dayMap} updateFocusText={this.updateFocusText} />
        </article>
          
      </main>
    );
  }
}

export default AdminExample;
