import React from "react";
import { MonitorPlay } from "lucide-react";

function Header() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2 text-teal-400">
        <MonitorPlay size={24} />
        <span className="text-xl font-medium">Webinar</span>
        <span className="text-xl font-medium text-white">.gg</span>
      </div>
      <h1 className="text-2xl font-semibold text-white">Check Your Email For A Code</h1>
    </div>
  );
}

export default Header;
