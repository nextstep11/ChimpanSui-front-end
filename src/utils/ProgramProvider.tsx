import {FC, useCallback, ReactNode,} from 'react'
import { ProgramContext } from './useProgram'
import { useWallet, useSuiProvider, } from '@suiet/wallet-kit'
import { TransactionBlock } from '@mysten/sui.js'
import { InfoMint } from './constants'

export interface ProgramProviderProps{
    children : ReactNode
}

export const ProgramProvider: FC<ProgramProviderProps> = ({children}) => {
    const wallet = useWallet()
    const provider = useSuiProvider(wallet.chain?.rpcUrl!)

    const mint = useCallback(async ()=>{
        let coins = (await provider.getCoins({
            owner: wallet.address!,
            coinType: "0x2::sui::SUI"
        })).data
        if(coins.length===0) throw new Error("No token");
        let total=0;
        for(let item of coins) total+=Number(item.balance)
        const tx = new TransactionBlock()
        if(coins.length>1){
            tx.mergeCoins(tx.gas, coins.slice(1,coins.length).map(item=>{return tx.object(item.coinObjectId)}))
        }
        tx.moveCall({
            target: `${InfoMint.contract}::nft_contract::mint`,
            arguments:[
                tx.object(InfoMint.launchpad),
                tx.gas,
            ]
        })
        await wallet.signAndExecuteTransactionBlock({transactionBlock: tx})
    }, [wallet])

    return <ProgramContext.Provider value={{
        mint
    }}>{children}</ProgramContext.Provider>
}