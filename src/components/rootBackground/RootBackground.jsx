import React from 'react';


const BackgroundLayout = ({ children }) => {
  return (
    <div className="relative">
      
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="absolute w-[615px] h-[635px] blur-[900px] bg-[rgb(227,94,207)] rotate-[146deg]"></div>
      </div>

      
      {/* Main Content */}
      <div className="relative w-full z-1000">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
