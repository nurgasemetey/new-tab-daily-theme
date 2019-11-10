import React from 'react';
import ParentComponent from './parentComponent';
import './styles.css';
import './media-queries.css';

export default function AdminExample() {
    return (
        <main className="rainbow-admin_view-port rainbow-background-color_gray-1">
            <ParentComponent/>
        </main>
    );
}
