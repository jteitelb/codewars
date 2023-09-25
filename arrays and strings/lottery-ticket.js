function bingo(ticket, win) {
  return ticket.filter((sub) => sub[0].includes(String.fromCharCode(sub[1])))
    .length >= win
    ? "Winner!"
    : "Loser!";
}

function bingo2(ticket, win) {
  function miniWin(subArr) {
    const [letters, code] = subArr;
    return letters.includes(String.fromCharCode(code));
  }
  return ticket.filter(miniWin).length >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo2([
    ["ABC", 65],
    ["HGR", 74],
    ["BYHT", 74],
  ])
);
