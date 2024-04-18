import iconeGithub from "../img/25231.png"
import iconeLinkedin from "../img/linkedin_logo_icon_189225.png"
import imgDev from "../img/public-removebg-preview.png"
function App(){

return(
  <main>
    <section>
      <p id="bemvindo">
      Seja muito bem-vindo(a)!
      </p> 
    
      <p>
        Meu nome é <span>Yuri</span> e sou um desenvolvedor!
        </p>

    
    <div id="redes-sociais">
      <a href="#">
        <img src={iconeGithub} alt="" srcSet="" />
      </a>
      <a href="#">
        <img src={iconeLinkedin} alt="" srcSet="" />
      </a>
    </div>

    <a href="#sobreMim">
      <button>Conheça mais sobre mim</button>
    </a>
    </section>

    <section>

    </section>
    <section>
       <img id="imagemDev" src={imgDev} />
    </section>
   
  </main>
  )
}

export default App
