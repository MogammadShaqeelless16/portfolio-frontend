import React, { useState, useRef } from 'react';
import "../QR-Code-Gen/QRCodeGenerator.css";

const QRCodeGenerator = ({ handleGoBack }) => {
  const [input, setInput] = useState('');
  const [qrCode, setQRCode] = useState(null);
  const qrCodeRef = useRef(null); // Reference to the image element

  const handleGenerate = async () => {
    if (!input) {
      return alert('Please enter a URL, text, or email address.');
    }

    try {
      const response = await fetch(`https://api.qrserver.com/v1/generate?data=${encodeURIComponent(input)}&size=150x150`); // Replace with your preferred QR code API endpoint and size
      const qrCodeBlob = await response.blob();
      const qrCodeURL = URL.createObjectURL(qrCodeBlob);
      setQRCode(qrCodeURL);
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('An error occurred while generating the QR code. Please try again later.');
    }
  };

  const handleCopy = () => {
    const image = qrCodeRef.current;
    if (!image) return;

    navigator.clipboard.writeText(image.src) // Copy image URL to clipboard
      .then(() => alert('QR Code image URL copied successfully!'))
      .catch((err) => console.error('Failed to copy image URL:', err));
  };

  const handleDownload = () => {
    const image = qrCodeRef.current;
    if (!image) return;

    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'qr-code.png'; // Set download filename
    link.click();
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter URL, text, or email address"
        />
        <button onClick={handleGenerate}>Generate QR Code</button>
      </form>
      {qrCode && (
        <div>
          <img src={qrCode} alt="QR Code" ref={qrCodeRef} />
          <button onClick={handleGoBack}>Go Back</button>
          <div className="qr-code-actions">
            <button onClick={handleCopy}>Copy Image URL</button>
            <button onClick={handleDownload}>Download Image</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
