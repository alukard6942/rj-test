import React from 'react';
import QRImage from 'react-qr-image';

const getQrData = (accountCode) => `2;RJ_SEAT;${accountCode}`;

const QrBox = ({ qrData, userAccountCode }) => (
  <div className="flex flex-col items-center gap-1">
    <QRImage> {userAccountCode} </QRImage>
    {userAccountCode && (
      <div className="text-neutral-gray">Cislo uctu {userAccountCode}</div>
    )}
  </div>
);
export default QrBox;
