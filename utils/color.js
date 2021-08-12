export const stringToColor = (str = "") => {
  if (!str || typeof str !== "string") {
    return "#fff";
  }

  const a = parseInt(str[0], 36) - 10 || 1;
  const b = parseInt(str.replace(/[^a-zA-Z]+/g, ""), 36) - 10 || 1;

  return `hsl(${((a + b) * (a + b - 1) + b) % 360}, 80%, 40%)`;
};
