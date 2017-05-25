import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import swaggerTools from 'swagger-tools';
import YAML from 'yamljs';
import { home, lessons, natural } from './routes';

const swaggerDoc = YAML.load(__dirname + '/api.yaml');

// App
const app = express();
const PORT = process.env.PORT || 8080;
const logger = morgan('tiny');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ...`);
})

// Config
app.set('json spaces', 2);

// Middlewares
app.use(bodyParser.json());
app.use(logger);

swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  app.use(middleware.swaggerUi());
});

// Static content
app.use(express.static('dist'));

// Routes
const prefix = '/api';
app.use(`${prefix}/`, home);
app.use(`${prefix}/lessons`, lessons);
app.use(`${prefix},/natural`, natural)

