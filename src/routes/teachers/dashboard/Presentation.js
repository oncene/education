import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, Switch, Progress } from "antd";


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

export default class Presentation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}





	render() {


		return (
			<div className="presentationPage1">
				<div className="createneHeding">
					<div className="ct-heding">
						<p><img src={require('assets/images/msg2.png')} />  Create new Presentation</p>
					</div>
					<div className="ct-ptag">
						<img src={require('assets/images/tagp.png')} />
					</div>
				</div>
				<div className="prefrmkij">
					<div className="innerprestin">

						<Form
							{...layout}
							name="basic"
							initialValues={{ remember: true }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							className="offline1"
						>
							<label className="lbl2">presentation (*) </label>
							<Form.Item wrapperCol={{ sm: 24 }}

								style={{ width: "100%" }}
								name="username"
								rules={[{ required: true, message: 'Please input your username!' }]}
							>
								<Input />
							</Form.Item>
							<label className="lbl2">Description (*) </label>
							<Form.Item name={['user', 'introduction']} wrapperCol={{ sm: 24 }}

								style={{ width: "100%" }} >
								<Input.TextArea />
							</Form.Item>

							<Form.Item label="Enable comment" className="toggle0btn"  >
								<Switch />
							</Form.Item>

							<Form.Item {...tailLayout} className="btnCnlnt" wrapperCol={{ sm: 24 }}

								style={{ width: "100%" }} >
								<Button type="primary" htmlType="Cancel">
									Cancel
        						</Button>
								<Button type="primary" htmlType="Next" className="nectbtn0">
									Next
        						</Button>
							</Form.Item>

						</Form>
					</div>
				</div>
				<div className="sliderpt1next">
					<Row gutter={[8, 16]}>
						<Col span={5} >
							<div className="slider01g">
								<div className="priuxdd">
									<div className="pros3">
										<Progress percent={50} showInfo={false} />
									</div>
									<div className="textbar3">
										<p>Progress</p>
										<span>5/12</span>
									</div>
								</div>		
								<div className="playbtn9m">
									<button>Play</button>
								</div>		
							</div>
						</Col>
						<Col span={19} >
							<div className="slider02g">
								<Input.TextArea />
							</div>
						</Col>
						<Col span={24}>
							<div className="fclbtnlast">
							<div className="btn3d4">	
						
						<div className="textRgt6">	
									 
								  </div>	
							
						<div className="textbtnlj72">
									  <a href="#" className="tchaddbtn1"><img src={require('assets/images/surface13.png')} />  Cancel </a>
									  <a href="#" className="tchaddbtn0"> <img src={require('assets/images/surface14.png')} /> Finalize </a>
								  </div>
								  
								
					</div>
							</div>	
						</Col>		
					</Row>
				</div>
			</div>

		)
	}
}


