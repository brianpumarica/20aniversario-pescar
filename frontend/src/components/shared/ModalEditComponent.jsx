import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import axios from "axios";

export default function ModalEditComponent({ isOpen ,id}) {
  const backendURL = process.env.REACT_APP_BACKEND_URL;
    const dbHost = process.env.REACT_APP_DB_HOST || "174.25.0.2";
    const dbUser = process.env.REACT_APP_DB_USER || "admin";
    const dbName = process.env.REACT_APP_DB_NAME || "db";

  const [usuarios, setUsuarios] = useState([]);
  const [editedValues, setEditedValues] = useState({});

  const [editingId, setEditingId] = useState(id);
  const [open, setOpen] = useState(isOpen)
  useEffect(() => {
    const config = {
        params: {
            server: dbHost,
            username: dbUser,
            db: dbName,
        },
    };
    axios
        .get(backendURL, config)
        .then((res) => setUsuarios(res.data))
        .catch((err) => console.log(err));
}, [backendURL, dbHost, dbUser, dbName]); // Incluye las variables en el array de dependencias
useEffect(() => {
    const userToEdit = usuarios.find((user) => user.id === id);
    if (userToEdit) {
      setEditedValues({
        nombreapellido: userToEdit.nombreapellido,
        telefono: userToEdit.telefono,
        comida: userToEdit.comida,
        empresa: userToEdit.empresa,
        habilitado: userToEdit.habilitado,
      });
    }
  }, [usuarios, id]);
  

const handleInputChange = (event) => {
  const { name, value, type, checked } = event.target;
  setEditedValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
  }));
};

const handleSave = (id) => {
  axios
      .put(`${backendURL}/user/${id}`, {
          id: id,
          nombre: editedValues.nombreapellido,
          telefono: editedValues.telefono,
          comida: editedValues.comida,
          habilitado: editedValues.habilitado,
      })
      .then((response) => {
          if (response.data.success) {
              setUsuarios((prevUsers) =>
                  prevUsers.map((user) =>
                      user.id === id ? { ...user, ...editedValues } : user
                  )
              );
              setEditingId(null);
              window.location.reload(); // Recargar la página
          }
      })
      .catch((error) => {
          console.error("Error al actualizar usuario:", error);
      });
};
  const cancelButtonRef = useRef(null)
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="text-center relative bg-white rounded-lg shadow-md flex flex-col items-center p-5 justify-center">

                  <div className="sm:flex sm:items-start">
                    <div className="grid grid-cols-1  gap-x-8 gap-y-6">
                        <div className="space-y-6">
                            <div className="border-b border-gray-900/10 pb-1">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Editar usuario</h2>
                                {usuarios.map((usuario) => (
                                <div key={editingId === usuario.id ? `editing-${usuario.id}` : usuario.id}> 
                                  
                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <label htmlFor="nombreapellido" className="block text-sm font-medium leading-6 text-gray-900">
                                            Nombre y apellido
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    value={editedValues.nombreapellido}
                                                    name="nombreapellido"
                                                    id="nombreapellido"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Ingrese nombre y apellido"
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                                            Teléfono
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="telefono"
                                                    id="telefono"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Ingrese el teléfono"
                                                    value={editedValues.telefono}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="comida" className="block text-sm font-medium leading-6 text-gray-900">
                                            Comida
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="comida"
                                                name="comida"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                                onChange={handleInputChange}
                                                required
                                                value={editedValues.comida}
                                            >
                                                <option value="Sin restricciones">Sin restricciones</option>
                                                <option value="vegetariano">Vegetariano</option>
                                                <option value="vegano">Vegano</option>                                    <option value="celiaco">Celiaco</option>
                                            </select>
                                        </div>
                                    </div>                                    
                                    <div className="col-span-full">
                                        <label htmlFor="empresa" className="block text-sm font-medium leading-6 text-gray-900">
                                            Empresa
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="empresa"
                                                    id="empresa"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Ingrese la empresa"
                                                    onChange={handleInputChange}
                                                    value={editedValues.empresa}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 hover:bg-indigo-500 px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white shadow-sm sm:ml-3 sm:w-auto"
                    onClick={() => handleSave(id)}
                  >
                    Modificar
                  </button>                  
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
ModalEditComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};