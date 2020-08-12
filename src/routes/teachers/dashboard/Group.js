import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, Switch } from "antd";
import '../home-style.css'
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import InternalSidebar from './InternalSidebar.js';
import {dashboardSidebar} from "appRedux/actions/Setting";
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


class Group extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount(){
		this.props.dashboardSidebar(true );
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
		<div>
				<InternalSidebar />
				<div className={this.props.teachernavcollapsed?"rightside2sidebar":"rightside2"}>
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
									<div className="profiles3">
										<ul className="flexlineo3">
											<li>
												<div className="rounded-full1">
													<img src={require('assets/images/avatar50-sm1.png')} />
												</div>
											</li>
											<li>
												<div className="rounded-ful2">
													<img src={require('assets/images/avatar7-sm2.png')} />
												</div>
											</li>
											<li>
												<div className="rounded-full3">
													<img src={require('assets/images/avatar6-sm3.png')} />
												</div>
											</li>
											<li>
												<div className="rounded-full4">
													<img src={require('assets/images/avatar3-sm4.png')} />
												</div>
											</li>
											<li>
												<div className="rounded-full5">
													<img src={require('assets/images/avatar9-sm5.png')} />
												</div>
											</li>
										</ul>
										<p>5 Personas</p>
									</div>

									<div className="liksIcons3 ">
										<p className="like3"><img src={require('assets/images/msg.png')} /> <span>2</span></p>
									</div>
									<div className="line-btm">
									</div>
									<div className="jabmbox2">
										<div className="pricileft2">
											<div className="priciProfl">
												<img src={require('assets/images/avatar7-sm.png')} />
											</div>
											<div className="priciName1">
												<h4>Monica Salinas</h4>
												<p className="priciTime1">Hace 50 minutos</p>
											</div>
											<div className="secondParativ">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
											</div>
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
										</div>
									</div>
									<div className="jabmbox2">
										<div className="pricileft2">
											<div className="priciProfl">
												<img src={require('assets/images/avatar7-sm.png')} />
											</div>
											<div className="priciName1">
												<h4>Monica Salinas</h4>
												<p className="priciTime1">Hace 50 minutos</p>
											</div>
											<div className="secondParativ">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
											</div>
										</div>
										<div className="liksIcons3">
											<p className="like2"><img src={require('assets/images/surface16.png')} /> <span>5</span></p>
										</div>
									</div>
								</div>
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
											<span>2</span>

										</div>
									</div>
									<div className="profiles3">
										<ul className="flexlineo3">
											<li>
												<div className="rounded-full1">
													<img src={require('assets/images/avatar50-sm1.png')} />
												</div>
											</li>
											<li>
												<div className="rounded-ful2">
													<img src={require('assets/images/avatar7-sm2.png')} />
												</div>
											</li>
											<li>
												<div className="rounded-full3">
													<img src={require('assets/images/avatar6-sm3.png')} />
												</div>
											</li>
											<li>
												<div className="rounded-full4">
													<img src={require('assets/images/avatar3-sm4.png')} />
												</div>
											</li>
											<li>
												<div className="rounded-full5">
													<img src={require('assets/images/avatar9-sm5.png')} />
												</div>
											</li>
										</ul>
										<p>5 Personas</p>
									</div>

									<div className="liksIcons3 ">
										<p className="like3"><img src={require('assets/images/msg.png')} /> <span>2</span></p>
									</div>
									<div className="line-btm">
									</div>
									<div className="jabmbox2">
										<div className="pricileft2">
											<div className="priciProfl">
												<img src={require('assets/images/avatar7-sm.png')} />
											</div>
											<div className="priciName1">
												<h4>Monica Salinas</h4>
												<p className="priciTime1">Hace 50 minutos</p>
											</div>
											<div className="secondParativ">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
											</div>
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
									<Button><img src={require('assets/images/plusgroup.png')} /> NEW GROUP</Button>
								</div>
								<div className="line-btm0">
								</div>
								<div className="sidegrp1">
									<h4 className="ex-heading">Group</h4>
								</div>
								<div className="gpsleft2">
									<div className="gp-Img">
										<img src={require('assets/images/group1d.png')} />
									</div>
									<div className="gp-paras">
										<h4 className="gphging1">Grupo los ACOPLADOS</h4>
										<p className="gp_para2">5 Personas</p>
									</div>
								</div>
								<div className="gpsleft2">
									<div className="gp-Img">
										<img src={require('assets/images/group1d.png')} />
									</div>
									<div className="gp-paras">
										<h4 className="gphging1">Grupo los ACOPLADOS</h4>
										<p className="gp_para2">5 Personas</p>
									</div>
								</div>
								<div className="gpsleft2">
									<div className="gp-Img">
										<img src={require('assets/images/group1d.png')} />
									</div>
									<div className="gp-paras">
										<h4 className="gphging1">Grupo los PENDEJOS</h4>
										<p className="gp_para2">5 Personas</p>
									</div>

								</div>
								<div className="sidegrp1">
									<h4 className="ex-heading1">Persons</h4>
								</div>
								<div className="gpsleft2">
									<div className="gp-Img1">
										<img src={require('assets/images/avatar50-sm1.png')} />
									</div>
									<div className="gp-paras">
										<h4 className="gphging1">Grupo los PENDEJOS</h4>
									</div>

								</div>
								<div className="gpsleft2">
									<div className="gp-Img1">
										<img src={require('assets/images/avatar50-sm1.png')} />
									</div>
									<div className="gp-paras">
										<h4 className="gphging1">Grupo los PENDEJOS</h4>
									</div>

								</div>
								<div className="gpsleft2">
									<div className="gp-Img1">
										<img src={require('assets/images/avatar50-sm1.png')} />
									</div>
									<div className="gp-paras">
										<h4 className="gphging1">Grupo los PENDEJOS</h4>
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




function mapStateToProps ( state ) {
  const { navStyle, themeType, locale, pathname,teachernavcollapsed } = state.settings;
  return { navStyle, themeType, locale, pathname, teachernavcollapsed }
};
function mapDispatchToProps(dispatch) {
     return bindActionCreators({dashboardSidebar: dashboardSidebar}, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(Group);