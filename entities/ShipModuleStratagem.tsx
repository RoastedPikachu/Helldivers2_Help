import React from "react";

interface StratagemProps {
  iconPath: string;
  name: string;
}

const ShipModuleStratagem: React.FC<StratagemProps> = ({ iconPath, name }) => {
  return (
    <div className="flex items-center mt-[20px]">
      <img
        src={`${iconPath}`}
        alt=""
        className="relative w-[50px] mlarge:w-[40px] mmedium:w-[35px] msmall:w-[30px] mlarge:min-w-[40px] mmedium:min-w-[35px] msmall:min-w-[30px] h-[50px] mlarge:h-[40px] mmedium:h-[35px] msmall:h-[30px] mlarge:min-h-[40px] mmedium:min-h-[35px] msmall:min-h-[30px] rounded-[5px] mlarge:overflow-hidden"
      />

      <p className="ml-[20px] mlarge:ml-[10px] text-[#ffffff] text-[1.25rem] mlarge:text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] font-['Exo2'] font-bold">
        {name}
      </p>
    </div>
  );
};

export default ShipModuleStratagem;
