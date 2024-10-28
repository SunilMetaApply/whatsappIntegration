
// interface WhatsAppButtonInterface {
//   phoneNumber: number;
//   message?: string;
// }

export default function Home() {
  const phoneNumber = 917428697331;
  const message = "I need assistance";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
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
    </>
  );
}
