import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import Home from "./pages/Home";
import Battery from "./pages/Battery";
import OpenDoor from "./pages/OpenDoor";
import DeletePassword from "./pages/DeletePassword";
import { GeneratePassword } from "./pages/GeneratePassword";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/battery/:id" element={<Battery />} />
      <Route path="/open-door/:id" element={<OpenDoor />} />
      <Route path="/generate-password/:id" element={<GeneratePassword />} />
      <Route path="/delete-password/:id" element={<DeletePassword />} />
    </Routes>
  </BrowserRouter>
);
