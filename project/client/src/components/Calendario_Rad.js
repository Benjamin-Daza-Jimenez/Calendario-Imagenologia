import { Link, useParams } from "react-router-dom";

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const fecha = new Date();
const mes_ = fecha.getMonth() + 1; //mes en numero (sumarle 1 para tener el actual)
const mesActual = meses[mes_ - 1]; //mes en palabras
const anoActual = fecha.getFullYear(); // año actual

export default function Calendario_Rad() {
  let { anio, mes } = useParams();
  const mes1 = Number(mes);
  const anio1 = Number(anio);

  //Acá se verán el mes y el anio anterior
  var mes2 = Number(mes);
  var anio2 = Number(anio);
  if(mes2 === 1){
    mes2= 12;
    anio2=anio2 - 1;
  }
  else mes2= mes2 - 1;

  //Acá se verán el mes y el anio siguiente
  var mes3 = Number(mes);
  var anio3 = Number(anio);
  if(mes3 === 12){
    mes3= 1;
    anio3=anio3 + 1;
  }
  else mes3= mes3 + 1;

  const diasMes = new Date(anio1, mes1, 0).getDate(); //límite de dias del mes
  let dias = [];
  for (var i = 1; i <= diasMes; i++) {
    dias.push(i);
  }
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row align-items-start p-2">
          <div
            className="btn-group btn-group-toggle col-md-4"
            data-toggle="buttons"
          >
            <Link
              className="btn btn-secondary col-md-1"
              to={"/Calendario/Resonancia/" + anoActual + "/" + mes_}
              role="button"
            >
              Resonancia
            </Link>
            <Link
              className="btn btn-secondary col-md-1"
              to={"/Calendario/Scanner/" + anoActual + "/" + mes_}
              role="button"
            >
              Scanner
            </Link>
            <Link
              className="btn btn-secondary active col-md-1"
              to={"/Calendario/Radiografia/" + anoActual + "/" + mes_}
              role="button"
            >
              Radiografía
            </Link>
            <Link
              className="btn btn-secondary col-md-1"
              to={"/Calendario/Ecografia/" + anoActual + "/" + mes_}
              role="button"
            >
              Ecografía
            </Link>
          </div>
          <Link
            className="btn btn-primary col-md-1"
            to={"/Calendario/Radiografia/" + anio2 + "/" + mes2}
            role="button"
          >
            Mes anterior
          </Link>
          <div className="text-center col-md-6">
            <h4>
              Calendario de {meses[mes1-1]} de Radiografía {anio1}
            </h4>
          </div>
          <Link
            className="btn btn-primary col-md-1"
            to={"/Calendario/Radiografia/" + anio3 + "/" + mes3}
            role="button"
          >
            Mes sigiente
          </Link>
        </div>
      </div>
      <div>
        {dias.map((dia) => (
          <div className="container-fluid" key={dia}>
            <div className="row align-items-start">
              <div className="card cardbody text-center m-2 col-md-1">
                <h2>{dia}</h2>
                <h6>{mesActual}</h6>
              </div>
              <div className="card cardbody col m-2">
                <div className="container-fluid">
                  <div className="row align-items-start">
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/08:30/Radiografia"
                          }
                        >
                          08:30
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/09:00/Radiografia"
                          }
                        >
                          09:00
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/09:30/Radiografia"
                          }
                        >
                          09:30
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/10:00/Radiografia"
                          }
                        >
                          10:00
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/10:30/Radiografia"
                          }
                        >
                          10:30
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/11:00/Radiografia"
                          }
                        >
                          11:00
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/11:30/Radiografia"
                          }
                        >
                          11:30
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/12:00/Radiografia"
                          }
                        >
                          12:00
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/12:30/Radiografia"
                          }
                        >
                          12:30
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/14:30/Radiografia"
                          }
                        >
                          14:30
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/15:00/Radiografia"
                          }
                        >
                          15:00
                        </Link>
                      </h5>
                    </button>
                    <button
                      type="button"
                      className="col btn btn-outline-success btn-lg m-2"
                    >
                      <h5>
                        <Link
                          className="nav-link"
                          to={
                            "/Calendario/Crear/" +
                            anio1 +
                            "/" +
                            mes1 +
                            "/" +
                            dia +
                            "/15:30/Radiografia"
                          }
                        >
                          15:30
                        </Link>
                      </h5>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
