var tape = require("tape"),
    hypergraph = require("../").hypergraph;

	tape('hypergraph function exists', function(test) {
	    test.ok(typeof hypergraph === 'function');
	    test.end();
	});
	
	tape('hypergraph function returns an object', function(test) {
	    var nodes = [
    		[id = "A"],
    		[id = "B"],
    		[id = "C"],
    		[id = "D"],
    		[id = "E"]
		];
		var links = [
   		 	["A","B","C"],
   		 	["C","D","E"],
   		 	["C","E"]
  	  	];
		var hyper = hypergraph(links,nodes);
		test.ok( hyper.constructor === Object);
		test.ok( function(){
			if (hyper === null ) {return false;}
			return ( (typeof hyper === 'function') || (typeof hyper === 'object') );
		} );
	    test.end();
	});
	
	tape('hypergraph function returns an object that contain a specific number of nodes e hypernodes and link', function(test) {
	    var nodes = [
    		[id = "A"],
    		[id = "B"],
    		[id = "C"],
    		[id = "D"],
    		[id = "E"]
		];
		var links = [
   		 	["A","B","C"],
   		 	["C","D","E"],
   		 	["C","E"]
  	  	];
		var hyper = hypergraph(links,nodes);
		test.equal( hyper.links.length, 7)
		test.equal( hyper.nodes.length, 7);
	    test.end();
	});