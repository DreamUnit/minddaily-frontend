import { LoginSchemaType, RegisterSchemaType } from '@/src/schemas';
import { SocialAuthType } from '@/src/@types';

class AuthService {
  private baseUrl = process.env.APP_SERVER_URL;

  public register = async (data: RegisterSchemaType) => {};

  public login = async (data: LoginSchemaType) => {};

  public socialSignIn = async (type: SocialAuthType) => {
    const redirectUri = `${this.baseUrl}/auth/${type}`;
    window.location.href = redirectUri;
  };
}

const authService = new AuthService();
export default authService;
