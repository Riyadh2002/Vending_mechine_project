import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../App';

import oreo from '../component/images/oreo.jpg';
import digestive from './images/digestive.jpg';
import mariGold from './images/mari.jpg';
import parleG from './images/parleG.jpg';
import hidensik from './images/gidensik.jpg';
import borubon from './images/borubon.jpg';
import sevenUpImage from './images/7up.jpg';
import rootBeerImage from '../component/images/bear.jpg';
import gingerAleImage from './images/ginger.jpg';

export default function Biscuit() {

    const [purchace, setPurchase]=useContext(context)

    const snedData=(data)=>{
        setPurchase(data)
    }

  return (
    <>
<div className="d-flex justify-content-start align-items-center my-3">
    <Link to="/home">
        <button className="btn btn-outline-primary" style={{ fontSize: "1.1rem", fontWeight: "500" }}>Back</button>
    </Link>
</div>

<h2 className="text-center text-success font-weight-bold mb-4" style={{ fontSize: '2.5rem', letterSpacing: '1px' }}>Biscuits</h2>

<div id="biscuitCarousel" className="carousel slide" data-ride="carousel" style={{ padding: '0 15px' }}>
    <div className="carousel-inner">
        {biscuitData.map((_, index) =>
            index % 3 === 0 ? (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={`slide-${index}`}>
                    <div className="d-flex justify-content-center">
                        {biscuitData.slice(index, index + 3).map((d) => (
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
                                        <p className="card-text font-weight-bold" style={{ fontSize: "1.1rem", color: "#28a745" }}>{d.price}</p>
                                        <Link
                                            to={{
                                                pathname: `/purchace/${d.name}`,
                                                state: {
                                                    productName: d.name,
                                                    image: d.image,
                                                    price: d.price,
                                                },
                                            }}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <button onClick={()=>snedData(d)} className="btn btn-success w-100" style={{ borderRadius: "10px", fontSize: "1rem" }}>
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

    <a className="carousel-control-prev" href="#biscuitCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: "brightness(70%)" }}></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#biscuitCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: "brightness(70%)" }}></span>
        <span className="sr-only">Next</span>
    </a>
</div>


    

    </>
  )
}



const biscuitData = [
    {
        "id": 20,
        "name": "Oreo",
        "description": "Chocolate sandwich cookie with cream filling.",
        "price": 0.80,
        "image": oreo,  // Replace with actual imported image
        "quantity": 40
    },
    {
        "id": 21,
        "name": "Digestive",
        "description": "Whole wheat biscuit with a hint of sweetness.",
        "price": 0.90,
        "image": digestive,  // Replace with actual imported image
        "quantity": 35
    },
    {
        "id": 22,
        "name": "Marie Gold",
        "description": "Light and crispy tea biscuit.",
        "price": 0.50,
        "image": mariGold,  // Replace with actual imported image
        "quantity": 45
    },
    {
        "id": 23,
        "name": "Parle-G",
        "description": "Classic Indian glucose biscuits.",
        "price": 0.30,
        "image": parleG,  // Replace with actual imported image
        "quantity": 50
    },
    {
        "id": 24,
        "name": "Bourbon",
        "description": "Chocolate-flavored biscuit with chocolate cream.",
        "price": 0.70,
        "image": borubon,  // Replace with actual imported image
        "quantity": 38
    },
    {
        "id": 25,
        "name": "Hide & Seek",
        "description": "Chocolate chip cookies with a rich flavor.",
        "price": 0.60,
        "image": hidensik,  // Replace with actual imported image
        "quantity": 30
    },
    {
        "id": 26,
        "name": "Good Day",
        "description": "Butter-flavored biscuit with cashew bits.",
        "price": 0.80,
        "image": "goodDayImage",  // Replace with actual imported image
        "quantity": 32
    },
    {
        "id": 27,
        "name": "Milk Bikis",
        "description": "Milk-flavored biscuit, perfect for tea time.",
        "price": "$0.40",
        "image": "milkBikisImage",  // Replace with actual imported image
        "quantity": 46
    },
    {
        "id": 28,
        "name": "Nice",
        "description": "Crispy coconut-flavored biscuit with sugar sprinkles.",
        "price": "$0.70",
        "image": "niceImage",  // Replace with actual imported image
        "quantity": 33
    }
];

