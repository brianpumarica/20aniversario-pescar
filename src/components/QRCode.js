import React from 'react';
import QRCodeLib from 'react-qr-code';

const QRCode = ({ userData }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <QRCodeLib value={JSON.stringify(userData)} size={200} />
      <div className="mt-4">
        {/* Datos usuario*/}
      </div>
    </div>
  );
};

export default QRCode;

