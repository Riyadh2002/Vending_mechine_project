
import cocaColaImage from './images/coca_cola.jpg';
import pepsiImage from './images/pepsi.jpg';
import spriteImage from './images/sprit.jpg';
import fantaImage from './images/fanta.jpg';
import mountainDewImage from './images/dew.jpg';
import drPepperImage from './images/pepper.jpg';
import sevenUpImage from './images/7up.jpg';
import rootBeerImage from '../component/images/bear.jpg';
import gingerAleImage from './images/ginger.jpg';
import { Link } from 'react-router-dom';

import { context } from '../App';
import { useContext } from 'react';


const softDrinksData = [
    {
        name: "Coca-Cola",
        description: "Classic soda with refreshing taste.",
        price: 1.50,
        image: cocaColaImage,  // Imported image
        quantity: 20,
        id:1,
    },
    {
        name: "Mountain Dew",
        description: "Citrus-flavored soda with a kick.",
        price: 1.60,
        image: mountainDewImage,  // Imported image
        quantity: 12,
        id:2,
    },
    {
        name: "Dr Pepper",
        description: "Unique 23-flavor soda blend.",
        price: 1.50,
        image: drPepperImage,  // Imported image
        quantity: 22,
        id:3
    },
    {
        name: "7 Up",
        description: "Refreshing lemon-lime soda.",
        price: 1.30,
        image: sevenUpImage, 
        quantity: 19,
        id:4
    },
    {
        name: "Root Beer",
        description: "Classic root beer with a rich, creamy flavor.",
        price: 1.40,
        image: rootBeerImage,  
        quantity: 17,
        id:5
    },
    {
        name: "Ginger Ale",
        description: "Spicy and refreshing ginger-flavored soda.",
        price: 1.20,
        image: gingerAleImage,  
        quantity: 14,
        id:6
    },
    {
        name: "Pepsi",
        description: "Bold and refreshing cola drink.",
        price: 1.40,
        image: pepsiImage, 
        quantity: 15,
        id:7
    },
    {
        name: "Sprite",
        description: "Lemon-lime flavored soda with no caffeine.",
        price: 1.30,
        image: spriteImage,  
        quantity: 25,
        id:8
    },
    {
        name: "Fanta",
        description: "Delicious orange-flavored soda.",
        price: 1.20,
        image: fantaImage, 
        quantity: 18,
        id:9
    }
];















export default function SoftDrink() {

    const [purchace, setPurchase]=useContext(context)

    const snedData=(data)=>{
        setPurchase(data)
    }


    console.log(softDrinksData.name)
    return (
    <>
    <div className="d-flex justify-content-start align-items-center my-3">
        <Link to="/home">
            <button className="btn btn-outline-primary" style={{ fontSize: "1.1rem", fontWeight: "500" }}>Back</button>
        </Link>
    </div>
    
    <h2 className="text-center text-info font-weight-bold mb-4" style={{ fontSize: '2.5rem', letterSpacing: '1px' }}>Soft Drinks</h2>
    
    <div id="softDrinksCarousel" className="carousel slide" data-ride="carousel" style={{ padding: '0 15px' }}>
        <div className="carousel-inner">
            {softDrinksData.map((_, index) =>
                index % 3 === 0 ? (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={`slide-${index}`}>
                        <div className="d-flex justify-content-center">
                            {softDrinksData.slice(index, index + 3).map((d) => (
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
                                            <p className="card-text font-weight-bold" style={{ fontSize: "1.1rem", color: "#007bff" }}>${d.price}</p>
                                            <Link
        to={{
            pathname: `/purchace/${d.name}`,
        }}
        style={{ textDecoration: 'none' }}
    >
        <button
  onClick={() => snedData(d)}  
  name={d.name}
  className="btn btn-primary w-100"
  style={{ borderRadius: "10px", fontSize: "1rem" }}
>
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
    
        <a className="carousel-control-prev" href="#softDrinksCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: "brightness(70%)" }}></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#softDrinksCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: "brightness(70%)" }}></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    
    </>
    )
}


