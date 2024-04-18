import './Sobre.css';

export const Sobre = ({categoria}) => {
    return(
        <div id={categoria}>
        <div id="resumo">
            <h2>Sobre mim</h2>

            <p>Meu nome é Yuri e sonho em ser um programador profissional, desde muito pequeno sempre quis poder criar programas, jogos, etc. E agora estou nesta jornada para me tornar um grande "Dev"!
                Venho programando em HTML/CSS desde de janeiro de 2024.
            </p>
        </div>
        
        <div id="meus-conhecimentos">
            <h2>Meus conhecimentos</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
            </ul>
        </div>

        </div>
    )
}