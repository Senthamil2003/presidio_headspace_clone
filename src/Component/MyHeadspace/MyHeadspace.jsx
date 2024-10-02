import React from "react";
import HeadspaceNav from "../HeadspaceNav/HeadspaceNav";
import BottomNav from "../HeadspaceNav/BottomNav";
import HeadspaceContent from "../HeadspaceContent/HeadspaceContent";

export default function MyHeadspace() {
  return (
    <div>
      <HeadspaceNav />
      <HeadspaceContent />
      <BottomNav />
      
    </div>
  );
}
