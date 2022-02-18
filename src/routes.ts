import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
// import { ensureAuthenticateDeliveryman } from './middlewares/enruseAuthenticateDeliveryman';
// import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
// import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
// import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
// import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController';
// import { CreateDeliveryController } from './modules/deliveries/useCase/createDelivery/CreateDeliveryController';
// import { FindAllAvailableController } from './modules/deliveries/useCase/findAllAvailable/FindAllAvailableController';
// import { UpdateDeliverymanController } from './modules/deliveries/useCase/updateDeliveryman/useCases/UpdateDeliverymanController';
// import { UpdateEndDateController } from './modules/deliveries/useCase/updateEndDate/UpdateEndDateController';
// import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
// import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();



routes.post('/client/', createClientController.handle);

routes.post("/authenticate", authenticateClientController.handle);

export { routes };