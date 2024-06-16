import React from "react";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

export default function Index({ children }) {
  return (
    <div>
      <AdminHeader />
         {children}
      <AdminFooter />
    </div>
  );
}
