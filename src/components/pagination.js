import { useEffect, useState } from "react"
import "../App.css";

const Pagi = () => {
    const [pro, setPro] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async() => {
        const req = await fetch('https://dummyjson.com/products');
        const res = await req.json();

        if(pro && res.products){
            setPro(res.products);
        }

    } 

    //console.log(pro);

    useEffect(() =>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    

   return(
    <div>
        {pro.length>0 && <div className="products">
            {
                pro.slice(page*5 - 5, page*5).map((e) =>{
                   return (<div className="items">
                    <img src={e.thumbnail} alt={e.title} key={e.id}></img>
                        <span>{e.title}</span>
                   </div>  
                   )
                })
            }
        </div>
        }
        {
            pro.length>0 && (
                <div className="pagination">
                    <span>⬅️</span>
                    {[...Array(pro.length/5)].map((_, i) => {
                        return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => setPage(i+1)}>{i+1}</span>
                    })}
                    <span>➡️</span>
                </div>
            )
        }
    </div>
   )
    
}

export default Pagi