import { response, Router } from 'express'
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from './useCases/createUser/CreateUserController';
import { GetUserController } from './useCases/getUser/GetUserController';
import { RefreshTokenUserController } from './useCases/refreshTokenUser/RefreshTokenUserController';
const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();
const getUserController = new GetUserController();

router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/refresh-token', refreshTokenUserController.handle);
router.get('/find-user/:username?', ensureAuthenticated , getUserController.handle);

export { router }