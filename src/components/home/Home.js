import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import'./Home.css';

export default function Home(props) {
console.log(props.arrayData);
    return (
        <>

            <Header />
            {
                props.arrayData.map(object=>{

                    return(
                        <Tours key={object.name} tour={object}  />
                    )
                })
               
            }
            
            <Footer />
        </>
    )
};