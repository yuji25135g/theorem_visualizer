import { GraphData, GraphEvents } from "react-graph-vis";
import { StateData } from "../types/StateData";

interface StateGraphData {
  graph: GraphData;
  events: GraphEvents;
}

export const useStateGraphData = (
  stateDataList: StateData[],
  step: number
): StateGraphData => {
  const graph = {
    nodes: [
      ...new Set([
        "A |- A",
        ...stateDataList
          .slice(0, step)
          .map((d) => d.nodes)
          .flat(),
      ]),
    ].map((d) => ({ id: d, label: d })),
    edges: stateDataList
      .slice(0, step)
      .filter((d) => d.from)
      .map((d) =>
        d.nodes.map((n, i) => ({
          from: d.from,
          to: n,
          label: d.probs[i].toString(),
        }))
      )
      .flat()
      .filter(
        (d, i, array) =>
          array
            .slice()
            .reverse()
            .findIndex((e) => e.from === d.from && e.to === d.to) ===
          array.length - 1 - i
      ),
  };

  const events = {};

  return { graph, events };
};
