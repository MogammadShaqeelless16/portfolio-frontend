import React, { useState } from 'react';
import QRCodeGenerator from '../../Components/QR-Code-Gen/QRCodeGenerator';
import { Grid } from '@material-ui/core';
import Block from '../../Components/Tool-Block/Tool-Block';

const Tool = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
  };

  const handleGoBack = () => {
    setSelectedTool(null);
  };

  return (
    <div>
      {selectedTool ? (
        <div>
          {selectedTool === 'QR Code Generator' ? (
            <QRCodeGenerator handleGoBack={handleGoBack} />
          ) : null}
        </div>
      ) : (
        <div className="grid-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Block
                title="QR Code Generator"
                description="Generate QR codes for URLs, text, or email addresses"
                onClick={() => handleToolSelect('QR Code Generator')}
              />
            </Grid>
            {/* Add other tools here */}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Tool;
