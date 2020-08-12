import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, Radio } from "antd";
import { DownOutlined } from '@ant-design/icons';
import '../home-style.css'
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import InternalSidebar from './InternalSidebar.js';
import {dashboardSidebar} from "appRedux/actions/Setting";
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
};
const { Option } = Select;

const menu6 = (
	<Menu className="menuicons4">
		<Menu.Item key="0">
			<a href="#">
				<div class="dropbtn9j">
					<p><img src={require('assets/images/checkbx.png')} />	Multiple </p>
				</div>
			</a>
		</Menu.Item>
		<Menu.Item key="1">
			<a href="#">
				<div class="dropbtn9j">
					<p><img src={require('assets/images/checkbx.png')} /> Only </p>
				</div>
			</a>
		</Menu.Item>
		<Menu.Item key="3">
			<a href="#">
				<div class="dropbtn9j">
					<p><img src={require('assets/images/checkbx.png')} />	Text </p>
				</div>
			</a>
		</Menu.Item>
		<Menu.Item key="4">
			<a href="#">
				<div class="dropbtn9j">
					<p><img src={require('assets/images/surface13.png')} />	Upload  </p>
				</div>
			</a>
		</Menu.Item>
	</Menu>
);
class Exam extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	componentDidMount(){
		this.props.dashboardSidebar(true );
	}
	
	render() {

		return (
		<div>
				<InternalSidebar />
				<div className={this.props.teachernavcollapsed?"rightside2sidebar":"rightside2"}>
			<div className="presentationPage1">
				<div className="createneHeding">
					<div className="ct-heding">
						<p><img src={require('assets/images/msg2.png')} />  Create new Exam</p>
					</div>
					<div className="ct-ptag">
						<img src={require('assets/images/tagE.png')} />
					</div>
				</div>
				<div className="cardtimedrw">
					<div className="middlcolm">
						<div className="caerdrow1">
							<span className="ex-paracard">
								<h4>Exam Title(*)</h4>
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
							</span>
							<span className="ex-paracard">
								<h4>Activity Details (*)</h4>
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
							</span>
						</div>
						<div className="caerdrow2">
							<Row gutter={[8, 16]}>
								<Col span={2} >
									<div className="ex-iconLeft">
										<img src={require('assets/images/dots1.png')} />
									</div>
								</Col>
								<Col span={22} >
									<span className="ex-paracard">

										<h4>Art is a science?</h4>
										<div className="radiobtn1d">
											<Form.Item name="radio-group">
												<Radio.Group>
													<Radio value="a"> - Yes </Radio>
												</Radio.Group>
											</Form.Item>
											<Form.Item name="radio-group">
												<Radio.Group>
													<Radio value="a"> - No </Radio>
												</Radio.Group>
											</Form.Item>
										</div>
									</span>
								</Col>
							</Row>
						</div>
						<div className="caerdrow2">
							<Row gutter={[8, 16]}>
								<Col span={2} >
									<div className="ex-iconLeft">
										<img src={require('assets/images/dots1.png')} />
									</div>
								</Col>
								<Col span={22} >
									<span className="ex-paracard1">

										<h4>Since what time did art begin?</h4>
										<div className="radiobtn1d">
											<Form.Item name="checkbox-group" wrapperCol={{ sm: 24 }}

												style={{ width: "100%" }}>
												<Checkbox.Group wrapperCol={{ sm: 24 }}

													style={{ width: "100%" }}>
													<Row>
														<Col span={24}>
															<Checkbox value="A" style={{ lineHeight: '32px' }} wrapperCol={{ sm: 24 }}

																style={{ width: "100%" }}>
																From contemporary times
              												</Checkbox>
														</Col>
														<Col span={24}>
															<Checkbox value="b" style={{ lineHeight: '32px' }} wrapperCol={{ sm: 24 }}

																style={{ width: "100%" }}>
																From the 12th century
              												</Checkbox>
														</Col>
														<Col span={24}>
															<Checkbox value="c" style={{ lineHeight: '32px' }} wrapperCol={{ sm: 24 }}

																style={{ width: "100%" }}>
																Since ever
              												</Checkbox>
														</Col>
													</Row>
												</Checkbox.Group>
											</Form.Item>

										</div>
									</span>
								</Col>
							</Row>
						</div>
						<div className="caerdrow2">
							<Row gutter={[8, 16]}>
								<Col span={2} >
									<div className="ex-iconLeft">
										<img src={require('assets/images/dots1.png')} />
									</div>
								</Col>
								<Col span={22} >
									<span className="ex-paracard1">

										<h4 className="ex-heading">What is the art?</h4>
										<p className="ex-para1">Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
										<div className="line-btm">
										</div>
									</span>
								</Col>
							</Row>
						</div>
						<div className="caerdrow2">
							<Row gutter={[8, 16]}>
								<Col span={2} >
									<div className="ex-iconLeft">
										<img src={require('assets/images/dots1.png')} />
									</div>
								</Col>
								<Col span={19} >
									<span className="ex-paracard1">
										<div className="disHg">
											<div className="exm-hdig">
												<h3>What does art originate?</h3>
											</div>
											<div className="wxm-dropg">
												<Dropdown overlay={menu6} trigger={['click']}>
													<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
														<div class="dropbtn9j">
															<p><img src={require('assets/images/checkbx.png')} />	Multiple</p>   <img src={require('assets/images/downarw.png')} />
														</div>
													</a>
												</Dropdown>
											</div>
										</div>
										<div className="checksyf">
											<div className="radiobtn1d">
												<Form.Item name="checkbox-group" wrapperCol={{ sm: 24 }}

													style={{ width: "100%" }}>
													<Checkbox.Group wrapperCol={{ sm: 24 }}

														style={{ width: "100%" }}>
														<Row>
															<Col span={24}>
																<Checkbox value="A" style={{ lineHeight: '32px' }} wrapperCol={{ sm: 24 }}

																	style={{ width: "100%" }}>
																	In mesopotamia
              												</Checkbox>
															</Col>
															<Col span={24}>
																<Checkbox value="b" style={{ lineHeight: '32px' }} wrapperCol={{ sm: 24 }}

																	style={{ width: "100%" }}>
																	<Input className="addicmng" /> Add
              												</Checkbox>
															</Col>

														</Row>
													</Checkbox.Group>
												</Form.Item>

											</div>
										</div>
									</span>
									<div className="line-btm">
									</div>
									<div className="exm-btmd">
										<div className="exm-btmOne">
											<img src={require('assets/images/key1.png')} />
											<p><a href="#">Answer Key</a></p>
										</div>
										<div className="exm-btmTwo">
											<img src={require('assets/images/plusdbl.png')} />
											<img src={require('assets/images/bin1.png')} />
										</div>
									</div>
									<div className="btnBtom">
										<div className="textbtnlj72">
											<a href="#" className="tchaddbtn1"><img src={require('assets/images/cross1.PNG')} />  Cancel </a>
											<a href="#" className="tchaddbtn0"> <img src={require('assets/images/surface14.png')} /> Finalize </a>
										</div>
									</div>
								</Col>
								<Col span={3} >
									<div className="ex-iconLeft">
										<img src={require('assets/images/plusicon.PNG')} />
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</div>
				</div>
			</div>
		)
	}
}




function mapStateToProps ( state ) {
  const { navStyle, themeType, locale, pathname,teachernavcollapsed } = state.settings;
  return { navStyle, themeType, locale, pathname, teachernavcollapsed }
};
function mapDispatchToProps(dispatch) {
     return bindActionCreators({dashboardSidebar: dashboardSidebar}, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(Exam);