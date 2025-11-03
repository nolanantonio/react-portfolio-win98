export default function Button({
  children,
  text,
  className = "",
  labelClassName = "",
  ...props
}) {
  return (
    <button
      className={`w-2/6 bg-[#b6b6b6] chrome-edge transition shadow-lg hover:-translate-y-1 font-win98 ${className}`}
      {...props}
    >
      <span className={labelClassName}>
        {children ?? text ?? ''}
      </span>
    </button>
  );
}
