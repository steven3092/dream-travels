import "./button.scss";

export const Button = ({
  name,
  type,
  backgroundColor,
  color,
  onClick,
}: {
  name: string;
  type: "submit" | "reset" | "button" | undefined;
  backgroundColor: string;
  color: string;
  onClick?: () => void;
}) => {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      type={type}
      className="dream-trips-button"
      onClick={onClick}
    >
      {name}
    </button>
  );
};
