import React from "react";
import { Menu } from 'antd';

interface ObjectListProps {
	objects: any[],
	setObjects: Function
}

const HIGHLIGHT_COLOR: string = 'rgba(0, 0, 255, 0.5)';

export default function ObjectList({objects, setObjects}: ObjectListProps){

	function setRegionActive({key}: any){
		const object = objects[key];
		
		if (object && object.data) {
			object.data.regionStyle = {
				backgroundColor: HIGHLIGHT_COLOR
			};
		}

		setObjects([
			...objects.slice(0, key),
			object,
			...objects.slice(parseInt(key)+1, objects.length)
		]);
	}

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
				{objects.map(obj => {
					const key = obj.data.index;
					return <Menu.Item key={key} onClick={setRegionActive}>
							OBJECT {key+1}
						</Menu.Item>;
				})}
			</Menu.SubMenu>
		</Menu>
	);
}