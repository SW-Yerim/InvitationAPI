import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="mb-16 max-w-3xl mx-auto">{children}</div>;
};

export default Layout;
