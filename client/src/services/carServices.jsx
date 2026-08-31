import axios from "axios";

const API = axios.create(
    {
        baseURL: import.meta.env.VITE_API_URL
    }
)

export const decodeVIN = async (vin) => {
    try {
        const response = await API.post(`/api/cars/decode`, { VIN: vin })
        const results = response.data;
        return results;

    }
    catch (error) {
        throw new Error(error)
    }

}

export const loginService = async (email, password) => {
    try {
        const response = await API.post("/api/auth/login", { email, password });
        return response.data
    }
    catch (error) {
        throw new Error(error);
    }
}

export const signUpService = async (name, email, password) => {
    try {
        const response = await API.post("/api/auth/signup", { name, email, password });
        return response.data;
    }
    catch (error) {
        throw new Error(error);
    }
}