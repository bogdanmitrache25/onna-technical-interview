import { useEffect, useState } from "react";
import { RentPassRepository } from "../repository/RentPassRepository";
import { useParams } from "react-router";

export const STATUS = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    GENERATED: "GENERATED",
    ERROR: "ERROR",
};

export const useGeneratePassword = () => {
    const [status, setStatus] = useState(STATUS.IDLE);
    let { id: selectedDoor } = useParams();

    const onSubmit = async (form) => {

        setStatus(STATUS.LOADING);

        const result = await RentPassRepository.generatePassword({
            ID: selectedDoor,
            ...form
        });

        if (result.keyboardPwd) {
            setStatus(STATUS.GENERATED);
            return;
        }
        setStatus(STATUS.ERROR);

    };

    return {
        onSubmit,
        status,
    };
};
