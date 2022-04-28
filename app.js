var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filename = '.' + q.pathname

    if(filename == './'){ filename = './index'}

    filename += ".html"

    fs.readFile(filename,function(err,data){
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end("404 Not Found")
        }
    res.writeHead(200,{'Content-Type':'text/html'})
    return res.end(data);
    })
    }).listen(8080)


// var http = require('http');

// http.createServer((req,res){
// res.writeHead(200,{'Content-Type':'text/html'})
// res.end('AWLOW');

// }).listen(8080)


// http.createServer(function(req,res){

//     fs.readFile('index.html',function(err,data){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.end(data);
//     })
//     }).listen(8080)
    

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     var q = url.parse(req.url,true).query;
//     var dates = q.month + q.year
    
//     res.end(dates);
//     }).listen(8080)
    