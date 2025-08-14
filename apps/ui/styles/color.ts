export const color = {
  primary: "#000",
  secondary: "#fff"
};

export const hexToRgb = (hex: string) => {
  // Remove # if present
  let cleanHex = hex.replace("#", "");

  // Convert 3-digit hex to 6-digit
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Ensure it's 6 characters
  cleanHex = cleanHex.padEnd(6, "0");

  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
};
