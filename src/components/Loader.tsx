import React from "react";
import logo from "@/assets/logo.png";

type Props = { message?: string };

export default function Loader({ message = "Loading..." }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 dark:bg-black/90">
      <div className="flex flex-col items-center gap-4">
        <div className="w-28 h-28 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
          <img src={logo} alt="logo" className="w-20 h-20 object-contain animate-[spin_1.8s_linear_infinite]" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground">FullStack Learning</h3>
          <p className="text-sm text-muted-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
}
