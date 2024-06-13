import inFlag from '../assets/flags/in.png';
import esFlag from '../assets/flags/es.png';
import ukFlag from '../assets/flags/uk.png';


const Flags = ()=> {
     return (
        <div className="flags">
            <img src={inFlag} alt="Hindi"/>
            <img src={esFlag} alt='Spanish'/>
            <img src={ukFlag} alt='English'/>
        </div>
     )
}

export default Flags;