import './rules.scss';

export const Rules = () => {
    return(
        <main className='rules'>
            <div className='rules_content'>
                <h2 className='rules_content_title'>Reglas del juego</h2>
                <p>El juego es muy sencillo. Dispondremos de 6 casillas que representan un camino en la zona de carga de la Razor Crest que lleva hasta el armario donde se encuentra segura la mercancía. De este modo tendremos 7 casillas, 6 del camino y una que representa al armario: 🔲🔲🔲🔲🔲🔲❎
                </p>
                <p>Durante el viaje has hecho muy bien tu trabajo pero ahora debes vaciar el armario. Para ello deberás descargar la mercancía poco a poco. Este es el momento más delicado ya que Grogu puede aprovechar y llegar hasta el armario. Si eso ocurre se
                    comerá lo que encuentre y Mando perderá la oportunidad de saber dónde esta Ahsoka. Ergo, te has quedado sin recompensa.
                </p>
                <p> Además de esas 7 piezas tendrás tres recipientes donde se guarda cada tipo de mercancía. De esta manera quedaría:
                </p>
                <ul>
                    <li>Recipiente de las galletas: Tendrá 3 cajas de galletas azules dentro</li>
                    <li>Recipiente de los huevos de rana: Tendrá dentro 3 huevos de rana (sin fertilizar)</li>
                    <li>Recipiente de las ranas: Tendrá dentro 3 ranas</li>
                </ul>

                <p>Además de estas piezas tendremos un dado de 4 caras donde cada cara representa una de las siguientes acciones:</p>
                <ul>
                    <li>Descargas una caja de galletas azules 🍪</li>
                    <li>Descargas un huevo de rana (con mucho cuidado) 🥚</li>
                    <li>Descargas una rana 🐸</li>
                    <li>Grogu se mueve una casilla 👣</li>
                </ul>
                <p>Además habrá una ficha que represente dónde está Grogu.</p>
                <p>Ganarás el juego si consigues descargar toda la mercancía. Perderás si Grogu llega a la última casilla (el armario).</p>
            </div>
        </main>
    )
}