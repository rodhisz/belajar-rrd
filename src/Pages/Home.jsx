import { useNavigate } from 'react-router-dom';
import First from '../Components/First';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <First />
            <button onClick={() => navigate('/about')}>About</button>
        </div>
    )
}

export default Home;