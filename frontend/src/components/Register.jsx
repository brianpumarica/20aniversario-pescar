function Register() {
    return (
        <div>
            <div>
                <h2>Registrar nuevo usuario</h2>
                <form>
                    <div>
                        <label htmlFor="nombreUsuario"><strong>Nombre de usuario</strong></label>
                        <input type="text" placeholder='Ingrese el nombre de usuario' name='nombreUsuario' />
                    </div>
                    <div>
                        <label htmlFor="nombreApellido"><strong>Nombre y apellido</strong></label>
                        <input type="text" placeholder='Ingrese nombre y apellido' name='nombreApellido' />
                    </div>
                    <div>
                        <label htmlFor="telefono"><strong>Teléfono</strong></label>
                        <input type="text" placeholder='Ingrese el teléfono' name='telefono' />
                    </div>
                    <div>
                        <label htmlFor="listaInvitados"><strong>Lista de Invitados</strong></label>
                        <input type="text" placeholder='Ingrese la lista de invitados' name='listaInvitados' />
                    </div>
                    <div>
                        <label htmlFor="empresa"><strong>Empresa</strong></label>
                        <input type="text" placeholder='Ingrese la empresa' name='empresa' />
                    </div>
                    <div>
                        <label htmlFor="comida"><strong>Comida</strong></label>
                        <select
                            name="comida"
                        >
                            <option value="Sin restricciones" defaultValue>Sin restricciones</option>
                            <option value="vegetariano">Vegetariano</option>
                            <option value="vegano">Vegano</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="password"><strong>Contraseña</strong></label>
                        <input type="password" placeholder='Ingrese la contraseña' name='password' />
                    </div>
                    <button type='submit'>
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
