import '../css/Form.css'

function Contato(){
    return(
        <section className="contato" id="conteudo">
            <div className="row">
                
                <form action="">
                    <h3>ENTRE EM CONTATO</h3>
                    <div className="inputBox">
                        <input type="text" placeholder="Nome" />
                    </div>
                    <div className="inputBox">
                        <input type="email" placeholder="exemplo@exemplo.com" />
                    </div>
                    <div className="inputBox">
                        <input type="text" placeholder="11 97070-7070" />
                    </div>
                    <input type="submit" value="Enviar" className="botao" />
                </form>
            </div>
        </section>
    )
}

export default Contato