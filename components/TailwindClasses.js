const TailwindClasses = ({ classes, onChange }) => {
  const change = event => onChange(event.target.value);

  return (
    <textarea
      className="text-lg p-4 print:hidden mb-8 font-mono w-full max-w-3xl bg-gray-100"
    value={classes} onChange={change} />
  );
};

export default TailwindClasses;
