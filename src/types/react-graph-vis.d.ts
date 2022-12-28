declare module "react-graph-vis" {
  import { Network, NetworkEvents, Options, Node, Edge, DataSet } from "vis";
  import { Component } from "react";

  export { Network, NetworkEvents, Options, Node, Edge, DataSet } from "vis";

  export interface GraphEvents {
    [event: NetworkEvents]: (params?: any) => void;
  }

  export interface GraphData {
    nodes: Node[];
    edges: Edge[];
  }

  export interface GraphProps {
    graph: graphData;
    options?: Options;
    events?: graphEvents;
    getNetwork?: (network: Network) => void;
    identifier?: string;
    style?: React.CSSProperties;
    getNodes?: (nodes: DataSet) => void;
    getEdges?: (edges: DataSet) => void;
  }

  export interface GraphState {
    identifier: string;
  }

  export default class Graph extends Component<GraphProps, GraphState> {}
}
