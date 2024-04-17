import React, { useState } from "react";
import { DOOR_STATUS, useOpenDoor } from "../hooks/useOpenDoor";

function OpenDoor() {
  const { selectedDoor, status } = useOpenDoor();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-blue-600">
        Puerta: {selectedDoor}
      </h1>

      {status === DOOR_STATUS.LOADING && (
        <p className="mt-4 text-blue-600">Cargando...</p>
      )}
      {status === DOOR_STATUS.ERROR && (
        <p className="mt-4 text-red-600">Error</p>
      )}
      {status === DOOR_STATUS.OPEN && (
        <p className="mt-4 text-green-600">
          Puerta abierta
        </p>
      )}
    </>
  );
}

export default OpenDoor;
