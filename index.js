const path = require('path');
const fs = require('fs/promises');
const http = require('http');

// Lo que vamos es que cuando alguien ingrese al servidro 
// vamos a responder con el html

const app = http.createServer(async (request, response) => {

  const url = request.url; //dice donde se hace la petición


  if (url === '/') {
    url = '/index.html'; //agregamos esto solo en la primera petición (cuando está vacía)
  }
  //obtenemos la ruta de los archivos que vamos a utilizar
  const htmlPath = path.resolve('./lombok-main/index.html');
  const cssPath = path.resolve('./lombok-main/styles/styles.css');
  const normalizePath = path.resolve('./lombok-main/styles/normalize.css');

  //obtenemos la extensión de los archivos a utilizar
  let fileExtensionIndex = path.extname(htmlPath);
  let fileExtensionStyle = path.extname(cssPath);
  let fileExtensionNormalize = path.extname(normalizePath);



  const html = await fs.readFile(htmlPath, 'utf8');
  response.setHeader('Content-Type', 'text/html');
  response.writeHead(html);



  
  const css = await fs.readFile(cssPath, 'utf8');
  response.setHeader('Content-Type', 'text/css');


  /* console.log(url); */
  //creamos un header

  /* response.end(css); */

  response.end();
});

const PORT = 8000;

app.listen(PORT);

console.log('Servidor escuchando');
