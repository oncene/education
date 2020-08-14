import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, Switch, Layout, Breadcrumb } from "antd";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {dashboardSidebar} from "appRedux/actions/Setting";
import '../home-style.css'

const { Sider } = Layout;
const { SubMenu } = Menu;

class InternalSidebar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}
	static contextTypes = {
		router: () => null, 
	  }

	state = {
		collapsed: false,
	};

	onCollapse = collapsed => {
		console.log(collapsed);
		this.setState({ collapsed });
	};
	
	dashboardSidebar = ()=>{
		console.log('rahul');
		this.props.dashboardSidebar(!this.props.teachernavcollapsed);
	}

	render() {




		return (

			<div className={this.props.teachernavcollapsed?"leftsidebar2":"leftSidebr"}>
				<div className="innersidbrs">
					<Sider collapsible collapsed={this.props.teachernavcollapsed} trigger={null}>
						<div className="logo" />
						<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
							<Menu.Item key="1" >
								<div className="tp-sideicn">
									<span className="tp-1" onClick={this.context.router.history.goBack}>  <img alt="" src={require("assets/images/leftaro1.PNG")} /> </span>
										{!this.props.teachernavcollapsed && <span className="tp-2" onClick={()=>this.dashboardSidebar()}>  <img alt="" src={require("assets/images/togglebtn.PNG")} /> </span>}
								</div>
							</Menu.Item>
							<Menu.Item key="2" >
								<div className="lfimgsec">
								<img alt="" src={require("assets/images/BG1.png")} />
									{!this.props.teachernavcollapsed && <h4 className="h-1">Plastic Arts</h4>}
									{!this.props.teachernavcollapsed && <p className="h-2">Plastic Arts of the second semesters preparatory</p>}
									{!this.props.teachernavcollapsed && <p className="h-3">By: Juan Perez</p>}
									{!this.props.teachernavcollapsed && <div className="line-btm1"></div>}
								</div>
							</Menu.Item>
							<Menu.Item key="3"  >
								<div className="lfimgsec1  active">
								<img alt="" src={require("assets/images/sideleft1.png")} />
									{!this.props.teachernavcollapsed && <span>Home</span>}
								</div>
							</Menu.Item>
							<Menu.Item key="4" >
								<div className="lfimgsec1">
								<img alt="" src={require("assets/images/sdgroup.png")} />
									{!this.props.teachernavcollapsed && <span>Groups</span>}
								</div>
							</Menu.Item>
							<Menu.Item key="5" >
								<div className="lfimgsec1">
								<img alt="" src={require("assets/images/sdColaborations.png")} />
									{!this.props.teachernavcollapsed && <span>Collaborations</span>}
								</div>
							</Menu.Item>
							<Menu.Item key="6" >
								<div className="lfimgsec1">
								<img alt="" src={require("assets/images/sdconferemces.png")} />
									{!this.props.teachernavcollapsed && <span>Conferences</span>}
								</div>
							</Menu.Item>
							<Menu.Item key="6" >
								<div className="lfimgsec1">
								<img alt="" src={require("assets/images/sdratings.png")} />
									{!this.props.teachernavcollapsed && <span>Ratings</span>}
								</div>
							</Menu.Item>
							<Menu.Item key="6" >
								<div className="lfimgsec1">
								<img alt="" src={require("assets/images/sdprogram.png")} />
									{!this.props.teachernavcollapsed && <span>Program</span>}
								</div>
							</Menu.Item>
							<Menu.Item key="6" >
								<div className="lfimgsec1">
								<img alt="" src={require("assets/images/sdchat.png")} />
									{!this.props.teachernavcollapsed && <span>Chat</span>}
								</div>
							</Menu.Item>
							<Menu.Item key="9">
							
							</Menu.Item>
							{this.props.teachernavcollapsed && <span className="tp-2" onClick={()=>this.dashboardSidebar()}>  <img alt="" src={require("assets/images/togglebtn.PNG")} /> </span>}
						</Menu>
					</Sider>
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
export default connect(mapStateToProps, mapDispatchToProps)(InternalSidebar);
