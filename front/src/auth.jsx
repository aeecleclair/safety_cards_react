import { useOAuth2 } from "@tasoskakour/react-use-oauth2";

export const useAuth = () => {

    const { data, loading, error, getAuth, logout } = useOAuth2({
        authorizeUrl: "http://localhost:8000/auth/authorize",
        clientId: "SafetyCards",
        clientSecret: "SafetyCards",
        redirectUri: `${document.location.origin}/callback`,
        scope: "API",
        responseType: "code",
        // Suppression de exchangeCodeForTokenQuery
        exchangeCodeForTokenQueryFn: async (callbackParameters) => {
            const params = new URLSearchParams(callbackParameters);
            params.append("grant_type", "authorization_code");
            params.append("client_id", "SafetyCards");
            params.append("client_secret", "SafetyCards");
            const response = await fetch("http://localhost:8000/auth/token", {
                method: "POST",
                body: params.toString(),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                }
            });
            if (!response.ok) {
                throw new Error("Token exchange failed: " + response.statusText);
            }
            return response.json();
        },
        onSuccess: (payload) => console.log("Success", payload),
        onError: (error_) => console.log("Error", error_)
    });

    return {
        data,
        loading,
        error,
        getAuth,
        logout
    };
}