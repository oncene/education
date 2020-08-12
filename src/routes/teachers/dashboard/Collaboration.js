import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';
import InternalSidebar from './InternalSidebar.js';
import '../home-style.css';

export default class Collaboration extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = e => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	onFinish = values => {
		console.log('Success:', values);
	};

	onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};



	render() {

		const menu = (
			<Menu>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="#">
						1st menu item
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="#">
						2nd menu item
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="#">
						3rd menu item
					</a>
				</Menu.Item>
			</Menu>

		);
		const menu2 = (
			<Menu>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="#">
						Google Drive
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="#">
						Enlace
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="#">
						Archive
					</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="#">
						YouTube
					</a>
				</Menu.Item>
			</Menu>

		);

		return (
			<div>
				<InternalSidebar />
				<div className="rightside2">
					<div className="home2tech">
						<Row gutter={[8, 16]}>
							<Col span={18} >
								<div className="wrtPosttec">
									<div className="techHomepricl">
										<div className="pricilMain">
											<div className="pricileft2">
												<div className="priciProfl">
													<img src={require('assets/images/avatar7-sm.png')} />
												</div>
												<div className="priciName1">
													<h4>Pricila Talia Vergara</h4>
													<p className="priciTime1">10 minutes ago</p>
													<span className="perTechbtn">COMPUTER TEACHER</span>
												</div>
											</div>
											<div className="pricirgt2">

												<Dropdown overlay={menu} placement="bottomRight">
													<span>&#8942;</span>
												</Dropdown>
											</div>
										</div>
										<div className="secondParativ">
											<h4>Second part activity</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
										</div>
										<div className="busin1d">
											<a href="#">
												<div className="buzleft1">
													<img src={require('assets/images/BMC.png')} />
												</div>
												<div className="buzrgt">
													<p>Business Model Canvas files...</p>
													<span>Hojas de Calculo de Google</span>
												</div>
											</a>
										</div>
										<div className="liksIcons3">
											<p className="like2"><img src={require('assets/images/surface16.png')} /> <span>5</span></p>
											<p className="like3"><img src={require('assets/images/msg.png')} /> <span>5</span></p>
										</div>
										<div className="jabmbox0">
											<div className="pricileft2">
												<div className="priciProfl">
													<img src={require('assets/images/avatar7-sm.png')} />
												</div>
												<div className="priciName1">
													<h4>Janice Willis</h4>
													<p className="priciTime1">Hace 5 minutos</p>
												</div>
												<div className="secondParativ">
													<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
												</div>
												<div className="liksIcons3">
													<p className="like2"><img src={require('assets/images/surface16.png')} /> <span>5</span></p>
													<p className="like3"> <span>&#8942;</span></p>
												</div>
											</div>

										</div>
									</div>
								</div>
							</Col>
							<Col span={6} >
								<div className="publictinsrgt">
									<div className="lftSidebrgruop">
										<div className="gropBtn">
											<Button onClick={this.showModal}><img src={require('assets/images/plusgroup.png')} /> NEW GROUP</Button>
											
											<Modal
												title="   Invite new collaborator"
												visible={this.state.visible}
												onOk={this.handleOk}
												onCancel={this.handleCancel}
												footer={null}
											>
												<div className="moglCollbtion">
												<Form
													name="basic"
													initialValues={{ remember: true }}
													onFinish={this.onFinish}
													onFinishFailed={this.onFinishFailed}
												>
													<label className="lbl3">Contributor Email (*) </label>
													<Form.Item
														name="username"
														className="frmcollbortin"
														rules={[{ required: true, message: 'Please input your username!' }]}
														wrapperCol={{ sm: 24 }}
								style={{ width: "100%" }}
													>
														<Input className="frmcollbortin" />
													</Form.Item>

													<Form.Item>
														<div className="btnCollbortin">
														<Button type="primary" htmlType="submit">
														<img src={require('assets/images/plusgroup.png')} /> Invite
        												</Button>
														</div>
													</Form.Item>
												</Form>
												</div>
											</Modal>
											
										</div>
										<div className="line-btm0">
										</div>
										<div className="sidegrp1">
											<h4 className="ex-heading">Collaborators</h4>
										</div>
										<div className="gpsleft2">
											<div className="gp-Img">
												<img src={require('assets/images/avatar50-sm1.png')} />
											</div>
											<div className="gp-paras">
												<h4 className="gphging1">Yerson Virreira</h4>
												<p className="gp_para2">The Arts with Computing</p>
											</div>
										</div>
								
						
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		)
	}
}


