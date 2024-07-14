import "./textarea.scss";

export const TextArea = ({
  placeholder,
  name,
  defaultValue,
  role,
}: {
  placeholder: string;
  name?: string;
  defaultValue?: string;
  role?: string;
}) => {
  return (
    <>
      <textarea
        className="textarea"
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
        role={role}
      />
    </>
  );
};
