import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, Table, Radio, Collapse } from "antd";
import { DownOutlined } from '@ant-design/icons';
import InternalSidebar from './InternalSidebar.js';
import '../home-style.css';




export default class Program extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }




    render() {


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
                                    <div>
                                        <div className="progMd2">
                                            <h4>Subject program</h4>
                                            <p>Plastic Arts</p>
                                        </div>
                                        <div className="accordionBox">
                                            <div className="colapses0">
                                                <p>Collapse All</p>
                                            </div>
                                            <div className="accodinmain">
                                                <div className="acoordionHding">
                                                    <Row gutter={[8, 16]}>
                                                        <Col span={21} >
                                                            <div className="acorn7jn">
                                                                <img src={require('assets/images/files1.png')} />
                                                                <p >Introducción a las Artes</p>
                                                            </div>
                                                        </Col>
                                                        <Col span={3} >
                                                            <div className="accortnbtn1">
                                                                <Dropdown overlay={menu2} trigger={['click']}>

                                                                    <a href="#" className="tchaddbtn0 ant-dropdown-link" onClick={e => e.preventDefault()}> <img src={require('assets/images/surface13.png')} /> Add</a>
                                                                </Dropdown>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="acoordionPara">
                                                    <Row gutter={[8, 16]}>
                                                        <Col span={24} >
                                                            <div className="acorn7btm">
                                                                <img src={require('assets/images/adobe.png')} />
                                                                <p >Introducción a las Artes</p>
                                                                <img src={require('assets/images/trash1.png')} />
                                                            </div>
                                                            <div className="acorn7btm">
                                                                <img src={require('assets/images/adobe.png')} />
                                                                <p >Introducción a las Artes</p>
                                                            </div>
                                                            <div className="acorn7btm">
                                                                <img src={require('assets/images/adobe.png')} />
                                                                <p >Introducción a las Artes</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                            <div className="accodinmain">
                                                <div className="acoordionHding">
                                                    <Row gutter={[8, 16]}>
                                                        <Col span={21} >
                                                            <div className="acorn7jn">
                                                                <img src={require('assets/images/files1.png')} />
                                                                <p >Introducción a las Artes</p>
                                                            </div>
                                                        </Col>
                                                        <Col span={3} >
                                                            <div className="accortnbtn1">
                                                                <Dropdown overlay={menu2} trigger={['click']}>

                                                                    <a href="#" className="tchaddbtn0 ant-dropdown-link" onClick={e => e.preventDefault()}> <img src={require('assets/images/surface13.png')} /> Add</a>
                                                                </Dropdown>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6} >
                                <div className="publictinsrgt">
                                    <div className="lftSidebrgruop">
                                        <div className="sidegrp1">
                                            <h4 className="ex-heading">Conference history</h4>
                                            <p className="para-progm">Los exámenes de prueba, las puntuaciones obtenidas no son calificadas.</p>
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


