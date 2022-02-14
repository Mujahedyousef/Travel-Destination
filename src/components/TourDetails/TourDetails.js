import './TourDetails.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from 'react-router-dom';
import { useState } from 'react';


export default function TourDetails(props) {
    console.log('data', props.arrayData)
    const [shown, setShown] = useState(false)
    function handelClick() {
        setShown(!shown)
    }
    let { id } = useParams();
    let dataFromUseParam = props.arrayData.filter(element => element.id == id)
     console.log("paramsdata",dataFromUseParam);
    return (
        <>
            <Header />
            <div id="cardInf">
                <p id ="id" style={{color:"aqua" }}>id: {dataFromUseParam[0].id}</p>
                <p id ="name">{dataFromUseParam[0].name}</p>
                <p>
                    {shown ? dataFromUseParam[0].info : `${dataFromUseParam[0].info.substring(0, 255)}`}
                    {shown ? <button style={{  borderRadius: "30px", color:"red"}} onClick={handelClick}>Read More</button > : <button  style={{  borderRadius: "30px", color:"green"}}  onClick={handelClick}>Read Less</button>}

                </p>
                <p> {dataFromUseParam[0].price} </p>
                <img id="image" src={dataFromUseParam[0].image} />
            </div>
            <Footer />
        </>
    )
}



