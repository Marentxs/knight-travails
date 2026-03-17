function reconstruct(start, end) {
  let path = [];
  const at = end;
  while (at != start) {
    path.prepend(at);
    at = parent[at];
    path.prepend(start);
    return path;
  }
}

function getNeighbors(current) {
  const parts = current.split(",");
  const [x, y] = parts.map(Number);

  let candidates = [
    `${x + 1},${y + 2}`,
    `${x - 1},${y + 2}`,

    `${x + 1},${y - 2}`,
    `${x - 1},${y - 2}`,

    `${x + 2},${y + 1}`,
    `${x + 2},${y - 1}`,

    `${x - 2},${y + 1}`,
    `${x - 2},${y - 1}`,
  ];

  return candidates.filter((candidate) => {
    const [cx, cy] = candidate.split(",").map(Number);
    return cx >= 0 && cx <= 7 && cy >= 0 && cy <= 7;
  });
}
