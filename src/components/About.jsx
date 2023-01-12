/* import { Carousel } from "react-bootstrap"; */
<link rel="stylesheet" href="App.css" />;

const About = () => {
  return (
    <article className="sobreMi">
      <div class="contenedor inicio">
        <h2 class="bienvenidos">B I E N V E N I D O S</h2>
        <br />
        <h2>Mi nombre es:</h2>
        <div class="pag">
          <h1>
            Paula Agustina Ghiorzi...<span>&#160;</span>
          </h1>
        </div>
        <h3>Desarrolladora Web FrontEnd</h3>
      </div>
      <h3>Sobre mi...</h3>
      <p class="sobreMiP">
        Me considero una persona curiosa, que busca constantemente expandir sus
        horizontes a través de viajes y experiencias. Una de mis habilidades más
        fuertes es desarrollar relaciones interpersonales con mi equipo y
        Compañeros. Me gusta leer, correr y pasar tiempo de calidad con mis
        amigos y familiares. Tambien juego al rugby...
      </p>
      <article class="redes">
        <div class="box">
          <a href="mailto:ghiorzi24@gmail.com">
            <img class="girar" src="assets/correo.png" alt="logo correo" />
          </a>
            <p class="parrafoBox">Contáctame</p>
        </div>
        <div class="box">
          <a href="https://www.instagram.com/paughiorzi/">
            <img
              class="girar"
              src="assets/Instagram.png"
              alt="logo instagram"
            />
          </a>
            <p class="parrafoBox">Sigueme</p>
        </div>
        <div class="box">
          <a href="https://www.linkedin.com/in/paula-agustina-ghiorzi-5bb659213/">
            <img class="girar" src="assets/linkedin.png" alt="logo linkedin" />
          </a>
            <p class="parrafoBox">Sígueme</p>
        </div>
        <div class="box">
          <a href="https://github.com/paughiorzi">
            <img class="girar" src="assets/Github.png" alt="logo github" />
          </a>
            <p class="parrafoBox">Sígueme</p>
        </div>
      </article>
      {/* <Carousel fade>
        <Carousel.Item>
          <Carousel.Caption id="titulos">
            <div class="contenedor">
        <h2>B I E N V E N I D O S</h2>
              <br/>
        <h2>Mi nombre es:</h2>
        <h1>Paula Agustina Ghiorzi...<span>&#160;</span></h1>
      </div>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/837478/pexels-photo-837478.jpeg?cs=srgb&dl=pexels-irina-iriser-837478.jpg&fm=jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?cs=srgb&dl=pexels-sora-shimazaki-5926382.jpg&fm=jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h2>Desarrolladora Web FrontEnd</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?cs=srgb&dl=pexels-catarina-sousa-68704.jpg&fm=jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Sobre mi...</h3>
            <p>
              Me considero una persona curiosa, que busca constantemente expandir
              sus horizontes a través de viajes y experiencias. Una de mis
              habilidades más fuertes es desarrollar relaciones interpersonales
              con mi equipo y Compañeros. Me gusta leer, correr y pasar tiempo de
              calidad con mis amigos y familiares. Tambien juego al rugby...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </article>
  );
};
export default About;
