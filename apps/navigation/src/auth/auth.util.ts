import { jwtDecode } from "jwt-decode";

const TOKEN_URL_KEY = "token";
const TOKEN_STORAGE_KEY = "token";

export function getAuthToken() {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function removeAuthToken() {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}

export function handleAuthToken(): string | null {
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get(TOKEN_URL_KEY);

  const thereIsTokenInUrl = !!token;

  if (thereIsTokenInUrl) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);

    searchParams.delete(TOKEN_URL_KEY);
    const newSearch = searchParams.toString();

    const fullUrl = location.origin + (location.pathname.length > 1 ? location.pathname : "");
    const newUrl = !!newSearch ? `${fullUrl}?${newSearch}` : fullUrl;

    window.location.replace(newUrl);
  }

  const tokenInStorage = localStorage.getItem(TOKEN_STORAGE_KEY);

  return tokenInStorage;
}

export function isTokenValid(token: string, now = Date.now()): boolean {
  const decodedToken = jwtDecode(token);
  return decodedToken && decodedToken.exp! >= now / 1000;
}
