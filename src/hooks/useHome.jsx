import { useEffect, useState } from "react";
import { RentPassRepository } from "../repository/RentPassRepository";

const DOOR_STATUS = {
    IDLE: "IDLE",
    OPEN_LOADING: "OPEN_LOADING",
    OPEN: "OPEN",
    ERROR: "ERROR",
};

export const useHome = () => {
    const [selectedDoor, setSelectedDoor] = useState(null);
    const [doors, setDoors] = useState([]);
    const [doorStatus, setDoorStatus] = useState(DOOR_STATUS.IDLE);

    useEffect(() => {
        getDoors();
    }, []);

    const getDoors = async () => {
        setDoorStatus(DOOR_STATUS.OPEN_LOADING);
        const response = await RentPassRepository.getDoors();

        console.warn({ response })
        if (response?.list) {
            setDoors(response.list);
            return;
        }
        setDoorStatus(DOOR_STATUS.ERROR);
    };

    const handleSelectedDoor = (id) => {
        console.warn({ id })
        setSelectedDoor(id)
    }

    return {
        doors,
        handleSelectedDoor,
        selectedDoor,
        doorStatus
    };
};
