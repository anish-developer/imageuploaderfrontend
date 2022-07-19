import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const {_id} = useParams()
    // const [showPdf, setShowPdf] = useState([]);
    // useEffect(()=>{
    //     const getData =async ()=>{
    //         const data = await axios.get(`http://localhost:5000/get/${_id}`)
    //         console.log(data)
    //         setShowPdf(data)
    //     }
    //     getData()
    // },[])
   const data = () =>{
       axios({
           url: `http://localhost:5000/get/${_id}`,
           method: 'GET',
           responseType: 'blob', // important
         }).then((response) => {
           const url = window.URL.createObjectURL(new Blob([response.data]));
           const link = document.createElement('a');
           link.href = url;
           link.setAttribute('download', `${_id}.pdf`);
           document.body.appendChild(link);
           link.click();
         });
   }
  return (
    <div>
        {/* <iframe src={showPdf} width="800px" height="2100px" /> */}
        {/* <object data={showPdf} 
        type='application/pdf' 
        width='100%' 
        height='700px'></object> */}
        <button onClick={()=>data()}>Download</button>
    </div>
  )
}

export default Edit