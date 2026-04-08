import React,{useState,useEffect} from "react";
import ShowcaseItemTable from "./Veiws/ShowcaseTableVeiw";
import axios from "axios";



export default function AllShowcaseItems(){
    
 const[ShowcaseProducts,setShowcaseProducts]=useState([]);

    useEffect(()=>{

   
      
    
        function getShowCaseProducts(){
            axios.get("https://quanlytrangsuc-1.onrender.com/showCitem/fetchAll").then((res)=>{
    
                setShowcaseProducts(res.data);
  
              
            }).catch((err)=>{
    
                alert(err);
            })
    
    
        }
    
        getShowCaseProducts();
        
    
    
    },[])

    console.log(ShowcaseProducts);
return(

    <div>
     <ShowcaseItemTable products={ShowcaseProducts}/>
    </div>
)

}