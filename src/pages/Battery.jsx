import React from "react";
import { DOOR_STATUS, useBattery } from "../hooks/useBattery";

function BatteryStatusButton() {
  const { batteryLevel, status, selectedDoor } = useBattery();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Estado de la batería ({selectedDoor}):
        </h1>

        {status === DOOR_STATUS.LOADING && (
          <p className="mt-4 text-blue-600">Cargando...</p>
        )}
        {status === DOOR_STATUS.ERROR && (
          <p className="mt-4 text-red-600">Error</p>
        )}
        {batteryLevel && (
          <p className="mt-4 text-green-600">
            Estado de la batería: {batteryLevel}%
          </p>
        )}
      </div>
    </div>
  );
}

export default BatteryStatusButton;
