class Graph {
    constructor() {
      this.vertices = new Map();
    }
  
    addVertex(vertex) {
      if (!this.vertices.has(vertex)) {
        this.vertices.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
  
      this.vertices.get(vertex1).push(vertex2);
      this.vertices.get(vertex2).push(vertex1);
    }
  
    removeVertex(vertex) {
      if (this.vertices.has(vertex)) {
        this.vertices.delete(vertex);
  
        // Remove the vertex from adjacency lists of other vertices
        for (const adjacentVertex of this.vertices.values()) {
          const index = adjacentVertex.indexOf(vertex);
          if (index !== -1) {
            adjacentVertex.splice(index, 1);
          }
        }
      }
    }
  
    removeEdge(vertex1, vertex2) {
      if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
        const index1 = this.vertices.get(vertex1).indexOf(vertex2);
        const index2 = this.vertices.get(vertex2).indexOf(vertex1);
  
        if (index1 !== -1) {
          this.vertices.get(vertex1).splice(index1, 1);
        }
  
        if (index2 !== -1) {
          this.vertices.get(vertex2).splice(index2, 1);
        }
      }
    }
  
    // Depth-First Search (DFS)
    dfs(startVertex, visited = new Set(), callback) {
        if (!visited.has(startVertex)) {
          visited.add(startVertex);
          callback(startVertex);
    
          for (const neighbor of this.vertices.get(startVertex)) {
            this.dfs(neighbor, new Set([...visited]), callback);
          }
        }
      }
  
    // Breadth-First Search (BFS)
    bfs(startVertex, callback) {
      const visited = new Set();
      const queue = [startVertex];
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
  
        if (!visited.has(currentVertex)) {
          callback(currentVertex);
          visited.add(currentVertex);
  
          for (const neighbor of this.vertices.get(currentVertex)) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
  
  // Example usage:
  
  const graph = new Graph();
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");
  
  console.log("Graph:", graph.vertices);
  
  graph.removeVertex("D");
  console.log("Graph after removing vertex D:", graph.vertices);
  
  graph.removeEdge("A", "C");
  console.log("Graph after removing edge A-C:", graph.vertices);
  
  console.log("DFS traversal:");
  graph.dfs("A",undefined, (vertex) => console.log(vertex));
  
  console.log("BFS traversal:");
  graph.bfs("A", (vertex) => console.log(vertex));
  