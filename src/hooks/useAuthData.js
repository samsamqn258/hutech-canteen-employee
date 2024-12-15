export default function useAuthData() {
    const authData = JSON.parse(localStorage.getItem('authData'));

    if (!authData) return;

    return authData;
}
