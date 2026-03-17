function reconstruct(parent, start, end) {
  const path = [end];
  let at = end;

  while (at != start) {
    at = parent[at];
    path.unshift(at);
  }

  return path;
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

function knightMoves(start, end) {
  if (start === end) {
    return [start];
  }

  const queue = [start];
  const visited = [start];
  const parent = {};

  while (queue.length !== 0) {
    const current = queue.shift();

    const neighbors = getNeighbors(current);
    for (const neighbor of neighbors) {
      if (!visited.includes(neighbor)) {
        visited.push(neighbor);
        parent[neighbor] = current;

        if (neighbor === end) {
          return reconstruct(parent, start, end);
        }

        queue.push(neighbor);
      }
    }
  }
  return "no path";
}
