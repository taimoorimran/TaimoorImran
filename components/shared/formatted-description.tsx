export const getFormattedText = (row: string, delimeter: string = ":") => {
  const splittedStr = row.split(delimeter);
  return splittedStr;
};

interface FormattedDescProps {
  desc: string;
}

const FormattedDescription = ({ desc }: FormattedDescProps) => {
  if (!desc) return <p>{desc}</p>;
  const splittedText = getFormattedText(desc);
  if (splittedText.length < 2) {
    return <p>{splittedText}</p>;
  }
  return (
    <p>
      <span className="text-lg">{splittedText[0]}: </span>
      {splittedText[1]}
    </p>
  );
};
export default FormattedDescription;
