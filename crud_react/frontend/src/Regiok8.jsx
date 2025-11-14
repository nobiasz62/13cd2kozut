import      React from 'react';
import { useState, useEffect } from 'react';    
import axios from 'axios';

const Regiok = () => {   
   
    
    const [regiok8, setRegiok8] = useState([]);
    useEffect(() => { 
        const fetchAllKozutak =(async () => { 
            const result = await axios.get('http://localhost:3001/regiok_8');
            setRegiok8(result.data);    
        }) 
        fetchAllKozutak();
        } , []);             

    return (    
        <div>
            <h1>Regiok</h1>
            <div className="regiok8">
                {regiok8.map((regio) => (
                    <div className='regiok8' key={regio.Rid}>
                        <h2 className="text-left color-primary">{regio.Rid}: {regio.regionev}</h2>
                        <h3>{regio.regio_tipusa}</h3>
                    </div>
                ))}  
                </div>         
        </div>                      
    )
}                                   



export default Regiok