import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


//@ts-ignore
function Blockchain({chain}) {

    const navigate = useNavigate();

    //@ts-ignore
    const [clicked, setClicked] = useState(false);
    const [chan, setChan] = useState('');


    const renderHandler = (chain: string)=>{
        setClicked(true);
        setChan(chain);
    }

    useEffect(()=>{
      if(chan !== ''){
        navigate(`/${chan}`)
      }
    },[chan, navigate])
  

    

  return (
    <div >
      <button onClick={()=> renderHandler(chain)} className='text-white border-2 border-white rounded-lg  h-8 w-40'>{chain}</button>
    </div>
  )
}

export default Blockchain
