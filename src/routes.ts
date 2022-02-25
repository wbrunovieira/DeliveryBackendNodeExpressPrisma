import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';

import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'

import { CreateDeliverymanController } from './modules/deliveryman/useCases/CreateDeliveryman/CreateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController';
import { FindAllDeliveriesController } from './modules/deliveries/useCases/deliveries/FindAllDeliveriesController';
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';


const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailable = new FindAllAvailableController();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const updateDeliverymanController = new UpdateDeliverymanController();

const findAllDeliveriesClienteController = new FindAllDeliveriesController;

const findAlDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();

const updateEndDateController = new UpdateEndDateController();


routes.post('/client/', createClientController.handle);

routes.post('/deliveryman/', createDeliverymanController.handle);

routes.post('/delivery/', ensureAuthenticateClient,createDeliveryController.handle);
routes.get('/delivery/available', ensureAuthenticateDeliveryman ,findAllAvailable.handle);

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman,updateDeliverymanController.handle )

routes.get('/client/deliveries', findAllDeliveriesClienteController.handle); 

routes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findAlDeliveriesDeliverymanController.handle);

routes.put('/delivery/updateEndDate/:id', ensureAuthenticateDeliveryman, updateEndDateController.handle)

export { routes };