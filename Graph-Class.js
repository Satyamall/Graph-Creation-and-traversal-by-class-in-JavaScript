
// graphs
// JavaScript
// class, objects
// class, maps

class Graph{
    constructor(){
        this.elem = new Map();
        this.vertices = 0;
        this.edges = 0;
        this.visited = {};
        this.q = [];
    }

    // addVertex
    addVertex(v){
        this.elem.set(v,[])
        this.vertices++
    }

    // has a vertex
    hasVertex(v){
        // returns true or false
        return this.elem.has(v)
    }

    // get the values at a vertex
    neighbours(v){
        return this.elem.get(v)
    }

    // update values at a vertex
    updateVertex(v,val){
        this.elem.set(v,val);
    }

    // addEdge
    addEdge(v1,v2){
        // graph has v1
        // if not, add v1
        if(!this.hasVertex(v1)){
            this.addVertex(v1)
        }

        // graph has v2?
        // if no, add v2
        if(!this.hasVertex(v2)){
            this.addVertex(v2)
        }
        // get data of v1,
        // push v2, into v1 values
        // update v1 edge
        let val = this.neighbours(v1);
        // check if v2 exists in val
        val[val.length] = v2;
        // if v2 exists in val
        this.updateVertex(v1,val);

        // // get data of v2,
        // // push v1, into v2 values
        // // update v2 edge
        // let val2 = this.neighbours(v2);
        // // check if v1 exists in val
        // val2[val2.length] = v1;
        // // if v1 exists in val
        // this.updateVertex(v2,val2);

        this.edges++
    }

    // has an edge
    hasEdge(v1,v2){
        let val = this.neighbours(v1);
        if(val.indexOf(v2)!==-1)
        {
            return true;
        }
        else{
            return false;
        }
    }

    // no of vertices
    noOfVertices(){
       return this.vertices
    }

    // no of edges
    noOfEdges(){
        return this.edges
    }

    // bfs
    bfs(v){
        this.visited={};
        this.q.push(v);

        // as long as q is not empty

        while(this.q.length!==0){

            let neighbours = this.neighbours(this.q[0])
            if(!this.visited[this.q[0]]){
                this.visited[this.q[0]]=1

                neighbours.forEach(a=>{

                    console.log(this.q[0], '=>', a);

                    this.q.push(a)

                })

                this.q.shift();
            }
        }
    }

    // dfs
    // recursion
    _dfs(v,level=null){
        if(this.visited[v]===1){
            return
        }
        this.visited[v]=1;
        
        if(level===null){
           let val = this.neighbours(v)
           val.forEach(a=>{
               console.log(v,'=>',a)
               this._dfs(a)
           })
        }
    }

    dfs(v){
        this.visited = {};
        this._dfs(v)
    }
}

var graph = new Graph();

// graph.addVertex(0);
// graph.addVertex(1);
// graph.addVertex(2);

graph.addEdge(0,2);
graph.addEdge(0,1);
graph.addEdge(1,3);
graph.addEdge(2,5);

// console.log(graph);
// console.log(graph.noOfEdges());
// console.log(graph.noOfVertices());

// dfs
// graph.dfs(0)

// bfs

graph.bfs(0)
// 0 => 2
// 0 => 1
//      2 => 5
//      1 => 3
