/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';

import { Sidebar, SidebarItem } from 'react-rainbow-components';

export default class SideNavigation extends Component {

    updateSelectedDay = (e, selectedItem) => {
        console.log(selectedItem);
        this.props.updateSelectedDay(selectedItem);
    }

    render() {
        return (
            <aside className="rainbow-admin_vertical-navigation rainbow-p-vertical_small">
            <Sidebar selectedItem={this.props.selected_day} onSelect={this.updateSelectedDay} id="sidebar-1">
                <SidebarItem icon={<img src="https://img.icons8.com/wired/64/000000/monday.png" />} name="Monday" label="Monday" />
                <SidebarItem icon={<img src="https://img.icons8.com/wired/64/000000/tuesday.png"/>} name="Tuesday"label="Tuesday"/>
                <SidebarItem icon={<img src="https://img.icons8.com/wired/64/000000/wednesday.png"/>} name="Wednesday" label="Wednesday" />
                <SidebarItem icon={<img src="https://img.icons8.com/wired/64/000000/thursday.png"/>} name="Thursday" label="Thursday" />
                <SidebarItem icon={<img src="https://img.icons8.com/wired/64/000000/friday.png" />} name="Friday" label="Friday" />
                <SidebarItem icon={<img src="https://img.icons8.com/wired/64/000000/saturday.png"/>} name="Saturday" label="Saturday" />
                <SidebarItem icon={<img src="https://img.icons8.com/wired/64/000000/sunday.png" />} name="Sunday" label="Sunday" />
            </Sidebar>

            </aside>
        );
    }
}
