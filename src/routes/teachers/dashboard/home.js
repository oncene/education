import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import InternalSidebar from './InternalSidebar.js';
import {dashboardSidebar} from "appRedux/actions/Setting";
import '../home-style.css';

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

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			ModalText: 'Content of the modal',
			visible: false,
			confirmLoading: false,
		};
	}

	componentDidMount(){
		this.props.dashboardSidebar(false );
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


		const { visible, confirmLoading, ModalText } = this.state;
		return (
			<div>
				<InternalSidebar />
				<div className={this.props.teachernavcollapsed?"rightside2sidebar":"rightside2"}>
					<div className="home2tech">
						<Row gutter={[8, 16]}>
							<Col span={18} >
								<div className="wrtPosttec">
									<div className="wrtPosttec1">
										<div className="wrboz">
											<div className="textase2">
												<textarea id="txtarea" name="w3review" rows="4" cols="50" placeholder="Write to Post...">
												</textarea>
											</div>
											<div className="txtareabtnPart">
												<div className="textbtnleft2">
													<Dropdown overlay={menu2} trigger={['click']}>

														<a href="#" className="tchaddbtn0 ant-dropdown-link" onClick={e => e.preventDefault()}> <img src={require('assets/images/surface13.png')} /> Add</a>
													</Dropdown>
													<Dropdown overlay={menu3} trigger={['click']}>

														<a href="#" className="tchaddbtn0 ant-dropdown-link" onClick={e => e.preventDefault()}> <img src={require('assets/images/surface13.png')} />  Exercise</a>
													</Dropdown>

												</div>
												<div className="textRgt2">
													<a href="#" className="tchpostbtn0"> <img src={require('assets/images/surface14.png')} /> To post</a>
												</div>
											</div>
										</div>
										<div className="techHomepricl">
											<div className="pricilMain">
												<div className="pricileft2">
													<div className="priciProfl">
														<img src={require('assets/images/avatar7-sm.png')} />
													</div>
													<div className="priciName1">
														<h4>Pricila Talia Vergara</h4>
														<p className="priciTime1">10 minutes ago</p>
														<span className="redTechbtn">TEACHER</span>
													</div>
												</div>
												<div className="pricirgt2">
													<a href="#" className="priciarrrow"> <img src={require('assets/images/surface15.png')} /></a>

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
												onFinish={() => this.onFinish()}
												onFinishFailed={() => this.onFinishFailed()}
											>
												<Form.Item wrapperCol={{ sm: 24 }}

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
									<h3>Publications</h3>
									<Timeline>
										<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
										<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
										<Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
										<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
										<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
										<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
										<Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
										<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
										<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
										<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
										<Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
										<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
										<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
										<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
										<Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
										<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
										<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
									</Timeline>
								</div>
							</Col>
						</Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
