import {Box, AppBar, Toolbar, Typography} from '@mui/material'
import {ConnectButton} from '@suiet/wallet-kit'
import LogoIMG from '../assets/images/logo.png'
import { useEffect, useState } from 'react'

export default function Header(){
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    useEffect(()=>{
        function handleWindowResize(){
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleWindowResize)
        return ()=>{
            window.removeEventListener('resize',handleWindowResize)
        }
    },[])

    return <Box sx={{display: 'flex'}}>
        <AppBar component="nav" sx={{background: "linear-gradient(90deg, rgb(26, 42, 62) 0%, rgb(11, 20, 30) 100%)", zIndex: 10000}}>
            <Toolbar>
                <Typography variant='h4' component="div" sx={{flexGrow: 1, display: "flex", alignItems: "center", fontWeight: "bold", lineHeight: "44px", fontFamily: "IndustryBold", cursor: "pointer !important", textShadow: "1px 1px 2px black, 0 0 15px blue, 0 0 5px darkblue;"}} onClick={()=>{window.location.href="https://sollama.com"}}>
                    {windowSize>580 ? "CHIMPANSUI" : ""}
                </Typography>
                <Box sx={{display: "block"}}>
                    <ConnectButton>Connect Wallet</ConnectButton>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
}