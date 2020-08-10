import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, Switch } from "antd";
import '../home-style.css'

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

const onFinish = values => {
	console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
	console.log('Failed:', errorInfo);
};


export default class Group extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}



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
		  const menu3 = (
			<Menu>
			  <Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="#">
				  Presentation
				</a>
			  </Menu.Item>
			  <Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="#">
				  Activity
				</a>
			  </Menu.Item>
			  <Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="#">
				  Exam
				</a>
			  </Menu.Item>
			</Menu>
			
		  );



		return (
			<div className="home2tech">
			<Row gutter={[8, 16]}>
			  <Col span={18} >
				  <div className="wrtPosttec">
					  <div className="wrtPosttec2">
						  <div className="techHomepricl">
							  <div className="pricilMain">
								  <div className="pricileft2">
									  <div className="priciProfl">
										  <img src={require('assets/images/group1d.png')} />
									  </div>
									  <div className="priciName1">
										  <h4>Grupo los ACOPLADOS</h4>
										  <span className="blueTechbtn">ACEPTADO</span>
									  </div>
								  </div>	
								  <div className="pricirgt2 crn1">
								  <a href="#" className="priciarrrow"> <img src={require('assets/images/crownicon1.png')} /></a>
									   <span>3</span>

								  </div>
							  </div>

							  
						  </div>
						  
					  </div>
					  <div className="thirdpart3">
								  <div className="pricilMain">
									  <div className="pricileft2">
										  <div className="priciProfl">
											  <img src={require('assets/images/avatar7-sm.png')} />
										  </div>
										  <div className="priciName1">
											  <h4>Pricila Talia Vergara</h4>
											  <p className="priciTime1">10 minutes ago</p>
										  </div>
									  </div>	
									  <div className="pricirgt2">
										   <span>&#8942;</span>
									  </div>
								  </div>
							  
							  <div class="secondParativ"><h4>Second part activity</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p></div>
							  <div className="liksIcons3">
								  <p className="like2"><img src={require('assets/images/surface16.png')} /> <span>5</span></p>
								  <p className="like3"><img src={require('assets/images/msg.png')} /> <span>5</span></p>
							  </div>
						  <div className="hmeFooter2">
								<Form
									  {...layout}
									  name="basic"
									  initialValues={{
										remember: true,
									  }}

									  className="form0te" 
									  onFinish={()=>this.onFinish()}
									  onFinishFailed={()=>this.onFinishFailed()}
									>
									  <Form.Item  wrapperCol={{ sm: 24 }}

										style={{ width: "100%" }}
									  className="form0te"
										name="username"
									   
										rules={[
										  {
											required: true,
											message: 'Please input your username!',
										  },
										]}
									  >
										<Input />
									   
									  </Form.Item>

									 </Form>
									 <div className="txtareabtnPart">
								  <div className="textbtnleft2">
									  <a href="#" className="tchaddbtn0"> <img src={require('assets/images/cmra.png')} /> </a>
									  <a href="#" className="tchaddbtn0"> <img src={require('assets/images/surface13.png')} /> </a>
								  </div>
								  <div className="textRgt2">	
									  <a href="#" className="tchpostbtn0">Comment</a>
								  </div>	
							  </div>
						  </div>
					</div>
				  </div>
			  </Col>
			  <Col span={6} >
				  <div className="publictinsrgt">
					  
				  </div>
			  </Col>
			</Row>  
		</div>
		)
	}
}


