import type React from "react";

interface CardProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  bgColor = "bg-white",
  textColor = "text-gray-800",
}) => {
  return (
    <div className={`p-4 m-3 rounded-2xl shadow-md ${bgColor} ${textColor}`}>
      {children}
    </div>
  );
};

export default Card;
