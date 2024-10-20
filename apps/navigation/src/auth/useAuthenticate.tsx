import React from "react";
import { getAuthToken, handleAuthToken, isTokenValid } from "./auth.util";

interface AuthState {
    user: {
        name: string;
        email: string;
    } | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export const useAuthenticate = () => {
    const [state, setState] = React.useState<AuthState>({
        user: null,
        isAuthenticated: false,
        isLoading: false
    });

    React.useEffect(() => {
        const authToken = handleAuthToken();

        const isValid = !!authToken;

        if (isValid) {
            setState({ user: null, isAuthenticated: false, isLoading: true });
            fakeFetchUser().then(user => {
                setState({
                    user: user as any,
                    isAuthenticated: true,
                    isLoading: false
                });
            });
        } else {
            setState({
                user: null,
                isAuthenticated: false,
                isLoading: false
            })
        }
    }, []);

    return state;
};

// This is a fake function (ofc) -> here we can access the stored JWT token / in a real version it'd be a config
const fakeFetchUser = async () => new Promise(resolve => {
    const authToken = getAuthToken();
    console.log("Performing a API request with authToken", authToken);

    setTimeout(() => {
        resolve({
            name: "Levi Ackermann",
            email: "levi.ackermann@aplan.com"
        });
    });
});