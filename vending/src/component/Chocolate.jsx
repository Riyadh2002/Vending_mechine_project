import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Snekers from '../component/images/snekers.jpg';
import Kitket from './images/kitket.jpg';
import Treat from './images/treat.jpeg';
import Twinx from './images/twinx.jpg';
import DarkMilk from './images/darkMilk.jpg';
import MilkyWay from './images/milkyWay.jpg';
import { context } from '../App';

export default function Chocolate() {
  const [purchase, setPurchase] = useContext(context);

  const snedData = (data) => {
    setPurchase(data);
  };

  return (
    <>
      <div className="d-flex justify-content-start align-items-center my-3">
  <Link to="/home">
    <button className="btn btn-outline-primary">Back</button>
  </Link>
</div>

<h2 className="text-center text-primary font-weight-bold mb-4" style={{ fontSize: '2.5rem', letterSpacing: '1px' }}>Chocolates</h2>

<div id="chocolatesCarousel" className="carousel slide" data-ride="carousel" style={{ padding: '0 15px' }}>
  <div className="carousel-inner">
    {chocolateData.map((_, index) =>
      index % 3 === 0 ? (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={`slide-${index}`}>
          <div className="d-flex justify-content-center">
            {chocolateData.slice(index, index + 3).map((d) => (
              <div
                className="card mx-2 d-flex flex-column"
                style={{
                  width: "18rem",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                key={d.name}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0px 12px 20px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.15)";
                }}
              >
                <img
                  src={d.image}
                  className="card-img-top"
                  alt={d.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    filter: "brightness(95%)",
                  }}
                />
                <div className="card-body d-flex flex-column flex-grow-1" style={{ backgroundColor: "#f9f9f9", padding: "1rem" }}>
                  <h5 className="card-title" style={{ fontWeight: '600', fontSize: '1.25rem', color: "#333" }}>{d.name}</h5>

                  <div
                    className="card-text overflow-auto flex-grow-1"
                    style={{
                      maxHeight: "50px",
                      overflowY: "auto",
                      marginBottom: "10px",
                      fontSize: "0.9rem",
                      color: "#555"
                    }}
                  >
                    {d.description}
                  </div>

                  <p className="card-text text-muted" style={{ fontSize: "0.85rem" }}>Quantity: {d.quantity}</p>

                  <div className="mt-auto">
                    <p className="card-text font-weight-bold" style={{ fontSize: "1.1rem", color: "#0069d9" }}>${d.price}</p>
                    <Link
                      to={`/purchace/${d.name}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <button onClick={() => snedData(d)} className="btn btn-primary w-100" style={{ borderRadius: "10px", fontSize: "1rem" }}>
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null
    )}
  </div>

  {/* Carousel controls */}
  <a className="carousel-control-prev" href="#chocolatesCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#chocolatesCarousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

    </>
  );
}





const chocolateData = [
    {
        "id": 1,
        "name": "Snickers",
        "description": "Chocolate bar with nougat, caramel, and peanuts.",
        "price": 1.00,
        "image": Snekers,  // Replace with actual imported image
        "quantity": 30
    },
    {
      "id": 2,
      "name": "Treat",
      "description": "Soft nougat with caramel covered in chocolate.",
      "price": 1.30,
      "image": Treat,  // Replace with actual imported image
      "quantity": 20
  },

    {
        "id": 11,
        "name": "KitKat",
        "description": "Crispy wafer covered in milk chocolate.",
        "price": 1.20,
        "image": Kitket,  // Replace with actual imported image
        "quantity": 25
    },
    
    {
        "id": 13,
        "name": "Twix",
        "description": "Crunchy cookie with caramel and chocolate.",
        "price": 1.20,
        "image": Twinx,  // Replace with actual imported image
        "quantity": 22
    },
    {
        "id": 1,
        "name": "Dairy Milk",
        "description": "Smooth and creamy milk chocolate.",
        "price": 1.50,
        "image": DarkMilk,  // Replace with actual imported image
        "quantity": 18
    },
    {
        "id": 15,
        "name": "Milky Way",
        "description": "Soft nougat covered in milk chocolate.",
        "price": 1.10,
        "image": MilkyWay,  // Replace with actual imported image
        "quantity": 24
    },
    {
        "id": 16,
        "name": "Bounty",
        "description": "Coconut filling covered in milk chocolate.",
        "price": 1.30,
        "image": "bountyImage",  // Replace with actual imported image
        "quantity": 16
    },
    {
        "id": 17,
        "name": "Hershey's",
        "description": "Classic milk chocolate bar.",
        "price": "$1.00",
        "image": "hersheysImage",  // Replace with actual imported image
        "quantity": 27
    },
    {
        "id": 18,
        "name": "Toblerone",
        "description": "Chocolate with honey and almond nougat.",
        "price": "$1.70",
        "image": "tobleroneImage",  // Replace with actual imported image
        "quantity": 15
    }
];
