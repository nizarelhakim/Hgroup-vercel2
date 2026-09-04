const variants = {
  primary: "bg-gold-500 hover:bg-gold-600 text-navy-950",
  outline: "bg-transparent border border-white/70 text-white hover:bg-white/10",
  dark: "bg-navy-900 hover:bg-navy-800 text-white",
};

export function Button({ children, className = "", variant = "primary", ...props }) {
  return (
    <button
      className={`rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-soft ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
