/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from "react";
import { Sidebar, SidebarItem } from "react-rainbow-components";

const dailies = [
  {
    name: "Monday",
    label: "Monday",
    img: "./assets/images/icons8-monday-50.png"
  },
  {
    name: "Tuesday",
    label: "Tuesday",
    img: "./assets/images/icons8-tuesday-50.png"
  },
  {
    name: "Wednesday",
    label: "Wednesday",
    img: "./assets/images/icons8-wednesday-50.png"
  },
  {
    name: "Thursday",
    label: "Thursday",
    img: "./assets/images/icons8-thursday-50.png"
  },
  {
    name: "Friday",
    label: "Friday",
    img: "./assets/images/icons8-friday-50.png"
  },
  {
    name: "Saturday",
    label: "Saturday",
    img: "./assets/images/icons8-saturday-50.png"
  },
  {
    name: "Sunday",
    label: "Sunday",
    img: "./assets/images/icons8-sunday-50.png"
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
