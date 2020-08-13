import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, DatePicker, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';
import InternalSidebar from './InternalSidebar.js';
import moment from 'moment';
import '../home-style.css';

export default class Conferences extends React.Component {

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
        const { RangePicker } = DatePicker;
        function range(start, end) {
            const result = [];
            for (let i = start; i < end; i++) {
                result.push(i);
            }
            return result;
        }
        function disabledDate(current) {
            // Can not select days before today and today
            return current && current < moment().endOf('day');
        }

        function disabledDateTime() {
            return {
                disabledHours: () => range(0, 24).splice(4, 20),
                disabledMinutes: () => range(30, 60),
                disabledSeconds: () => [55, 56],
            };
        }
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        End Conference
					</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        Reschedule  Conference
					</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        Cancel Conference
					</a>
                </Menu.Item>
            </Menu>

        );
        const menu2 = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        End Conference
					</a>
                </Menu.Item>
            </Menu>

        );
        const menu3 = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        Reschedule  Conference
					</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        Cancel Conference
					</a>
                </Menu.Item>
            </Menu>

        );
        const menu4 = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        Reschedule  Conference
					</a>
                </Menu.Item>
            </Menu>

        );
        const menu5 = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        Reschedule  Conference
					</a>
                </Menu.Item>
            </Menu>

        );
        const menu6 = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        Reschedule  Conference
					</a>
                </Menu.Item>
            </Menu>

        );
        const menu7 = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        Reschedule  Conference
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
                                    <h4 className="hdingCons">Ongoing conferences</h4>
                                    <div className="joins1">
                                        <div className="jn-prof">
                                            <img src={require('assets/images/join1.png')} />
                                        </div>
                                        <div className="jn-hding">
                                            <h4>Modern Art</h4>
                                            <p>10 minutes ago</p>
                                            <span className="livetg">LIVE</span>
                                        </div>
                                        <div className="jn-btn1">
                                            <button>JOIN</button>
                                            <Dropdown overlay={menu} placement="bottomRight">
                                                <span>&#8942;</span>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <h4 className="hdingCons">Group conferences</h4>
                                    <div className="joins1">
                                        <div className="jn-prof">
                                            <img src={require('assets/images/join1.png')} />
                                        </div>
                                        <div className="jn-hding">
                                            <h4>Practice for tomorrow group LOS ACOPLADOS</h4>
                                            <p>10 minutes ago</p>
                                            <span className="livetg">LIVE</span>
                                        </div>
                                        <div className="jn-btn1">
                                            <button>JOIN</button>
                                            <Dropdown overlay={menu2} placement="bottomRight">
                                                <span>&#8942;</span>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="joins1">
                                        <div className="jn-prof">
                                            <img src={require('assets/images/join1.png')} />
                                        </div>
                                        <div className="jn-hding">
                                            <h4>Team work group LOS ACOPLADOS</h4>
                                            <p>10 minutes ago</p>
                                            <span className="perTechbtn">PROGRAMMED</span>
                                        </div>
                                        <div className="jn-btn1">
                                            <button>JOIN</button>
                                            <Dropdown overlay={menu3} placement="bottomRight">
                                                <span>&#8942;</span>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <h4 className="hdingCons">Programmed conferences</h4>
                                    <div className="joins1">
                                        <div className="jn-prof">
                                            <img src={require('assets/images/join1.png')} />
                                        </div>
                                        <div className="jn-hding">
                                            <h4>Contemporary Art</h4>
                                            <p>10 minutes ago</p>
                                            <span className="livetg">PROGRAMMED</span>
                                        </div>
                                        <div className="jn-btn2">
                                            <button>JOIN</button>
                                            <Dropdown overlay={menu4} placement="bottomRight">
                                                <span>&#8942;</span>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="joins1">
                                        <div className="jn-prof">
                                            <img src={require('assets/images/join1.png')} />
                                        </div>
                                        <div className="jn-hding">
                                            <h4>Modern Art</h4>
                                            <p>10 minutes ago</p>
                                            <span className="livetg">PROGRAMMED</span>
                                        </div>
                                        <div className="jn-btn2">
                                            <button>JOIN</button>
                                            <Dropdown overlay={menu5} placement="bottomRight">
                                                <span>&#8942;</span>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="joins1">
                                        <div className="jn-prof">
                                            <img src={require('assets/images/join1.png')} />
                                        </div>
                                        <div className="jn-hding">
                                            <h4>Modern Art</h4>
                                            <p>10 minutes ago</p>
                                            <span className="livetg">PROGRAMMED</span>
                                        </div>
                                        <div className="jn-btn2">
                                            <button>JOIN</button>
                                            <Dropdown overlay={menu6} placement="bottomRight">
                                                <span>&#8942;</span>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="joins1">
                                        <div className="jn-prof">
                                            <img src={require('assets/images/join1.png')} />
                                        </div>
                                        <div className="jn-hding">
                                            <h4>Watercolor painting</h4>
                                            <p>10 minutes ago</p>
                                            <span className="livetg">PROGRAMMED</span>
                                        </div>
                                        <div className="jn-btn2">
                                            <button>JOIN</button>
                                            <Dropdown overlay={menu7} placement="bottomRight">
                                                <span>&#8942;</span>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6} >
                                <div className="publictinsrgt">
                                    <div className="lftSidebrgruop fde4">
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
                                                        <label className="lbl3">Conference name (*) </label>
                                                        <Form.Item
                                                            name="username"
                                                            className="frmcollbortin"
                                                            rules={[{ required: true, message: 'Please input your username!' }]}
                                                            wrapperCol={{ sm: 24 }}
                                                            style={{ width: "100%" }}
                                                        >
                                                            <Input className="frmcollbortin" />
                                                        </Form.Item>
                                                        <label className="lbl3">Date (*) </label>
                                                        <DatePicker className="datw2"
                                                            format="YYYY-MM-DD HH:mm:ss"
                                                            disabledDate={disabledDate}
                                                            disabledTime={disabledDateTime}
                                                            showTime={{ defaultValue: moment('00:00:00 ', 'HH:mm:ss') }}
                                                            format="YYYY-MM-DD HH:mm:ss"
                                                        />
                                                        <Form.Item>
                                                            <div className="btnCollbortin">
                                                                <Button type="primary" htmlType="submit">
                                                                    <img src={require('assets/images/plusgroup.png')} /> Programed
        												</Button>
                                                            </div>
                                                        </Form.Item>
                                                    </Form>
                                                </div>
                                            </Modal>

                                        </div>
                                        <div class="line-btm0"></div>

                                        <div className="sidegrp1">
                                            <h4 className="ex-heading">Conference history</h4>
                                        </div>
                                        <Timeline>
                                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                        </Timeline>
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


