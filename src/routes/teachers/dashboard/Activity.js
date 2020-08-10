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


export default class Activity extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}



	render() {


		const menu4 = (
			<Menu>
				<Menu.Item key="0">
					<a href="http://www.alipay.com/">1st menu item</a>
				</Menu.Item>
				<Menu.Item key="1">
					<a href="http://www.taobao.com/">2nd menu item</a>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="3">3rd menu item</Menu.Item>
			</Menu>
		);

		return (
			<div className="presentationPage1">
				<div className="createneHeding">
					<div className="ct-heding">
						<p><img src={require('assets/images/msg2.png')} /> Create new Activity</p>
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
							<label className="lbl2">Activity Title (*)</label>
							<Form.Item wrapperCol={{ sm: 24 }}

								style={{ width: "100%" }}
								name="username"
								rules={[{ required: true, message: 'Please input your username!' }]}
							>
								<Input />
							</Form.Item>
							<label className="lbl2">Activity Details (*) </label>
							<Form.Item name={['user', 'introduction']} wrapperCol={{ sm: 24 }}

								style={{ width: "100%" }} >
								<Input.TextArea />
							</Form.Item>

							<Form.Item label="Deliverable files" className="toggle0btn" >
								<Switch />
							</Form.Item>

							<Form.Item label="Enable comment" className="toggle0btn" >
								<Switch />
							</Form.Item>

							<div className="blackqiz">
								<div className="blkq1">
									<img src={require('assets/images/Capture1.png')} />
								</div>
								<div className="quizpara">
									<h3>Black Quiz</h3>
									<p>Formularious de Google</p>
								</div>
								<div className="crosssign7">
									<span>X</span>
								</div>
							</div>
							<div className="blackqiz">
								<div className="blkq1">
									<img src={require('assets/images/Capture2.png')} />
								</div>
								<div className="quizpara">


									<Dropdown overlay={menu4} trigger={['click']}>
										<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
											Click me
    </a>
									</Dropdown>
								</div>
								<div className="crosssign7">
									<span>X</span>
								</div>
							</div>
							<div className="btn3d4">

								<div className="textRgt6">
									<a href="#" className="tchpostbtn0"><img src={require('assets/images/surface13.png')} /> Add  </a>
								</div>

								<div className="textbtnlj72">
									<a href="#" className="tchaddbtn1"><img src={require('assets/images/cross1.PNG')} />  Cancel </a>
									<a href="#" className="tchaddbtn0"> <img src={require('assets/images/surface14.png')} /> Finalize </a>
								</div>


							</div>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}


