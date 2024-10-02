import React from 'react';
import Index from './index';

const Home = () => {
    return (
        <>
            <Index />
            <div className="homepage">
                {/* Hero Section */}
                <header className="hero">
                    <h1>Welcome to Tingle</h1>
                    <p>Your go-to job portal for computer science students in Delhi NCR.</p>
                    <a href="/about" className="cta-button">Learn More</a>
                </header>

                {/* Features Section */}
                <section className="features">
                    <h2>Features</h2>
                    <div className="feature-list">
                        <div className="feature">
                            <h3>Job Listings</h3>
                            <p>Find the latest job openings in the tech industry.</p>
                        </div>
                        <div className="feature">
                            <h3>HR Contacts</h3>
                            <p>Access email contacts of HRs from top companies.</p>
                        </div>
                        <div className="feature">
                            <h3>Career Resources</h3>
                            <p>Get tips and resources for your career development.</p>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="footer">
                    <p>&copy; 2024 Tingle. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default Home;
