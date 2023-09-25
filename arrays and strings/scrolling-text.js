function scrollingText(text) {
  return Array(text.length)
    .fill(0)
    .map((_, i) => text.slice(i) + text.slice(0, i))
    .map((s) => s.toUpperCase());
}

console.log(scrollingText("Hello"));
