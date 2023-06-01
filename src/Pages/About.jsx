import { useNavigate } from 'react-router-dom';
import Sec from '../Components/Sec'

const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Sec/>
            <button onClick={()=> navigate('/')}>Back</button>
        </div>
    )
}

export default About;