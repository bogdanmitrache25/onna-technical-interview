import React, { useState } from "react";
import { STATUS, useGeneratePassword } from "../hooks/useGeneratePassword";

export const GeneratePassword = () => {
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });

  const { onSubmit, status } = useGeneratePassword();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">
        Crear código de apertura para un período
      </h1>
      {status === STATUS.LOADING && <h1>Cargando</h1>}
      {status === STATUS.ERROR && <h1>Error</h1>}
      {status === STATUS.GENERATED && <h1>GENERATED</h1>}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Nombre del código:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Fecha de inicio:
          </label>
          <input
            type="datetime-local"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Fecha de fin:</label>
          <input
            type="datetime-local"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300"
        >
          save
        </button>
      </form>
    </div>
  );
};

