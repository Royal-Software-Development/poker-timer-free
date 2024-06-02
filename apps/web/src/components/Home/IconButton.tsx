import { cn } from "../../lib/cn";
import React, { ReactNode } from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "green" | "red" | "neutral";
  icon: ReactNode
}

const IconButton = ({ variant, icon, ...props }: IconButtonProps) => {
  return (
    <button
      className={cn("flex justify-center px-6  w-full py-3 rounded-lg max-w-[132px]", {
        "bg-emerald-600": variant === "green",
        "bg-red-600": variant === "red",
        "bg-gray-50": variant === "neutral"
      })}
      {...props}
    >
      {icon}
    </button>
  )
}

export default IconButton
