import { Fragment, useRef, useEffect, useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types"; // Import PropTypes for prop type validation

export default function ModalDevelopers({ isOpen, setModalIsOpen }) {
    const [open, setOpen] = useState(isOpen);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen, setModalIsOpen]);

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
                            Developers
                          </h2>
                          <div>
                            <p>Brian</p>
                          </div>
                          <div>
                            <p>Brian</p>
                          </div>
                          <div>
                            <p>Brian</p>
                          </div>
                          <div>
                            <p>Brian</p>
                          </div>
                          <div>
                            <p>Brian</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      setOpen(false);
                      setModalIsOpen(false);
                    }}
                    ref={cancelButtonRef}
                  >
                    Ok
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

ModalDevelopers.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setModalIsOpen: PropTypes.func.isRequired,
  };
  