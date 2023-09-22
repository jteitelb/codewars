function abbrevName(name) {
  return name
    .split(" ")
    .map((s) => s[0].toUpperCase())
    .join(".");
}

console.log(abbrevName("patrick feeney"));
