import React from "react";

interface IContainer {
  children: React.ReactNode;
}

function PageContainer({ children }: IContainer) {
  return <div className="container mx-auto my-10">{children}</div>;
}

export default PageContainer;
