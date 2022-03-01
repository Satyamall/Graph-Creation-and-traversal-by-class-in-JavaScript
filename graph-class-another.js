
class Grapgh{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(v){
        if(!this.adjacencyList[v])
            this.adjacencyList[v] = [];
    }
    createEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    deleteEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v!==v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v!==v1);
    }
    deleteVertex(v){
        while(this.adjacencyList[v].length){
            const adjacenctVertex = this.adjacencyList[v].pop();
            this.deleteEdge(v,adjacenctVertex);
        }
        delete this.adjacencyList[v];
    }
    depthFS(start){
        const ans = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(v){
            if(!v){
                return null;
            }
            visited[v] = true;
            ans.push(v);
            adjacencyList[v].forEach((adj) => {
                if(!visited[adj]){
                    return dfs(adj);
                }
            });
        })(start);
        return ans;
    }
}

let g = new Grapgh();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.createEdge("A","B");
g.createEdge("A","C");
g.createEdge("B","D");
g.createEdge("C","E");
g.createEdge("D","E");
g.createEdge("D","F");
g.createEdge("E","F");
// g.deleteEdge("A","B");
// g.deleteVertex("A");
// g.deleteVertex("E");
let outPut = g.depthFS("A");
console.log(g);
console.log(outPut);