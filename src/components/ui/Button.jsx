export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    disabled = false,
    ...props
  }) {
    const baseStyles =
      "inline-flex items-center justify-center font-inter font-medium leading-[1.2] rounded-[10px] transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500";
  
    const variants = {
      primary:
        "bg-gradient-to-br from-blue-500 to-purple-500 text-white hover:opacity-90",
      secondary:
        "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100",
      ghost:
        "bg-transparent text-blue-600 hover:bg-blue-50",
    };
  
    const sizes = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4",
    };
  
    const disabledStyles = disabled
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "";
  
    return (
      <button
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  