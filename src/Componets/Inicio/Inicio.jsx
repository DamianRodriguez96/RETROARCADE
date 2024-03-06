import Footer from "../Footer/Footer";

const Inicio = () => {

    return (
        <div className="fondo">

            <h2 className="titulo">NUESTROS EQUIPOS</h2>
            <div className="contenedor">
                <img className="imagen" src="./2.img.jpg" alt="" />
                <div className="Text">
                    <h1>ATARI 2600</h1>
                    <p >La Atari 2600 es una videoconsola lanzada al mercado en septiembre de 1977 bajo el nombre de Atari VCS (Video Computer System), convirtiéndose en el primer sistema de videojuegos en tener gran éxito, e hizo popular los cartuchos intercambiables.</p>
                </div>
            </div>
            <div className="contenedor">
                <img className="imagen" src="/3.img.jpg" alt="" />
                <div className="Text">
                    <h1>ARCADE CLASIC</h1>
                    <p >Los videojuegos de arcade o arcadia [1]son un tipo de videojuegos que originalmente fueron concebidos para las máquinas recreativas (llamadas también, «máquinas de arcade») que desde inicios de los años 1970 fueron progresivamente introduciéndose y desbancando, en gran medida, a los juegos electromecánicos en lugares como centros comerciales, restaurantes, bares y salones recreativos especializados.1​ Hoy en día el término «arcade» es un término genérico que se utiliza para designar un estilo o categoría de videojuegos, incluso aunque dichos videojuegos ya no sean utilizados en máquinas recreativas sino a nivel doméstico en plataformas como consolas o el PC.</p>
                </div>
            </div>
            <div className="contenedor">
                <img className="imagen" src="./4.img.jpg" alt="" />
                <div className="Text">
                    <h1>THE LEGEND OF ZELDA</h1>
                    <p >The Legend of Zelda (ゼルダの伝説でんせつ Zeruda no Densetsu?) es una serie de videojuegos de acción-aventura creada por los diseñadores japoneses Shigeru Miyamoto y Takashi Tezuka,1​ y desarrollada por Nintendo, empresa que también se encarga de su distribución internacional. Su trama por lo general describe las heroicas aventuras del joven guerrero Link, que debe enfrentarse a peligros y resolver acertijos para ayudar a la Princesa Zelda a derrotar a Ganondorf y salvar su hogar, el reino de Hyrule.</p>
                </div>
                <p>Hola</p>

            </div>



            <Footer />
        </div>

    )
}
export default Inicio;