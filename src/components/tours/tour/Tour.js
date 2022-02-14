import './Tour.css';


export default function Tour(props) {
    console.log(props.dataShown);
    return (




        <div id="div">
            <h2 id="name">{props.dataShown.name}</h2>
            <img id="image" src={props.dataShown.image} alt={props.dataShown.name} />
        </div>
    )
}



