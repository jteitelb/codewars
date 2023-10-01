function rgb(r, g, b) {
  return [r, g, b]
    .map((n) => {
      if (n <= 0) {
        return "00";
      } else if (n >= 255) {
        return "FF";
      } else {
        return n.toString(16).padStart(2, "0").toUpperCase();
      }
    })
    .join("");
}
