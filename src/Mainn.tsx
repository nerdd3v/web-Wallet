import Blockchain from './components/Blockchain';
import Hero from './components/Hero'
import Nav from './components/Nav'

function Mainn() {
    const blockchains = ['solana', 'ethereum'];

    return (
        <div>
        <div className='h-screen w-screen'>
            
            <Nav/>
            <Hero/>
            <div className='flex space-x-10 pl-10 mt-10'>
            {blockchains.map((bc, key)=>{
                return(
                <div key={key} >
                    <Blockchain chain={bc}/>
                </div>
                )
            })}
            </div>
        </div>
        </div>
    )
}

export default Mainn
