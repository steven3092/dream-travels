import { ChangeEvent } from "react";
import "./input.scss";

export const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  required,
  defaultValue,
  role,
}: {
  type: "text" | "search" | "number";
  placeholder: string;
  defaultValue?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  role?: string;
}) => {
  return (
    <>
      <input
        type={type}
        className="dream-trips-input"
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        required={required}
        role={role}
      />
    </>
  );
};
