import http from 'http';
import fs from 'fs';
import path from 'path';
import Express from 'express';

const app = Express();
const port = 3000  


let indexPath = fs.readFileSync(path.join("./", 'index.html'));

app.use(Express.static('./'));

app.get('/', (req, res) => {

  res.end(indexPath.toString());
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});