import GenerateWallet from "./GenerateWallet";
import Nav from "./Nav"

//@ts-ignore
function Chain({chain}: {chain:string}) {
    const chains = ['solana', 'ethereum'];

  return (
    <div className='h-screen w-screen '>
        <Nav />
        <div className="flex space-x-7 pl-10">
            {chains.map((c, key)=>{
                return(
                    
                        <div key={key}>
                            <h1 style={{
                                textDecoration : chain==c ? 'underline ': 'none'
                            }} className="text-white font-mono mb-5">{c}</h1>
                        </div>
                    
                )
            })}
        </div>
        <h1 className='text-white font-mono pl-10'>creating wallet on {chain}</h1>

        <GenerateWallet chain={chain}/>
    </div>
  )
}
export default Chain
