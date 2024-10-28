import React from 'react';

const Home: React.FC = () => {
  const phoneNumber: number = 917428697331;
  const message: string = "I need assistance";

  const whatsappLink: string = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main>
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        Chat with us on WhatsApp
      </a>
    </main>
  );
};

export default Home;
