// Authentication utilities for JWT handling

export interface JWTPayload {
  sub: string; // user ID
  email: string;
  username: string;
  name: string;
  iat: number;
  exp: number;
}

// JWT Token management
export class AuthTokenManager {
  private static readonly TOKEN_KEY = 'jwt_token';
  private static readonly REFRESH_TOKEN_KEY = 'refresh_token';

  static setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  static setRefreshToken(refreshToken: string): void {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
  }

  static getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  static removeTokens(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  static isTokenValid(token: string): boolean {
    try {
      const payload = this.decodeToken(token);
      const currentTime = Date.now() / 1000;
      return payload.exp > currentTime;
    } catch {
      return false;
    }
  }

  static decodeToken(token: string): JWTPayload {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      throw new Error('Invalid token format');
    }
  }

  static getTokenPayload(): JWTPayload | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return this.decodeToken(token);
    } catch {
      return null;
    }
  }

  static isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? this.isTokenValid(token) : false;
  }
}

// HTTP Interceptor for automatic token refresh
export class HttpInterceptor {
  private static isRefreshing = false;
  private static failedQueue: Array<{
    resolve: (token: string) => void;
    reject: (error: any) => void;
  }> = [];

  static async processQueue(error: any, token: string | null = null) {
    this.failedQueue.forEach(({ resolve, reject }) => {
      if (error) {
        reject(error);
      } else {
        resolve(token!);
      }
    });
    
    this.failedQueue = [];
  }

  static async refreshToken(): Promise<string> {
    const refreshToken = AuthTokenManager.getRefreshToken();
    
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    // TODO: Replace with actual API call to Java backend
    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Token refresh failed');
    }

    const data = await response.json();
    AuthTokenManager.setToken(data.accessToken);
    
    if (data.refreshToken) {
      AuthTokenManager.setRefreshToken(data.refreshToken);
    }

    return data.accessToken;
  }

  static async handleTokenRefresh(): Promise<string> {
    if (this.isRefreshing) {
      return new Promise((resolve, reject) => {
        this.failedQueue.push({ resolve, reject });
      });
    }

    this.isRefreshing = true;

    try {
      const newToken = await this.refreshToken();
      this.processQueue(null, newToken);
      return newToken;
    } catch (error) {
      this.processQueue(error, null);
      AuthTokenManager.removeTokens();
      // Redirect to login page
      window.location.href = '/entrar';
      throw error;
    } finally {
      this.isRefreshing = false;
    }
  }
}

// Authentication guard for protected routes
export const requireAuth = (): boolean => {
  const isAuthenticated = AuthTokenManager.isAuthenticated();
  
  if (!isAuthenticated) {
    // Redirect to login page
    window.location.href = '/entrar';
    return false;
  }
  
  return true;
};

// Role-based access control (for future use)
export const hasRole = (requiredRole: string): boolean => {
  const payload = AuthTokenManager.getTokenPayload();
  
  if (!payload) return false;
  
  // TODO: Implement role checking based on your JWT structure
  // return payload.roles?.includes(requiredRole) ?? false;
  
  return true; // Mock for now
};

// Logout utility
export const logout = (): void => {
  AuthTokenManager.removeTokens();
  
  // TODO: Call Java backend logout endpoint
  // fetch('/api/auth/logout', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${AuthTokenManager.getToken()}`
  //   }
  // });
  
  window.location.href = '/';
};