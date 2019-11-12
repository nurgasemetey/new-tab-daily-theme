/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from "react";
import { Sidebar, SidebarItem } from "react-rainbow-components";

const dailies = [
  {
    name: "Monday",
    label: "Monday",
    img: "https://img.icons8.com/wired/64/000000/monday.png"
  },
  {
    name: "Tuesday",
    label: "Tuesday",
    img: "https://img.icons8.com/wired/64/000000/tuesday.png"
  },
  {
    name: "Wednesday",
    label: "Wednesday",
    img: "https://img.icons8.com/wired/64/000000/wednesday.png"
  },
  {
    name: "Thursday",
    label: "Thursday",
    img: "https://img.icons8.com/wired/64/000000/thursday.png"
  },
  {
    name: "Friday",
    label: "Friday",
    img: "https://img.icons8.com/wired/64/000000/friday.png"
  },
  {
    name: "Saturday",
    label: "Saturday",
    img: "https://img.icons8.com/wired/64/000000/saturday.png"
  },
  {
    name: "Sunday",
    label: "Sunday",
    img: "https://img.icons8.com/wired/64/000000/sunday.png"
  }
];

export default class SideNavigation extends Component {
  updateSelectedDay = (e, selectedItem) => {
    this.props.updateSelectedDay(selectedItem);
  };

  renderSliderBarItems = () => {
    return dailies.map(item => (
      <SidebarItem
        name={item.name}
        label={item.label}
        icon={<img src={item.img} />}
      />
    ));
  };

  render() {
    return (
      <aside className="rainbow-admin_vertical-navigation rainbow-p-vertical_small">
        <Sidebar
          id="sidebar"
          onSelect={this.updateSelectedDay}
          selectedItem={this.props.selected_day}
        >
          {this.renderSliderBarItems()}
        </Sidebar>
      </aside>
    );
  }
}
