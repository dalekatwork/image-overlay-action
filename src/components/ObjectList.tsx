import React from "react";
import { Menu } from 'antd';

export default function ObjectList({objects}: {objects: any[]}){
	return (
		<Menu
			mode="inline"
			theme="dark"
			openKeys={['sub1']}
		>
			<Menu.SubMenu
				key="sub1"
				title={`OBJECTS [${objects.length}]`}
			>
				{objects.map(obj => <Menu.Item key={obj.data.index}>Object {obj.data.index+1}</Menu.Item>)}
			</Menu.SubMenu>
		</Menu>
	);
}