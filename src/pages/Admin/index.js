import React from "react";
import "./styles.css";
import "./media-queries.css";
import Parent from "./components/Parent/ParentComponent";

export default function AdminExample() {
  return (
    <main className="rainbow-admin_view-port rainbow-background-color_gray-1">
      <Parent />
    </main>
  );
}
