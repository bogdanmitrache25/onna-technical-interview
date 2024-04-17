import { useEffect, useState } from "react";
import { RentPassRepository } from "../repository/RentPassRepository";
import { useParams } from "react-router";

export const DOOR_STATUS = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    OPEN: "OPEN",
    ERROR: "ERROR",
};

export const useOpenDoor = () => {
    const [status, setStatus] = useState(DOOR_STATUS.IDLE);
    let { id: selectedDoor } = useParams();

    useEffect(() => {
        getBatteryLevel();
    }, []);

    const getBatteryLevel = async () => {
        setStatus(DOOR_STATUS.LOADING);

        const result = await RentPassRepository.openDoor(selectedDoor);

        if (result.errcode === 0) {
            setStatus(DOOR_STATUS.OPEN);
            return;
        }
        setStatus(DOOR_STATUS.ERROR);

    };

    return {
        selectedDoor,
        status,
    };
};
