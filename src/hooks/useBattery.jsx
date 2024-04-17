import { useEffect, useState } from "react";
import { RentPassRepository } from "../repository/RentPassRepository";
import { useParams } from "react-router";

export const DOOR_STATUS = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    ERROR: "ERROR",
};

export const useBattery = () => {
    const [batteryLevel, setBatteryLevel] = useState();
    const [status, setStatus] = useState(DOOR_STATUS.IDLE);
    let { id: selectedDoor } = useParams();

    useEffect(() => {
        getBatteryLevel();
    }, []);

    const getBatteryLevel = async () => {
        setStatus(DOOR_STATUS.LOADING);
        const response = await RentPassRepository.getBatteryLevel(selectedDoor);
        console.warn({ response });
        if (response?.electricQuantity) {
            setBatteryLevel(response.electricQuantity);
            setStatus(DOOR_STATUS.IDLE);
            return;
        }
        setStatus(DOOR_STATUS.ERROR);

    };

    return {
        batteryLevel,
        selectedDoor,
        status,
    };
};
