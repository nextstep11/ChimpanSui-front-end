import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { openNotification } from "../utils/constants";
import { useProgram } from "../utils/useProgram";

export default function MintPage(){
    const { mint } = useProgram()
    const [isMinting, setIsMinting] = useState(false)
    return <div className="dashboard">
        {
            isMinting ?
                <Button className="btn-mint" variant="contained" color="success"><CircularProgress disableShrink color="inherit" /></Button>
            :
                <Button className="btn-mint" variant="contained" color="success" onClick={async()=>{
                    setIsMinting(true)
                    try{
                        await mint()
                        openNotification('success', 'Lock Success!')
                    }catch(err: any){
                        openNotification('error', err.message)
                    }
                    setIsMinting(false)
                }}>MINT</Button>
        }
    </div>
}