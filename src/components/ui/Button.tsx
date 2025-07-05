import type { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "success" | "warning" | "danger";

type TButton = ComponentProps<"button"> & {
  variant: TVariant;
};

function Button({ children, variant, ...props }: TButton) {
  return (
    <button {...props} className={variantCheck(variant)}>
      {children}
    </button>
  );
}

export default Button;

function variantCheck(variant: TVariant) {
  switch (variant) {
    case "primary":
      return "bg-emerald-400 py-2 px-3 rounded cursor-pointer hover:shadow-lg hover:bg-emerald-600";
    case "secondary":
      return "m-4 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-800 cursor-pointer";
    case "success":
      return "m-4 px-4 py-3 bg-gradient-to-r from-lime-500 to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-lime-600 hover:to-emerald-800 cursor-pointer";
    case "warning":
      return "m-4 px-4 py-3 rounded-xl shadow-lg bg-amber-400 cursor-pointer hover:shadow-lg hover:bg-amber-600";
    case "danger":
      return "bg-red-400 py-2 px-3 rounded cursor-pointer hover:shadow-lg hover:bg-red-600";
    default:
      return "";
  }
}
