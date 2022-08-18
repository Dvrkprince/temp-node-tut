const http = require('http');

//first parameter is the incoming request
//second parameter is the response i.e what we send back
const server = http.createServer((req,res) => {
    //http://localhost:5000/
    if(req.url === '/'){//home page
        res.end('Welcome to our home page');
    }
    //http://localhost:5000/about
    else if(req.url === '/about'){//about page
        res.end('Here is our short history');    
    }
    //Page that doesn't exist
    else{
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/">back home </a>
        `);
    }
});
server.listen(5000);
//ctrl + c to stop it

