// Router for routes
import { Router } from 'express';

// Multer to handle files
import multer from 'multer';
import multerConfig from './config/multer';

// Controllers - Database
import UserController from './app/controllers/UserController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

// Uses middleware to validade login/session
import authMiddleware from './app/middlewares/auth';

// Using routes
const routes = new Router();
// Using multer
const upload = multer(multerConfig);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);

export default routes;
