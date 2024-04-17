import { useState } from "react";
import { RentPassRepository } from "../repository/RentPassRepository";
import { useParams } from "react-router";

export const STATUS = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    DELETED: "DELETED",
    ERROR: "ERROR",
};

export const useDeletePassword = () => {
    const [status, setStatus] = useState(STATUS.IDLE);
    let { id: selectedDoor } = useParams();

    const deleteToken = async (form) => {
        setStatus(STATUS.LOADING);
        const response = await RentPassRepository.getPasswords({
            ID: selectedDoor,
            ...form,
        });

        if (response?.keyboardPwdId) {
            const resp = await RentPassRepository.deletePassword({
                ID: selectedDoor,
                passID: response?.keyboardPwdId,
            });

            if (resp.errcode === 0) {
                setStatus(STATUS.DELETED);
                return;
            }
        }
        setStatus(STATUS.ERROR);
    };

    return {

        deleteToken,
        status,
    };
};
