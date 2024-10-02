import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to home after 5 seconds
        const timer = setTimeout(() => {
            router.push('/'); // Navigate to home page
        }, 5000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [router]);

    const handleBackToHome = () => {
        router.push('/'); // Use Next.js router to navigate
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.message}>Sorry, the page you are looking for does not exist.</p>
            <p style={styles.message}>You will be redirected to the home page in 5 seconds.</p>
            <button onClick={handleBackToHome} style={styles.button}>
                Back to Home
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
    },
    title: {
        fontSize: '2.5rem',
        color: '#dc3545', // Bootstrap danger color
    },
    message: {
        fontSize: '1.25rem',
        margin: '20px 0',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff', // Bootstrap primary color
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Error;
