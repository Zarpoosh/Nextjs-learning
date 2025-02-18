import React from "react"

function AuthLayout ({children }: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children} 
      <h1>طرح احراز هویت </h1>
    </>
  )
};

export default AuthLayout;
