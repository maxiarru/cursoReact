import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Sobre Nosotros</h1>

      <p className="about-text">
        En <strong>LimaLimón Pastelería</strong> combinamos recetas caseras con
        un toque moderno. Creemos en los sabores frescos, las texturas suaves y
        los ingredientes de calidad.
      </p>

      <p className="about-text">
        Somos un pequeño emprendimiento familiar dedicado a crear experiencias
        dulces que acompañen tus momentos especiales: cumpleaños, reuniones,
        aniversarios o simplemente un antojo.
      </p>

      <div className="about-contact">
        <h3>Contacto</h3>
        <p>
          📩 <strong>Email:</strong> limalimonpasteleria@gmail.com
        </p>
        <p>
          📷 <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/LimaLimonPasteleria"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            @LimaLimonPasteleria
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
