import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const myHookValue = useParams();
    return <Component myHookValue={myHookValue} />;
  };
}

class CreateHora extends Component {
  state = {
    horas: [],
    nombreP: "",
    rutP: "",
    dvP: "",
    tipoH: "",
    anio: "",
    mes: "",
    dia: "",
    hora: "",
    observacion: "",
    idCreador: "",
  };

  async componentDidMount() {
    //Ejecuta cuando el componente es montado
    this.getHoras();

    this.setState({
      tipoH: this.props.myHookValue.tipo,
      anio: this.props.myHookValue.anio,
      mes: this.props.myHookValue.mes,
      dia: this.props.myHookValue.dia,
      hora: this.props.myHookValue.hora,
    });
  }

  getHoras = async () => {
    const res = await axios.get("http://localhost:3000/calendario");
    this.setState({ horas: res.data });
  };

  onChangenombreP = (e) => {
    this.setState({
      nombreP: e.target.value,
    });
  };
  onChangerutP = (e) => {
    this.setState({
      rutP: e.target.value
    });
  };
  onChangedvP = (e) => {
    this.setState({
      dvP: e.target.value,
    });
  };
  onChangeobservacion = (e) => {
    this.setState({
      observacion: e.target.value,
    });
  };
  onSubmit = async (e) => {
    try{
      const response = await axios.post('http://localhost:3000/calendario', {
        nombreP: this.state.nombreP,
        rutP: this.state.rutP,
        dvP: this.state.dvP,
        tipoH: this.state.tipoH,
        anio: this.state.anio,
        mes: this.state.mes,
        dia: this.state.dia,
        hora: this.state.hora,
        observacion: this.state.observacion,
        idCreador: this.state.idCreador,
      });
      // Verifica la respuesta del backend
      console.log('Respuesta del servidor:', response.data);

      // Limpiar formulario después de enviar los datos
      this.setState({ nombreP: "", rutP: "", dvP: "", tipoH: "", observacion: "", anio: "", mes: "", dia: "", hora: "", idCreador: "" });

      // Obtener horas actualizadas
      this.getHoras();

    } catch (err) {
      console.error('Error al enviar la solicitud:', err);
    }
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="text-center">Creación de horas</h1>
          <div className="col-md-4 container p-2">
            <form onSubmit={this.onSubmit}>
              <div className="card cardbody p-2">
                <div className="form-group">
                  <input
                    placeholder="Nombre del paciente"
                    type="text"
                    className="form-control"
                    required
                    value={this.state.nombreP}
                    onChange={this.onChangenombreP}
                  />
                </div>
              </div>
              <p></p>
              <div className="card cardbody p-2">
                <div className="row">
                  <div className="form-group mb-2 col-md-9">
                    <input
                      placeholder="Rut del paciente"
                      type="text"
                      className="form-control"
                      maxLength="8"
                      required
                      value={this.state.rutP}
                      onChange={this.onChangerutP}
                    />
                  </div>
                  <div className="form-group mb-2 col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      maxLength="1"
                      placeholder="Dv"
                      required
                      value={this.state.dvP}
                      onChange={this.onChangedvP}
                    />
                  </div>
                </div>
              </div>
              <p></p>
              <div className="card cardbody p-2">
                <label className="form-label fw-bold">Observaciones:</label>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={this.state.observacion}
                    onChange={this.onChangeobservacion}
                  />
                </div>
              </div>
              <p></p>
              <div className="card cardbody p-2">
                <label className="form-label fw-bold">
                  Información de la hora:
                </label>
                <p>Tipo de consulta: {this.props.myHookValue.tipo}</p>
                <p>
                  Fecha de la consulta:{" "}
                  {this.props.myHookValue.dia +
                    "/" +
                    this.props.myHookValue.mes +
                    "/" +
                    this.props.myHookValue.anio}
                </p>
                <p>Horario de la consulta: {this.props.myHookValue.hora}</p>
              </div>
              <p></p>
              <button type="submit" className="btn btn-primary btn-lg">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withMyHook(CreateHora);
