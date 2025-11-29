import { useEffect, useState } from "react";
import { wordlist } from '@scure/bip39/wordlists/english.js';
import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from "@scure/bip39";
import { useNavigate } from "react-router-dom";


function GenerateWallet({chain}: {chain:string}) {
  const [mnemonic, setMnemonic] = useState("");
  const [mnemonicValid, setMnemonicValid] = useState<boolean | null>(null);
  const [url, setUrl] = useState('');

  const seedHandler = (e: string) => {
    const replaced = '*'.repeat(e.length)
    setUrl(replaced)
    setMnemonic(e);
  };

  const navigate = useNavigate();

  const verify = () => {
    let finalMnemonic = mnemonic;
    if(!mnemonic){
      finalMnemonic = generateMnemonic(wordlist);
      setMnemonic(finalMnemonic);
    }

    const isValid = validateMnemonic(finalMnemonic, wordlist);
    setMnemonicValid(isValid)
  }

  useEffect(()=>{
    if(mnemonicValid){
      const seed =  mnemonicToSeedSync(mnemonic);
      console.log("seed:  ",seed)
      navigate('/wallet', { state:{mnemonic, seed, chain} },  )
    } 

  }, [mnemonicValid, navigate])


  return (
    <div className="space-x-10 p-10">
      <br />
      <br />
      <input
        onChange={(e) => seedHandler(e.target.value)}
        className="bg-transparent pl-5 border-white outline-none border-2 rounded-lg w-4/5 text-green-500 h-10 font-mono placeholder-green-300"
        type="text"
        placeholder="Enter your seed phrase (Leave empty to generate a new wallet)"
        value={url}
      />
      <button
        onClick={verify}
        className="text-green-300 border-white font-mono border-2 rounded-lg w-40 h-10 ml-5"
      >
        Generate Wallet
      </button>

      
    </div>
  );
}

export default GenerateWallet;
