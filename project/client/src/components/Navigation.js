import { Link, useNavigate } from 'react-router-dom';

const fecha = new Date();
const mes = fecha.getMonth() + 1; //mes en numero (sumarle 1 para tener el actual)
const anoActual = fecha.getFullYear(); // año actual

export default function Navigation() {
  // Verificar si hay un token en localStorage para saber si el usuario ha iniciado sesión
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();  // Usar history para redirigir al usuario
  
  const handleLogout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem('authToken');

    // Redirigir al usuario al inicio o login
    navigate('/Iniciar_sesion');
  };

  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <p className="navbar-brand m-2" to="/Calendario">Imagenología</p>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* Mostrar el botón solo si hay token */}
              {token && (
                <>
                  <li className="nav-item active">
                    <div className="nav-link" href="/">
                      <Link className="nav-link" to={"/Calendario/Resonancia/"+anoActual+"/"+mes}>Calendario</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link" href="/">
                      <Link className="nav-link" to='/Calendario/Historial'>Historial de modificaciones</Link>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Mostrar los botones solo si no hay token */}
          {!token ? (
            <>
              <span className="navbar-text m-2">
                  <div className="nav-link" href="/">
                    <Link className="nav-link" to='/Crear_usuario'>Crear Usuario</Link>
                  </div>
              </span>
              <span className="navbar-text m-2">
                  <div className="nav-link" href="/">
                    <Link className="nav-link" to='/Iniciar_sesion'>Iniciar Sesion</Link>
                  </div> 
              </span>
            </> 
          ) : (
            // Si hay token (usuario autenticado), mostrar el botón de Cerrar Sesión
            <span className="navbar-text m-2">
              <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
            </span>
          )}
        </nav>
      </div>
  )
}


