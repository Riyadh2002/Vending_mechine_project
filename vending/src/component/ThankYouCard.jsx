import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYouCard() {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            navigate('/'); // Navigate to home after countdown reaches 0
        }
    }, [countdown, navigate]);

    return (
        <div className="container my-5">
            <div className="card mx-auto" style={{ maxWidth: '400px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
                <div className="card-body text-center">
                    <h3 className="card-title text-success">Thank You for Your Purchase!</h3>
                    <p className="card-text text-muted">Your product is ready and will be dispensed shortly.</p>
                    <p className="text-muted">Redirecting to the home page in <span id="countdown">{countdown}</span> seconds...</p>
                </div>
            </div>
        </div>
    );
}
