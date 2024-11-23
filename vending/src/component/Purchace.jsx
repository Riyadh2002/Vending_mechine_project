import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../App';

// const sendPurchaseData = async (productData) => {
//     try {
//         const response = await fetch('http://localhost:5175', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: productData.name,
//                 quantity: productData.quantity
//             })
//         });

//         if (response.ok) {
//             console.log("Data sent successfully!");
//         } else {
//             console.error("Failed to send data:", response.statusText);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//     }
// };






export default function Purchase() {
    const [purchase] = useContext(context);
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
  
    
    const total = purchase && purchase.price ? (Number(purchase.price) * quantity * 1.2).toFixed(2) : 0;
    
    const sendDataToESP32 = async (data, quantity) => {
      try {
        const response = await fetch('http://10.15.59.251/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            quantity: quantity,   
            id: data.id,
          }),
        });
  
        if (response.ok) {
          console.log('Data sent successfully!');
        } else {
          console.log('Error sending data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    if (!purchase) {
      return <div>No product selected.</div>;
    }
  
    const handleConfirmPurchase = (data) => {
      console.log("id is=" + data.id);
      sendDataToESP32(data, quantity);  
      navigate("/thankYouCard");
      console.log("clicked");
    };
  
    return (
      <div className="container my-3">
        <div className="d-flex justify-content-start mb-3">
          <button
            className="btn btn-outline-secondary mr-2"
            onClick={() => navigate(-1)}
            style={{
              borderRadius: '20px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '8px 16px',
              fontWeight: 'bold',
              transition: 'transform 0.2s, background-color 0.2s',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            ← Back
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate('/')}
            style={{
              borderRadius: '20px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '8px 16px',
              fontWeight: 'bold',
              transition: 'transform 0.2s, background-color 0.2s',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </button>
        </div>
  
        <div
          className="card mx-auto p-3"
          style={{
            maxWidth: '400px',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h3 className="text-center text-primary mb-3">
            Purchase <strong>{purchase.name}</strong>
          </h3>
  
          <div className="product-image mb-3 mx-auto" style={{ textAlign: 'center' }}>
            {purchase.image ? (
              <img
                src={purchase.image}
                alt={purchase.name}
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: '200px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <p>Image not available</p>
            )}
          </div>
  
          <div className="text-center mb-3">
            <h5 className="mb-1">{purchase.name}</h5>
            <p className="text-muted">Price: ${purchase.price} each</p>
          </div>
  
          <div className="form-group d-flex justify-content-center my-2">
            <label className="mr-2 mb-0" style={{ fontWeight: 'bold' }}>Quantity:</label>
            <input
              type="number"
              className="form-control"
              style={{ maxWidth: '70px' }}
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
  
          <div className="text-center mb-3">
            <h5>Total: <span className="text-success">${total}</span></h5>
          </div>
  
          <button
            className="btn btn-primary btn-lg w-100"
            onClick={() => handleConfirmPurchase(purchase)}
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    );
  }