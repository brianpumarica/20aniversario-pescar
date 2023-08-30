import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types"; // Import PropTypes for prop type validation
import axios from "axios";
import Swal from 'sweetalert2';

export default function ModalEditInvitado({ isOpen, invitado, setModalIsOpen }) {
  const backendURL = process.env.REACT_APP_BACKEND_URL||'aniversariopescar.com.ar/api/';
  const [editedValues, setEditedValues] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [open, setOpen] = useState(isOpen);
  const [invitadoToEdit, setInvitadoToEdit] = useState(null); 

  useEffect(() => {
    if(invitado){
      setEditedValues({
        nombreapellido: invitado.nombreapellido,
        empresa: invitado.empresa,
        comida: invitado.comida,
        habilitado: invitado.habilitado,
      });
      setEditingId(invitado.id);
    }
  }, [invitado]);
useEffect(() => {
  // Fetch additional data only when editingId changes
  if (editingId) {
    axios
      .get(`${backendURL}/invitadoActual`, { params: { id: editingId } })
      .then((res) => {
        const fetchedInvitado = res.data;
        setInvitadoToEdit(fetchedInvitado);
      })
      .catch((err) => console.log(err));
  }
}, [backendURL, editingId]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setEditedValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (invitado) => {
    const updatedInvitado = {
      id: invitado.id,
      nombre: editedValues.nombreapellido,
      empresa: editedValues.empresa,
      comida: editedValues.comida,
      habilitado: editedValues.habilitado,
    };
    axios
      .put(`${backendURL}/invitados/${invitado.id}`, updatedInvitado)
      .then((response) => {
        if (response.data.success) {
          setEditingId(null);
          setEditedValues(updatedInvitado);
          setModalIsOpen(false);
          Swal.fire({
            icon: 'success',
            text: '¡Modificación exitosa!',
            timer: 1500, // Configura el tiempo en milisegundos
            timerProgressBar: true
          }).then(() => {
            window.location.reload();
          });
        }
      })
      .catch((error) => {
        console.error("Error al actualizar Invitado:", error);
        Swal.fire({
          icon: 'error',
          title: '¡Lo sentimos!',
          text: error.response.data.message,
          timer: 1500, // Configura el tiempo en milisegundos
          timerProgressBar: true
      }).then(() => {
        window.location.reload();
      });
      });
  };
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const closeOnEsc = (event) => {
      if (event.key === "Escape") {
        setModalIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEsc);

    return () => {
      window.removeEventListener("keydown", closeOnEsc);
    };
  }, [setModalIsOpen]);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
        static
      >
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

        <div className="fixed inset-0 z-10 overflow-y-auto min-h-screen  min-w-screen  flex  justify-center items-center">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Editar invitado
                          </h2>
                          {
                          invitadoToEdit && (
                          
                            <div
                              key={editingId}
                            >
                              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                                <div className="col-span-full">
                                  <label
                                    htmlFor="nombreapellido"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Nombre y apellido {invitado.id}
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
                                  <label
                                    htmlFor="comida"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
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
                                      <option value="Sin restricciones">
                                        Sin restricciones
                                      </option>
                                      <option value="vegetariano">
                                        Vegetariano
                                      </option>
                                      <option value="vegano">Vegano</option>{" "}
                                      <option value="celiaco">Celiaco</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-span-full">
                                  <label
                                    htmlFor="empresa"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
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

                          )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 hover:bg-indigo-500 px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white shadow-sm sm:ml-3 sm:w-auto"
                    onClick={() => handleSave(invitado)}
                  >
                    Modificar
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      setOpen(false);
                      setModalIsOpen(false);
                    }}
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
  );
}
ModalEditInvitado.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  invitado: PropTypes.object.isRequired, 
  setModalIsOpen: PropTypes.func.isRequired,
};

// editingId === usuario.id ? (
//     <input
//         type="checkbox"
//         name="habilitado"
//         checked={editedValues.habilitado}
//         onChange={handleInputChange}
//     />
// ) : (
