import './index.scss';
import App from '../../components/cabecalho/App';

function Index() {
return(
    <div className='home'>
        <App/>
        
        <div className='cabecalho-home'>
            <div className='cabecalho-cima'>
            <h4>Alianças</h4>
            <h4>Anéis</h4>
            <h4>Brincos</h4>
            <h4>correntes</h4>
            <h4>Namorados</h4>
            <h4>Pet</h4>
            </div>

            <div className='cabecalho-baixo'>
            <img src='./assets/images/image 4.png'/>
            </div>
        </div>

        <div className='meio-home'>
            <div className='meio-01'>
                    <h1>Categorias</h1>
            </div>
            <div className='meio-02'>
                    
            </div>
            <div className='03'>
                    <h1>oiiiii</h1>
            </div>
        </div>
    </div>
)



}

export default Index;