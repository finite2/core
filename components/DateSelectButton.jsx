export const DateSelectButton = ({ date, onChange }) => {
  return (
    <input
      type="date"
      value={date.toLocaleDateString("en-CA")}
      onChange={(e) => onChange(new Date(e.target.value))}
    />
  );
};
