import React from "react";
import { Wrench, Smartphone, BatteryCharging, ShieldCheck } from "lucide-react";

const icons = {
  repair: <Wrench size={40} className="text-blue-600" />,
  screen: <Smartphone size={40} className="text-blue-600" />,
  battery: <BatteryCharging size={40} className="text-blue-600" />,
  security: <ShieldCheck size={40} className="text-blue-600" />,
};

const RepairServiceCard = ({ type, title, description }) => {
  return (
   <div className="bg-white cursor-pointer hover:bg-[#1AA3DD] shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 rounded-tl-[20px] rounded-br-[20px]">

      <div className="mb-4 flex justify-center">{icons[type]}</div>
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default RepairServiceCard;
