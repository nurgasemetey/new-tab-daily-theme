import React from 'react';
import SideNavigation from './sideNavigation';
import FocustContent from './focusContent';
export default class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected_day: "Monday" };
        // this.updateSelectedDay = this.updateSelectedDay.bind(this);
    }

    updateSelectedDay = (selected_day) => {
        console.log(selected_day);
        this.setState({ selected_day: selected_day });
    }

    render() {
        return (
            <div>
                <SideNavigation selected_day={this.state.selected_day} updateSelectedDay={this.updateSelectedDay} />


                <article className="rainbow-admin_main-inner">
                    <FocustContent selected_day={this.state.selected_day} />
                </article>
            </div>
        );
    }
}