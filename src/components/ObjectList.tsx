import React from "react";
import { Menu } from 'antd';
import objectAssign from 'object-assign';

interface ObjectListProps {
	objects: any[],
	setObjects: Function
}

export default function ObjectList({objects, setObjects}: ObjectListProps){

	function setRegionActive({key}: any){
		const object = objects[key];
		
		if (object && object.data) {
			object.data.regionStyle = {
				backgroundColor: 'rgba(0, 0, 255, 0.5)'
			};
		}

		setObjects([
			...objects.slice(0, key),
			objectAssign({}, object, {
				data: objectAssign({}, object.data)
			}),
			...objects.slice(key + 1)
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