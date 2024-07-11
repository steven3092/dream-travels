import "./button.scss"

export const Button = ({
    name,
    type,
    backgroundColor,
    color
  }: {
    name: string;
    type: "submit" | "reset" | "button" | undefined;
    backgroundColor: string;
    color: string;
  }) => {
    return <button style={{ backgroundColor: backgroundColor, color: color }} type={type} className="dream-trips-button">{name}</button>;
  };