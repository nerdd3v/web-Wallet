// import { derivePath } from 'ed25519-hd-key'
// import { Buffer } from "buffer";
// import bs58 from 'bs58'
// import {Keypair} from '@solana/web3.js'
import { HDNodeWallet } from 'ethers';

export const walletLogic = (seed: Uint8Array, chain: string)=>{

    // if(chain == 'solana'){
    //     const path = `m/44'/501'/0'/0'`;
    //     const key = derivePath(path, Buffer.from(seed).toString('hex')).key;
    //     const keypair = Keypair.fromSeed(key);

    //     return {
    //         publicKey : keypair.publicKey.toBase58(),
    //         privateKey : bs58.encode(keypair.secretKey)
    //     }
    // }
    if(chain === 'ethereum'){
        const root = HDNodeWallet.fromSeed(seed);
        const wallet = root.derivePath(`m/44'/60'/0'/0/0`)

        return({
            address: wallet.address,
            privateKey : wallet.privateKey,
            publicKey : wallet.publicKey
        })
    }
}