import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import one from '../../../assets/1.png';
import two from '../../../assets/2.png';
import three from '../../../assets/3.png';
const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json').then(res=>res.json()).then(data=>{
            setCategories(data);
        })
    },[])
    return (
        <div className="space-y-5">
            <h2 className="text-2xl">All Caterogy</h2>
            {
                categories.map(categorie=> <Link
                className="block ml-4 text-xl font-semibold"
                     key={categorie.id}
                     to={`/categorie/${categorie.id}`}
                     >{categorie.name}</Link>)
            }
            <div className="mb-4">
                <img className="rounded-md py-2" src={one} alt="" />
                <h4 className="text-lg font-semibold not-italic">Bayern Slams Authorities <br /> Over Flight Delay to Club <br />World Cup</h4>
            </div>
            <div className="mb-4">
                <img className="rounded-md py-2" src={two} alt="" />
                <h4 className="text-lg font-semibold not-italic">Bayern Slams Authorities <br /> Over Flight Delay to Club <br />World Cup</h4>
            </div>
            <div className="mb-4">
                <img className="rounded-md py-2" src={three} alt="" />
                <h4 className="text-lg font-semibold not-italic
">Bayern Slams Authorities <br /> Over Flight Delay to Club <br />World Cup</h4>
            </div>
        </div>
    );
};

export default LeftSideNav;