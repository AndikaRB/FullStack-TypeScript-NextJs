import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      layout
      {children}
    </div>
  );
}
