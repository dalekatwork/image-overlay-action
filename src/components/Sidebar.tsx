import React from "react";
import { Menu } from 'antd';
import { SelectOutlined } from '@ant-design/icons';

export default function Sidebar(){
	return (
		<div>
			<Menu
				mode="inline"
				theme="dark"
				inlineCollapsed
			>
				<Menu.Item key="1">
					<SelectOutlined />
				</Menu.Item>
			</Menu>
		</div>
	)
}