var express = require('express'); 
var app = express();

var bodyParser = require('body-parser');
// Parsear o conteudo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  	extended: true
}));

// Configuração da requisição, cabeçalhos, etc. CORS
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	// Métodos que queremos permitir
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
});

var tokenSession = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 200; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

// GET
app.get('/',function(req,res){
	token1 = tokenSession();
	token2 = tokenSession();
	token3 = tokenSession();
	token4 = tokenSession();
	token5 = tokenSession();
	token6 = tokenSession();
	token7 = tokenSession();
	token8 = tokenSession();
	token9 = tokenSession();
	token0 = tokenSession();

	token11 = tokenSession();
	token12 = tokenSession();
	token13 = tokenSession();
	token14 = tokenSession();
	token15 = tokenSession();
	token16 = tokenSession();
	token17 = tokenSession();
	token18 = tokenSession();
	token19 = tokenSession();
	token20 = tokenSession();

	var data = {
		"Data":"Welcome to BrCloud's API",
		"token1": token1,
		"token2": token2,
		"token3": token3,
		"token4": token4,
		"token5": token5,
		"token6": token6,
		"token7": token7,
		"token8": token8,
		"token9": token9,
		"token0": token0,
		"token11": token11,
		"token12": token12,
		"token13": token13,
		"token14": token14,
		"token15": token15,
		"token16": token16,
		"token17": token17,
		"token18": token18,
		"token19": token19,
		"token20": token20,		 
	};
	data["Data"] = "Welcome to BrCloud's API";
	res.json(data);
	console.log(data);
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
});


// GET 
app.get('/html',function(req,res){
	
	var data = {
		"Data":""
	};
	
	data["Data"] = "API de Serviços do Jon";
	data["Ver"] = "0.2";

	var body = '<html>'
				+'	<head>'
				+'	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>'
				+'	</head>'

				+'	<body>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	</body>'
				+'	</html>';

	res.writeHead(200,{"Content-Type" : "text/html"});
	res.write(body);
	res.end();
});


app.listen(8080,function(){
	console.log("Conectado e escutando na porta 8080");
});
