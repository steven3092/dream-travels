import "./input.scss";

export const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  required,
  defaultValue,
}: {
  type: "text" | "search" | "number";
  placeholder: string;
  defaultValue?: string;
  name?: string;
  value?: string;
  onChange?: (e: any) => void;
  required?: boolean;
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
      />
    </>
  );
};
