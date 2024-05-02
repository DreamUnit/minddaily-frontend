import { LoginSchemaType, RegisterSchemaType } from '@/src/schemas';
import { SocialAuthType } from '@/src/@types';

class AuthService {
  register = async (data: RegisterSchemaType) => {};

  login = async (data: LoginSchemaType) => {};

  socialSignIn = async (type: SocialAuthType) => {};
}

const authService = new AuthService();
export default authService;
