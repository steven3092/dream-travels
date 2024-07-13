import "./textarea.scss";

export const TextArea = ({
  placeholder,
  name,
  defaultValue,
}: {
  placeholder: string;
  name?: string;
  defaultValue?: string;
}) => {
  return (
    <>
      <textarea
        className="textarea"
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
      />
    </>
  );
};
