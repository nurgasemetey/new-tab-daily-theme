import React from 'react';
import SideNavigation from './sideNavigation';
import FocustContent from './focusContent'
import './styles.css';
import './media-queries.css';

export default function AdminExample() {
    return (
        <main className="rainbow-admin_view-port rainbow-background-color_gray-1">
            <SideNavigation />


            <article className="rainbow-admin_main-inner">
                <FocustContent />
            </article>
        </main>
    );
}
