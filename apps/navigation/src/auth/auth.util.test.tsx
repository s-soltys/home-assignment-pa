import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { handleAuthToken, isTokenValid } from "./auth.util";

describe("Auth", () => {
  let exampleToken: string;

  beforeEach(() => {
    /**
     *  Decoded token:
     * { "accessToken": "ACCESS_TOKEN", "userId": "USER_ID", "expiresAt": "2024-05-16T09:18:45.712Z", "exp": 1715851125, "iat": 1516239022 }
     */
    exampleToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6IkFDQ0VTU19UT0tFTiIsInVzZXJJZCI6IlVTRVJfSUQiLCJleHBpcmVzQXQiOiIyMDI0LTA1LTE2VDA5OjE4OjQ1LjcxMloiLCJleHAiOjE3MTU4NTExMjUsImlhdCI6MTUxNjIzOTAyMn0.WgiIS727QMki1qdnrWw_oaarqt3JgPSjcdDep6pj7Ec";
  });

  describe("jwt token validation", () => {
    test("should return false if token is empty", () => {
      expect(() =>
        isTokenValid("", new Date("2024-05-16T10:00:00.000Z").getTime()),
      ).toThrowError();
    });

    test("should return false if token is expired", () => {
      const isValid = isTokenValid(
        exampleToken,
        new Date("2024-05-16T10:00:00.000Z").getTime(),
      );

      expect(isValid).toBeFalsy();
    });

    test("should return true if token is valid", () => {
      const isValid = isTokenValid(
        exampleToken,
        new Date("2024-05-16T08:00:00.000Z").getTime(),
      );

      expect(isValid).toBeTruthy();
    });
  });

  describe("jwt token handling", () => {
    function configureWindowUrl(pathname: string = "/") {
      const url = "https://simon.micro-frontend.app";
      Object.defineProperty(global.window, "location", {
        value: {
          href: url + pathname,
          pathname: pathname,
          origin: url,
          replace: jest.fn(),
        },
        writable: true,
      });
    }

    beforeEach(() => {
      localStorage.clear();
      configureWindowUrl();
    });

    test("should return null if there is no token in url or storage", () => {
      const token = handleAuthToken();

      expect(token).toBeNull();
    });

    test("should return token from storage", () => {
      localStorage.setItem("token", exampleToken);

      const token = handleAuthToken();

      expect(token).toBe(exampleToken);
    });

    test("should return token from url", () => {
      window.location.search = `?token=${exampleToken}`;

      const token = handleAuthToken();

      expect(token).toBe(exampleToken);
    });

    test("should store token in storage and remove from url", () => {
      window.location.search = `?token=${exampleToken}`;

      const token = handleAuthToken();

      expect(localStorage.getItem("token")).toBe(exampleToken);
      expect(window.location.replace).toHaveBeenCalledWith(window.location.origin);
    });

    test("should store token in storage and remove from url and keep path in url", () => {
      configureWindowUrl("/custom-url/123");

      window.location.search = `?token=${exampleToken}`;

      const token = handleAuthToken();

      expect(localStorage.getItem("token")).toBe(exampleToken);
      expect(window.location.replace).toHaveBeenCalledWith(
        window.location.origin + "/custom-url/123",
      );
    });

    test("should store token in storage and remove from url and keep other url params in url", () => {
      window.location.search = `?param=TEST&token=${exampleToken}`;

      const token = handleAuthToken();

      expect(localStorage.getItem("token")).toBe(exampleToken);
      expect(window.location.replace).toHaveBeenCalledWith(
        window.location.origin + "?param=TEST",
      );
    });
  });
});