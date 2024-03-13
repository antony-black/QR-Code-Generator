import React from "react";
import QRCode from "react-qr-code";
import { useState} from "react";
import "./index.scss";

export default function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleGenerateButtonClick = (value) => {
    setQrCode(value);
    setInputValue('');
  }

  const isValue = (value) => {
    return value && value.length > 0 ? false : true;
  }

  return <div className="main-container">
   <h1>QR Code Generator</h1>
   <div>
    <input 
    type="text" 
    name="qr-code"
    placeholder="Enter your phrase..."
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    />
    <button 
    disabled={isValue(inputValue)}
    className={isValue(inputValue) ? "qr-btn disabled" : "qr-btn"}
    onClick={() => handleGenerateButtonClick(inputValue)
    }>
    Generate QR Code
    </button>
    </div>
    <div className="qr">
      <QRCode id="qr-code-value" value={qrCode}/>
    </div>
    </div>;
}
