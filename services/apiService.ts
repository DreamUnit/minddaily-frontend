class ApiService {
  private authToken: string | null = null;
  private baseUrl = process.env.NEXT_PUBLIC_APP_SERVER_URL;
  private localStorage =
    typeof window !== 'undefined' ? window.localStorage : null;

  getToken(): string | null {
    return this.localStorage?.getItem('authToken') ?? null;
  }

  getRequestConfig(): { headers?: { Authorization: string } } {
    return this.authToken
      ? { headers: { Authorization: `bearer ${this.getToken()}` } }
      : {};
  }
}

const apiService = new ApiService();
export default apiService;
