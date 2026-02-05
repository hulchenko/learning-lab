// TODO: This example keeps the access token in LocalStorage just because
// it's simpler, but eventually use cookies instead,
// for better security. Also, it doesn't handle token expiration.

import { jwtDecode, JwtPayload } from "jwt-decode";

interface JwtPayloadExtended extends JwtPayload {
  email: string;
}

const API_URL = "http://localhost:9000";

const ACCESS_TOKEN_KEY = "accessToken";

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export async function login(email: string, password: string) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    return null;
  }
  const { token } = await response.json();
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
  return getUserFromToken(token);
}

export function getUser() {
  const token = getAccessToken();
  if (!token) {
    return null;
  }
  return getUserFromToken(token);
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function getUserFromToken(token: string) {
  const claims = jwtDecode(token) as JwtPayloadExtended;
  return {
    id: claims.sub,
    email: claims.email,
  };
}
