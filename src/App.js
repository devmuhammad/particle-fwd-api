import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { carData } from './data';

const port = 9900

// Create global app object
const app = express();

// Set various HTTP headers to help protect your app.
app.use(helmet());

// Serve images, CSS files, HTML and JavaScript files in a directory named public.
app.use('/static', express.static(path.join(__dirname, '../public')));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(carData)
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})

export default app;
