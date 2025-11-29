import { useLocation } from "react-router-dom"
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { walletLogic } from "./walletLogic";

function WalletSpae() {

    const location = useLocation();
    const mnemonic:string = location.state?.mnemonic;
    const chain:string = location.state?.chain;
    const seed:Uint8Array = location.state?.seed;

    const menmoicArray = mnemonic.split(' ')

    const [walletInfo, setWalletInfo] = useState<any>();

    console.log(mnemonic, chain, seed)
    
    
    const copyhandler = ()=>{
        if(navigator.clipboard){
            navigator.clipboard.writeText(mnemonic).then(()=>{
                alert('mnemonic copied successfully')
            }).catch(e=>{
                alert(`failed to catch the error ${e}`)
            })
        }else{
            alert('clipboard functionality not supported by the browser')
        }
    }

        useEffect(() => {
        if (seed && chain && mnemonic) {
            const data = walletLogic(seed, chain);
            setWalletInfo(data);
            console.log(walletInfo)
        }
        }, [seed, chain, mnemonic]);


  return (
    <div >
        <div className="pl-4">

        <Nav />
        </div>

       <div className="flex flex-col justify-center items-center space-y-4">
            <div className="border border-opacity-50 w-11/12 border-gray-400 rounded-xl p-4">
                <h1 className="text-green-400 font-mono text-3xl font-bold mb-4">Your Secret Phrase</h1>
                    {Array.from({ length: 3 }).map((_, rowIndex) => {
                    const chunk = menmoicArray.slice(rowIndex * 4, rowIndex * 4 + 4);
                    return (
                        <div key={rowIndex} className="flex space-x-6 mb-2">
                        {chunk.map((word, wordIndex) => (
                            <div key={wordIndex} className="bg-slate-300 bg-opacity-30 px-2 rounded w-1/4 h-10 ">
                                <h1 className="text-green-400 pt-2 font-mono">{word}</h1>
                            </div>
                        ))}
                        </div>
                    );
                    })}

                    <p className="text-white text-opacity-40" onClick={copyhandler}>click here to copy</p>
            </div>
        </div>

        <br />

        <div className="pl-16">
            <h1 className="text-white font-mono text-3xl">{chain} wallet</h1>
        </div>

        <div className="text-white">
        
        <div className="text-white">
            {JSON.stringify(walletInfo)}
        </div>

        </div>
    </div>
  )
}

export default WalletSpae
