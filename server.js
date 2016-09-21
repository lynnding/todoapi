var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
	id : 1,
	description : 'buy toothpaste',
	completed: false
},{
	id : 2,
	description : 'have lunch',
	completed: false
},{
	id : 3,
	description : 'feed bird',
	completed: false
} ];

app.get('/',function (req, res){
	res.send('TODO API ROOT !');

});


//Get /todos

app.get('/todos',function(req,res){
	res.json(todos);

});
//Get /todos/:id
app.get('/todos/:id',function(req,res){
	var todoId = parseInt(req.params.id,10);
	var match;
	console.log('Ask for todo id :' + todoId);

	todos.forEach(function(item){
		if(item.id === todoId){
			match = item;
		}
	});

	if(typeof match === 'undefined'){
		res.status(404).send('index out of range');
	} else {
		res.json(match);
	}
});

app.listen(PORT, function(){
	console.log('Express listen on port ' + PORT);
});