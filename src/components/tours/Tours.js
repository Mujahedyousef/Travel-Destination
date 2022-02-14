import './Tours.css';
import Tour from './tour/Tour'
import { Link } from 'react-router-dom';

export default function Tours(props) {
    // console.log(props.tour);
    return (
        <>
            {
                props.tour.map(object => {
                    return (
                        <div id="tour">
                            <Link id="link"  to={`/city/${object.id}`} > Read More about {object.name}</Link>
                            <Tour key={object.id} dataShown={object} />
                        </div>
                    )
                })
            }
        </>
    )
}