import { removeAuthToken } from "./auth.util";
import { useAuthenticate } from "./useAuthenticate";

const fakeJwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6IkFDQ0VTU19UT0tFTiIsInVzZXJJZCI6IlVTRVJfSUQiLCJleHBpcmVzQXQiOiIyMDI0LTA1LTE2VDA5OjE4OjQ1LjcxMloiLCJleHAiOjE3MTU4NTExMjUsImlhdCI6MTUxNjIzOTAyMn0.WgiIS727QMki1qdnrWw_oaarqt3JgPSjcdDep6pj7Ec";

export const UserAccount = () => {
    const { user, isLoading, isAuthenticated } = useAuthenticate();

    function logout() {
        removeAuthToken();
        location.reload();
    }

    if (isLoading) {
        return <div className="text-secondary">...</div>;
    } else if (isAuthenticated) {
        return (
            <div className="text-secondary">
                <span>
                    <b>{user.name}</b> ({user.email})</span>
                &nbsp;
                <a href="javascript:void(0);" onClick={logout}>Logout</a>
            </div>
        );
    } else {
        return (
            <div className="text-secondary">
                <a href={`/?token=${fakeJwtToken}`}>Login</a> to access the app
            </div>
        )
    }
}