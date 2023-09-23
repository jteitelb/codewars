function nbYear(p0, percent, aug, p) {
  pop = p0;
  numYears = 0;
  while (pop < p) {
    pop = Math.floor(pop * (1 + percent / 100) + aug);
    numYears++;
  }
  return numYears;
}
