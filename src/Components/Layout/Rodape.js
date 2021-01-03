import './Card.css'

function Rodape (){

    return(

        <div>
            <div className="pagamento">
                <p > Formas de Pagamento </p>
                <img src={require('../Layout/imagens/pagamento.JPG').default} 
                 alt=""/>
                <p > &copy; Fullstack Flores </p>
                <p > &copy; Recode Pro </p>
            </div>
        </div>

      

    );
}

export default Rodape;