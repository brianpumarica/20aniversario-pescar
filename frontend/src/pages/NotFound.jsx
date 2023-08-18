import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <h2>Ooops! Página no encontrada</h2>
            <Link to="/">Volver al Inicio</Link>
        </div>
    )
}
