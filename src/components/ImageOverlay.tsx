import React, { useState } from "react";
import { Popconfirm, Button } from 'antd';
import { QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import ReactRegionSelect from 'react-region-select';
import logo from '../logo.svg';

export default function ImageOverlay(){
	const [regions, setRegions] = useState<any>([]);

	function	changeRegionData (index: number, event: any) {
		event.stopPropagation();
		/*
		// to manipulate background color for selected area
		const region = regions[index];
		let color;
		switch (event.target.value) {
			case '1':
				color = 'rgba(0, 255, 0, 0.5)';
				break;
			case '2':
				color = 'rgba(0, 0, 255, 0.5)';
				break;
			case '3':
				color = 'rgba(255, 0, 0, 0.5)';
				break;
			default:
				color = 'rgba(0, 0, 0, 0.5)';
		}

		if (region && region.data) {
			region.data.regionStyle = {
				background: color
			};
		}
		*/
		
		setRegions([
			...regions.slice(0, index),
			...regions.slice(index+1, regions.length-1),
		]);
	}

	function regionRenderer (regionProps: any) {
		if (!regionProps.isChanging) {
			return (
				<div style={{ position: 'absolute', right: 0, bottom: '-1.5em' }}>
					<Popconfirm title="Are you sure？"
						icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
						onConfirm={(event) => changeRegionData(regionProps.index, event)}>
						<Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
					</Popconfirm>
				</div>
			);
		}
	}

	return <>
		<ReactRegionSelect
			regions={regions}
			onChange={(reg: any) => setRegions(reg)}
			regionRenderer={regionRenderer}
			>
				<img src={logo} alt="Sampler" width='700px'/>
		</ReactRegionSelect>	
	</>;
}