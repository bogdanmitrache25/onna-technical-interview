import axios from "axios";

const CLIENT_ID = "NMVbynLXxNLwoP0XVYFX72PIuhi1FBTIf6V";
const TOKEN =
    "5882902affd7198c9bb0a7fe359f66c3a73dd8783948d7b83f6279136f653706";
const BASE_URL = "https://api.rentandpass.com/api";

const getDoors = async () => {
    const params = {
        clientId: CLIENT_ID,
        token: TOKEN,
    };

    try {
        const response = await axios.get(`${BASE_URL}/lock/list`, {
            params,
            headers: {
                Accept: "application/json",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error al enviar la solicitud:", error);
    }
};

const generatePassword = async (form) => {
    try {
        const params = {
            clientId: CLIENT_ID,
            token: TOKEN,
            type: 3,
            ...form,
        };

        const response = await axios.get(`${BASE_URL}/password`, {
            params,
            headers: {
                Accept: "application/json",
            },
        });

        return response.data;
    } catch (error) {
        console.warn("Error al generar el código de apertura");
    }
};

const deletePassword = async (form) => {
    try {
        const data = new URLSearchParams();
        data.append("clientId", CLIENT_ID);
        data.append("token", TOKEN);
        data.append("ID", form.ID);
        data.append("passID", form.passID);
        data.append("type", "2");

        const result = await axios.delete(`${BASE_URL}/password`, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json",
            },
            data: data,
        });

        return result.data;
    } catch (error) {
        console.error("Error al enviar la solicitud:", error);
    }
};

const openDoor = async (id) => {
    const data = new URLSearchParams();

    data.append("clientId", CLIENT_ID);
    data.append("token", TOKEN);
    data.append("ID", id);

    try {
        // saca la url del env
        const response = await axios.put(`${BASE_URL}/lock/unlock`, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const getPasswords = async (form) => {
    const params = {
        clientId: CLIENT_ID,
        token: TOKEN,
        ...form,
        type: 3,
    };

    try {
        const response = await axios.get(`${BASE_URL}/password`, {
            params,
            headers: {
                Accept: "application/json",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error al enviar la solicitud:", error);
    }
};

const getBatteryLevel = async (id) => {
    const params = {
        clientId: CLIENT_ID,
        token: TOKEN,
        ID: id,
    };

    try {
        const response = await axios.get(`${BASE_URL}/lock/queryElectricQuantity`, {
            params,
            headers: {
                Accept: "application/json",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error al enviar la solicitud:", error);
    }
};

export const RentPassRepository = {
    getDoors,
    getBatteryLevel,
    generatePassword,
    openDoor,
    deletePassword,
    getPasswords,
};
