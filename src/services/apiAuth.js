import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/user`;

export async function login({ email, password }) {
    try {
        const res = await fetch(`${API_URL}/loginAdmin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            throw new Error('Tài khoản hoặc mật khẩu không chính xác');
        }
        const data = await res.json();
        const authData = {
            accessToken: data.metaData.token.accessToken,
            refreshToken: data.metaData.token.refreshToken,
            user: data.metaData.user,
        };

        localStorage.setItem('authData', JSON.stringify(authData));

        return data.metaData;
    } catch {
        throw Error('Lỗi tìm nạp dữ liệu khi đăng nhập');
    }
}

export async function loginEmployee({ email, password, shop_id }) {
    try {
        const res = await fetch(`${API_URL}/loginEmployeeAndManager`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, shop_id }),
        });

        if (!res.ok) {
            throw new Error('Tài khoản hoặc mật khẩu không chính xác');
        }
        const data = await res.json();
        const authData = {
            accessToken: data.metaData.token.accessToken,
            refreshToken: data.metaData.token.refreshToken,
            user: data.metaData.user,
        };

        localStorage.setItem('authData', JSON.stringify(authData));

        return data.metaData;
    } catch (e) {
        throw Error('Lỗi tìm nạp dữ liệu khi đăng nhập ');
    }
}

export function getCurrentUser() {
    const authData = JSON.parse(localStorage.getItem('authData'));

    if (!authData) return null;

    return authData?.user;
}

export async function logout() {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const { accessToken } = authData;
    const res = await fetch(`${API_URL}/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: accessToken,
        },
    });

    const data = await res.json();

    localStorage.removeItem('authData');

    return data;
}
