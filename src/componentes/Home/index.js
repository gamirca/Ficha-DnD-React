import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
      return (
            <div>
                  <h1>Página Inicial</h1>
                  <nav>
                        <ul>
                              <li>
                                    <Link to="/FichaRacas" >Comece a montar seu personagem</Link>
                              </li>
                        </ul>
                  </nav>
            </div>
      );
}

export default Home;