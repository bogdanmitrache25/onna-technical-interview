import React from "react";
import { Link } from "react-router-dom";
import { useHome } from "../hooks/useHome";

const Home = () => {
  const { doors, handleSelectedDoor, selectedDoor } = useHome();

  console.warn({ doors });
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 text-black p-4 lg:p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-8 text-center text-blue-600">
        <span className="block">Prueba Técnica Onna</span>
        <span className="block text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-500">
          Bogdan Mitrache ⚛️
        </span>
      </h1>

      {!doors.length && <h1>Cargando...</h1>}
      <div className="flex flex-col items-center space-y-4">
        {!!doors.length && (
          <select
            name="door"
            className="appearance-none border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            value={selectedDoor}
            onChange={(ev) => handleSelectedDoor(ev.target.value)}
          >
            <option value="">Selecciona</option>
            {doors.map((door) => (
              <option key={door.lockId} value={door.lockId}>
                {door.lockAlias}
              </option>
            ))}
          </select>
        )}

        {selectedDoor && (
          <div className="flex flex-col items-center space-y-4">
            <Link
              to={`/battery/${selectedDoor}`}
              className="bg-blue-500 text-white py-3 px-6 rounded-full text-base sm:text-lg lg:text-xl hover:bg-blue-600 transition duration-300"
            >
              Estado de la batería
            </Link>

            <Link
              to={`/open-door/${selectedDoor}`}
              className="bg-blue-500 text-white py-3 px-6 rounded-full text-base sm:text-lg lg:text-xl hover:bg-blue-600 transition duration-300"
            >
              Abrir Puerta
            </Link>

            <Link
              to={`/generate-password/${selectedDoor}`}
              className="bg-blue-500 text-white py-3 px-6 rounded-full text-base sm:text-lg lg:text-xl hover:bg-blue-600 transition duration-300"
            >
              Generar Contraseña
            </Link>

            <Link
              to={`/delete-password/${selectedDoor}`}
              className="bg-blue-500 text-white py-3 px-6 rounded-full text-base sm:text-lg lg:text-xl hover:bg-blue-600 transition duration-300"
            >
              Borrar Contraseña
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
