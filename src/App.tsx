import React, { useState } from 'react';
import './App.css';

function App() {
  const [addresses, setAddresses] = useState(['', '', '', '']);

  const initialFrom = `From,
Rashmi Designer Hub
Ph: +91-8860115323`

  const [from, setFrom] = useState([initialFrom, initialFrom, initialFrom, initialFrom]);

  const handleAddressChange = (event, index) => {
    const newAddresses = [...addresses];
    newAddresses[index] = event.target.value;
    setAddresses(newAddresses);
  };

  const handleFromChange = (event, index) => {
    const newFrom = [...from];
    newFrom[index] = event.target.value;
    setFrom(newFrom);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const canvas = document.createElement('canvas');
    const image = new Image();
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      // @ts-ignore
      const context: CanvasRenderingContext2D = canvas.getContext('2d');
      context.drawImage(image, 0, 0);
      context.font = '26px Arial';
      context.fillStyle = '#000000';
      context.textAlign = 'left';
      // 95, 150, canvas.width - 908, canvas.height - 425
      const lines1 = addresses[0].split(/\r?\n/);
      const lines2 = addresses[1].split(/\r?\n/);
      const lines3 = addresses[2].split(/\r?\n/);
      const lines4 = addresses[3].split(/\r?\n/);
      const lineSpacing = 40;
      let margin = 92;
      let y = 150;
      let margin2 = 915;
      for (let i = 0; i < lines1.length; i++) {
        context.fillText(lines1[i], margin, y);
        y += lineSpacing;
      }
      y = 150;
      for (let i = 0; i < lines2.length; i++) {
        context.fillText(lines2[i], canvas.width - margin2, y);
        y += lineSpacing;
      }
      y = 650;
      for (let i = 0; i < lines3.length; i++) {
        context.fillText(lines3[i], margin, y);
        y += lineSpacing;
      }
      y = 650;
      for (let i = 0; i < lines4.length; i++) {
        context.fillText(lines4[i], canvas.width - margin2, y);
        y += lineSpacing;
      }

      const froms1 = from[0].split(/\r?\n/);
      const froms2 = from[1].split(/\r?\n/);
      const froms3 = from[2].split(/\r?\n/);
      const froms4 = from[3].split(/\r?\n/);

      margin = 625;
      y = 300;
      margin2 = 375;
      for (let i = 0; i < froms1.length; i++) {
        context.fillText(froms1[i], margin, y);
        y += lineSpacing;
      }
      y = 300;
      for (let i = 0; i < froms2.length; i++) {
        context.fillText(froms2[i], canvas.width - margin2, y);
        y += lineSpacing;
      }
      y = 800;
      for (let i = 0; i < froms3.length; i++) {
        context.fillText(froms3[i], margin, y);
        y += lineSpacing;
      }
      y = 800;
      for (let i = 0; i < froms4.length; i++) {
        context.fillText(froms4[i], canvas.width - margin2, y);
        y += lineSpacing;
      }

      const downloadLink = document.createElement('a');
      downloadLink.download = 'labels.png';
      downloadLink.href = canvas.toDataURL();
      downloadLink.click();
    };
    image.src = '/template.png';
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="address1">Address 1:</label>
        <textarea
          id="address1"
          value={addresses[0]}
          rows={12}
          cols={20}
          onChange={(event) => handleAddressChange(event, 0)}
        />
        <label htmlFor="address1">From:</label>
        <textarea
          id="from1"
          value={from[0]}
          rows={7}
          cols={20}
          onChange={(event) => handleFromChange(event, 0)}
        />
        <br />
        <label htmlFor="from">Address 2:</label>
        <textarea
          id="address2"
          value={addresses[1]}
          rows={12}
          cols={20}
          onChange={(event) => handleAddressChange(event, 1)}
        />
        <label htmlFor="from">From:</label>
        <textarea
          id="from2"
          value={from[1]}
          rows={7}
          cols={20}
          onChange={(event) => handleFromChange(event, 1)}
        />
        <br />
        <label htmlFor="address3">Address 3:</label>
        <textarea
          id="address3"
          value={addresses[2]}
          rows={12}
          cols={20}
          onChange={(event) => handleAddressChange(event, 2)}
        />
        <label htmlFor="from">From:</label>
        <textarea
          id="from3"
          value={from[2]}
          rows={7}
          cols={20}
          onChange={(event) => handleFromChange(event, 2)}
        />
        <br />
        <label htmlFor="address4">Address 4:</label>
        <textarea
          id="address4"
          value={addresses[3]}
          rows={12}
          cols={20}
          onChange={(event) => handleAddressChange(event, 3)}
        />
        <label htmlFor="from">From:</label>
        <textarea
          id="from4"
          value={from[3]}
          rows={7}
          cols={20}
          onChange={(event) => handleFromChange(event, 3)}
        />
        <br />
        <button type="submit">Download Image</button>
      </form>
    </div>
  );
}

export default App;
