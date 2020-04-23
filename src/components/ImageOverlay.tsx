import React, { useState } from "react";
import { Popconfirm, Button, Layout } from 'antd';
import { QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import ReactRegionSelect from 'react-region-select';

import logo from '../logo1.jpg';
import SideBar from './Sidebar';
import ObjectList from './ObjectList';

export default function ImageOverlay(){
	const [drawBox, setDrawBox] = useState<boolean>(false);
	const [regions, setRegions] = useState<any>([]);

	function changeRegionData (index: number) {
		setRegions([
			...regions.slice(0, index),
			...regions.slice(index+1, regions.length-1),
		]);
	}

	function regionRenderer (regionProps: any) {
		if (!regionProps.isChanging) {
			return (
				<div style={{ position: 'absolute', right: 0, bottom: '-1.5em' }}>
					<Popconfirm title="Are you sure you want to delete this object?"
						icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
						onConfirm={() => changeRegionData(regionProps.index)}>
						<Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
					</Popconfirm>
				</div>
			);
		}
	}

	return <Layout style={{height: '100%'}}>
		<Layout.Sider collapsed>
			<SideBar drawBox={drawBox} setDrawBox={setDrawBox}/>
		</Layout.Sider>
		<Layout.Content>
			{drawBox ?
				<ReactRegionSelect
					regions={regions}
					onChange={(reg: any) => setRegions(reg)}
					regionRenderer={regionRenderer}
					constraint={false}>
					<img src={logo} alt="Sampler" width='1200px'/>
				</ReactRegionSelect> :
				<img src={logo} alt="Sampler" width='1200px'/>}
		</Layout.Content>
		<Layout.Sider>
			<ObjectList objects={regions} setObjects={setRegions}/>
		</Layout.Sider>
	</Layout>;
}