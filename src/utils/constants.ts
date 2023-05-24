import {notification} from 'antd'

export const InfoMint = {
    contract: '0x46672e3dc089ba2bfbb8314c837d08ff0b5a7caae5bdac0c1d09ad9ed54eded7',
    launchpad: '0x65f68fe9cf846cd5ef48abd5b91ccde13d47b3879e1c40fc62aaaf141d306cd3',
    launchpadCap: '0x36e1d44e55666c9b975cc897531712b34bd8f746b6b762d741eb981a03f559b7',
    feeAmount: 100000000,
}

export const openNotification = (type : 'success' | 'error' | 'info' | 'warning', title : string, description? : string) => {
    notification[type]({
        message : title, description : description, placement : 'topLeft'
    })
}

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}