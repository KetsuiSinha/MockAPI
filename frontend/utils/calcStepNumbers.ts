export function calcStepNumbers(
  nodes: { id: string }[],
  edges: { source: string; target: string }[]
): Record<string, number> {

  const graph = new Map<string, string[]>();
  const indegree = new Map<string, number>();

  nodes.forEach((n) => {
    graph.set(n.id, []);
    indegree.set(n.id, 0);
  });

  edges.forEach((e) => {
    graph.get(e.source)!.push(e.target);
    indegree.set(e.target, indegree.get(e.target)! + 1);
  });

  const queue: string[] = [];

  indegree.forEach((count, id) => {
    if (count === 0) queue.push(id);
  });

  const order: Record<string, number> = {};
  let step = 0;

  while (queue.length) {
    const id = queue.shift()!;
    order[id] = step++;

    graph.get(id)!.forEach((next) => {
      indegree.set(next, indegree.get(next)! - 1);
      if (indegree.get(next) === 0) queue.push(next);
    });
  }

  return order;
}
