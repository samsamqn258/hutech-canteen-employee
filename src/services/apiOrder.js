import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/order`;

export async function getPendingOrders() {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const accessToken = authData?.accessToken;

    try {
        const response = await fetch(`${API_URL}/listOrderPending`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);

        throw error;
    }
}

export async function getSuccessOrders() {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const accessToken = authData?.accessToken;

    try {
        const response = await fetch(`${API_URL}/listOrderSuccess`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data)

        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

export async function getCompletedOrders() {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const accessToken = authData?.accessToken;

    try {
        const response = await fetch(`${API_URL}/listOrderCompleted`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

export async function getCancelOrders() {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const accessToken = authData?.accessToken;

    try {
        const response = await fetch(`${API_URL}/listOrderCancelled`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
}

export const getCategorySalesOfShop = async function (timeRange = '6_months') {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const accessToken = authData?.accessToken;

    if (!accessToken) {
        console.error('No access token found');
        return;
    }

    try {
        const response = await fetch(
            `${API_URL}/getCategorySalesOfShop?timeRange=${timeRange}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: accessToken,
                },
            }
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);

        throw error;
    }
};

export const getBestSellingProductsOfShop = async function (
    timeRange = '7_days'
) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const accessToken = authData?.accessToken;

    if (!accessToken) {
        console.error('No access token found');
        return;
    }

    try {
        const response = await fetch(
            `${API_URL}/getBestSellingProductsOfShop?timeRange=${timeRange}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: accessToken,
                },
            }
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data?.metaData;
    } catch (error) {
        console.error('Error fetching data: ', error);

        throw error;
    }
};

export const updateStatusSuccess = async function (id) {
    console.log(id);
    try {
        const authData = JSON.parse(localStorage.getItem('authData'));
        const accessToken = authData?.accessToken;
        const response = await fetch(`${API_URL}/updateStatusSuccess/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);

        throw error;
    }
};

export const updateStatusCancelled = async function (id) {
    try {
        const authData = JSON.parse(localStorage.getItem('authData'));
        const accessToken = authData?.accessToken;
        const response = await fetch(`${API_URL}/updateStatusCancelled/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);

        throw error;
    }
};

export const updateStatusCompleted = async function (id) {
    console.log(id

    )
    try {
        const authData = JSON.parse(localStorage.getItem('authData'));
        const accessToken = authData?.accessToken;
        const response = await fetch(`${API_URL}/updateStatusCompleted/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);

        throw error;
    }
};

export const getOrderDetail = async function (id) {
    try {
        const response = await fetch(`${API_URL}/getOrderDetailsStatusSuccess/${id}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);

        throw error;
    }
}

export const getSummaryForToday = async function () {
    try {
        const authData = JSON.parse(localStorage.getItem('authData'));
        const accessToken = authData?.accessToken;
        const response = await fetch(`${API_URL}/getSummaryForToday`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();



        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);

        throw error;
    }
}