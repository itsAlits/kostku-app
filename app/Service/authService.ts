import axios from "axios";
import { env } from "process";

export interface AuthData {
  username: string;
  password: string;
  companyCode: string;
}

export const authService = {
  async login(username: string, password: string): Promise<AuthData> {
    try {
      const response = await axios.post(
        `https://kara-core-api.onrender.com/api/auth/login`,
        {
          username,
          password,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },
};
