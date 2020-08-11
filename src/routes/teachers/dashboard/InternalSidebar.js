import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, Switch, Layout, Breadcrumb } from "antd";
import '../home-style.css'

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Sidebar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	state = {
		collapsed: false,
	};

	onCollapse = collapsed => {
		console.log(collapsed);
		this.setState({ collapsed });
	};


	render() {




		return (

			<div className="leftSidebr">
				<div className="innersidbrs">
					<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
						<div className="logo" />
						<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
							<Menu.Item key="1" >
								<div className="tp-sideicn">
									<span className="tp-1">  <img alt="" src={require("assets/images/leftaro1.PNG")} /> </span>
									<span className="tp-2">  <img alt="" src={require("assets/images/togglebtn.PNG")} /> </span>
								</div>
							</Menu.Item>
							<Menu.Item key="2" >
								<div className="lfimgsec">
								<img alt="" src={require("assets/images/BG1.png")} />
									<h4 className="h-1">Plastic Arts</h4>
									<p className="h-2">Plastic Arts of the second semesters preparatory</p>
									<p className="h-3">By: Juan Perez</p>
								</div>
							</Menu.Item>
							<SubMenu key="sub1" title="User">
								<Menu.Item key="3">Tom</Menu.Item>
								<Menu.Item key="4">Bill</Menu.Item>
								<Menu.Item key="5">Alex</Menu.Item>
							</SubMenu>
							<SubMenu key="sub2" title="Team">
								<Menu.Item key="6">Team 1</Menu.Item>
								<Menu.Item key="8">Team 2</Menu.Item>
							</SubMenu>
							<Menu.Item key="9" />
						</Menu>
					</Sider>
				</div>
			</div>

		)
	}
}


