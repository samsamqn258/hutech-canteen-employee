import { API_BASE_URL } from '../utils/constants';

const API_URL = `${API_BASE_URL}/shop`;

export async function getAllShop() {
    try {
        const response = await fetch(`${API_URL}/getAll`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        return data.metaData; // Return the list of shops
    } catch (error) {
        console.error('Failed to fetch shops:', error);

        throw error; // Re-throw the error to handle it in the caller
    }
}
