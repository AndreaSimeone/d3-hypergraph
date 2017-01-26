# d3-forcehypergraph

**forcehypergraph** is a simple implementation of [Hypergraph](https://en.wikipedia.org/wiki/Hypergraph) linking using the awesome Mike Bostock's [force layout](https://github.com/d3/d3-force).

## Installing

If you use NPM, `npm install d3-forcehypergraph`. Otherwise, download the [latest release](https://github.com/d3/d3-forcehypergraph/releases/latest).

## Usage

####<a name="forcehypergraph" href="#forcehypergraph">#</a> <b>forcehypergraph</b>([_links_],[_nodes_])

As shown by the [example](https://bl.ocks.org/mbostock/4600693) the function expect [_links_],[_nodes_] to be arrays of links and nodes. Since the hypergraph can connect a number of nodes that is major of 2 the link's rappresentation is coded as an array that contains sets of nodes connected into the same hypergraph: for every sets with a number of elements major of 2 the function will create a "**connection node**" and the links that connect the nodes of the set to the connection node.
For example a proper json rappresentation of nodes connected by hypergraph is:

```json
{
  "nodes": [
    {"id": "A"},
    {"id": "B"},
    {"id": "C"},
    {"id": "D"},
    {"id": "E"}
  ],
  
  "links": [
   ["A","B","C"],
   ["C","D","E"],
   ["C","E"]
  ]
}
```
The returned data are contained in an array of arrays with the structure [[links],[nodes]]:
	* links contains all the links of the graph
	* nodes contains all the nodes of the graph with the add of "connection nodes".

Is evident that, at the moment, into the nodes array the connection nodes are graphically indistinguishable from the nodes of the graph but modify the graphical rappresentation is quite simple because the connection nodes are easily recognizable by their internal structure:
```js
//generic node structure
{
  id:"A"
}
//connection node structure 
{
  id:"lnABC"
  link:"True"
}
```
that consent us to modify the graphical rappresentation of nodes:

 ```js 
 var node = svg.selectAll(".node")
   .data(nodes.filter(function(d) { return d.id; }))
   .enter().append("circle")
   .attr("class", function(d){
    if (d.link){
      return "linknode";
    }else{
	  return "node";
    }
   })
 ```
 
## API Reference

YOUR API DOCUMENTATION HERE. Use bold for symbols (such as constructor and method names) and italics for instances. See the other D3 modules for examples.

<a href="#forcehypergraph" name="forcehypergraph">#</a> <b>forcehypergraph</b>()

Computes the answer to the ultimate question of life, the universe, and everything.
