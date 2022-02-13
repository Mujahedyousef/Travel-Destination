import './Tours.css';



export default function Tours(props){
console.log(props.tour.name);
    return(
        <div id="div">
<h2 id="text" >{props.tour.name}</h2>
<img id='image' src={props.tour.image}     />
     </div>
    )
}