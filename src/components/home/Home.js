import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import './Home.css';

export default function Home(props) {
    console.log('dataFromApp',props.arrayData);
    return (
        <>

            <Header />


            <Tours tour={props.arrayData} />




            <Footer />
        </>
    )
};