import React, { useState } from 'react';
import QRCode from './QRCode';

const RegisterForm = () => {
  const [userData, setUserData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Procesar los datos del formulario y actualizar userData
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
          {/* Formulario */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Registrarse
          </button>
        </form>
      ) : (
        <QRCode userData={userData} />
      )}
    </div>
  );
};

export default RegisterForm;
