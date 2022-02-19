import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';

import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'

import { CreateDeliverymanController } from './modules/deliveryman/useCases/CreateDeliverymanController';


const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();



routes.post('/client/', createClientController.handle);

routes.post('/deliveryman/', createDeliverymanController.handle);

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

export { routes };