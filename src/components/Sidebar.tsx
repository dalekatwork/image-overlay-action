import React from "react";
import { WalletFilled } from '@ant-design/icons';

interface DrawBox {
	drawBox: boolean,
	setDrawBox: Function,
}

export default function Sidebar({ drawBox, setDrawBox }: DrawBox){
	return (
		<WalletFilled 
			onClick={()=> setDrawBox(!drawBox)}
			style={{
				color: drawBox?'lightgreen': 'white',
				margin: '16px auto',
				width: '100%',
				fontSize: '20px',
			}}/>
	);
}