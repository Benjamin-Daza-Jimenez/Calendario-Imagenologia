import React, { Component } from "react";
import axios from "axios";

export default class Iniciar_sesion extends Component {
  
  state = {
    rut: '',
    dv: '',
    password: '',
    token: '' // Aquí guardaremos el token
  };

  onChangerut = (e) => { 
    this.setState({ rut: e.target.value });
  };

  onChangedv = (e) => { 
    this.setState({ dv: e.target.value });
  };

  onChangepassword = (e) => { 
    this.setState({ password: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Hacemos el POST a la ruta de login
      const res = await axios.post("http://localhost:3000/auth/login", {
        rut: this.state.rut,
        dv: this.state.dv,
        password: this.state.password,
      });

      // Si todo va bien, guardamos el token
      this.setState({ token: res.data.token });

      alert("Se ha iniciado sesión correctamente");

      // Aquí puedes almacenar el token en localStorage o manejarlo como quieras
      localStorage.setItem('authToken', res.data.token);

      // Redirigimos al calendario
      const fecha = new Date();
      const mes_ = fecha.getMonth() + 1; // Mes actual (sumar 1 para obtener el mes real)
      const anoActual = fecha.getFullYear(); // Año actual
      this.props.navigate(`/Calendario/Resonancia/${anoActual}/${mes_}`); // Redirige usando navigate recibido por props
      
    } catch (err) {
      alert("No se ha podido iniciar sesión");
    }
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="text-center p-2">Iniciar Sesión</h1>
          <div className="col-md-4 container p-2">
            <form onSubmit={this.onSubmit}>
              <div className="card cardbody p-2">
                <div className="row">
                  <div className="form-group mb-1 col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      maxLength="8"
                      placeholder="Rut"
                      required
                      value={this.state.rut}
                      onChange={this.onChangerut}
                    />
                  </div>
                  <div className="form-group mb-1 col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      maxLength="1"
                      placeholder="Dv"
                      required
                      value={this.state.dv}
                      onChange={this.onChangedv}
                    />
                  </div>
                </div>
              </div>
              <p></p>
              <div className="card cardbody p-2">
                <div className="row">
                  <div className="col">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      required
                      value={this.state.password}
                      onChange={this.onChangepassword}
                    />
                  </div>
                </div>
              </div>
              <p></p>
              <button type="submit" className="btn btn-primary btn-lg">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
