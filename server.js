var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var bodyparser = require('body-parser');
var todos = [];
var todoNextId = 1;

app.use(bodyparser.json());

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


//POST /todos/:id
app.post('/todos',function(req,res){
	var body = req.body;
	body.id = todoNextId;
	todoNextId++;

	todos.push(body);

	console.log('description' + body.description);
	res.json(body);
});

app.listen(PORT, function(){
	console.log('Express listen on port ' + PORT);
});