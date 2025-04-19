import React from "react";
import Iniciarsesion from "./Iniciar_sesion";
import { useNavigate } from "react-router-dom";

export default function IniciarSesionWrapper() {
  const navigate = useNavigate();
  return <Iniciarsesion navigate={navigate}/>;
}