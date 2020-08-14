import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, Table } from "antd";
import { DownOutlined } from '@ant-design/icons';
import InternalSidebar from './InternalSidebar.js';
import '../home-style.css';





export default class Ratings2 extends React.Component {

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
        const columns = [
            { title: 'Names', dataIndex: 'names', key: 'names' },
            { title: 'Fouls', dataIndex: 'fouls', key: 'fouls' },
            { title: 'Score', dataIndex: 'score', key: 'score' },
            { title: '', dataIndex: 'bell', key: 'bell' },
            /* {
               title: 'Action',
               dataIndex: '',
               key: 'x',
               render: () => <a>Delete</a>,
             },*/
        ];

        const data = [
            {
                key: 1,
                names:<div className="imgtbl">
                    <img alt="" src={require("assets/images/avatar3-sm4.png")} /> <span>Chad Wade</span> 
                    </div>,
                fouls: '2',
                score: '60.62%',
                bell: <div className="ibell1">
                <img alt="" src={require("assets/images/bell4.png")} /> <span className="numbell">3</span> 
                </div>,
            },
            {
                key: 2,
                names:<div className="imgtbl">
                    <img alt="" src={require("assets/images/avatar3-sm4.png")} /> <span>Chad Wade</span> 
                    </div>,
                fouls: '0',
                score: '60.62%',
                bell: <div className="ibell1">
                <img alt="" src={require("assets/images/bell4.png")} /> <span className="numbell">3</span> 
                </div>,
            },
            
            {
                key: 4,
                names:<div className="imgtbl">
                    <img alt="" src={require("assets/images/avatar3-sm4.png")} /> <span>Chad Wade</span> 
                    </div>,
                fouls: '1',
                score: '62%',
                bell: <div className="ibell1">
                <img alt="" src={require("assets/images/bell4.png")} /> <span className="numbell">3</span> 
                </div>,
            },
            {
                key: 5,
                names:<div className="imgtbl">
                    <img alt="" src={require("assets/images/avatar3-sm4.png")} /> <span>Chad Wade</span> 
                    </div>,
                fouls: '2',
                score: '42%',
                bell: <div className="ibell1">
                <img alt="" src={require("assets/images/bell4.png")} /> <span className="numbell">3</span> 
                </div>,
            },
            {
                key: 6,
                names:<div className="footertb1">
                    <p>COURSE AVERAGE</p>
                    </div>,
                fouls: '',
                score: <div className="footertb1"> <p>69.59 %</p> </div>,
                bell: '',
            },
          
        ];
      
        return (
            <div>
                <InternalSidebar />
                <div className="rightside2">
                    <div className="home2tech">
                        <Row gutter={[8, 16]}>
                            <Col span={18} >
                                <div className="wrtPosttec">
                                    <div className="rtingMdl">
                                        <div >
                                            <Row gutter={[8, 16]} className="rg-allr">
                                                <Col span={3} >
                                                    <div className="rg-img">
                                                        <img alt="" src={require("assets/images/pro1.png")} />
                                                    </div>
                                                </Col>
                                                <Col span={21} >
                                                    <div className="rg-texth">
                                                        <h4 className="rg-heading3">Colegio Juan Pablo II</h4>
                                                        <p>Fundada en 1996 de 18 de Noviembre</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Row gutter={[8, 16]} >
                                            
                                            <Col span={24} >
                                                <div className="plasticheading">
                                                    <h4>Plastic arts students</h4>
                                               </div>     
                                            </Col>
                                         </Row>   
                                        <Row gutter={[8, 16]} >
                                            
                                            <Col span={24} >
                                                <div className="tbleSec2">
                                                    <Table
                                                        columns={columns}
                                                        expandable={{
                                                            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                                                            rowExpandable: record => record.name !== 'Not Expandable',
                                                        }}
                                                        dataSource={data}
                                                        pagination={false}
                                                    
                                                />,
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6} >
                                <div className="publictinsrgt">
                                    <div className="lftSidebrgruop">
                                        <div className="gropBtnv">
                                            <Button > <img src={require('assets/images/print.png')} /> PRINT </Button>
                                        </div>
                                        <div className="gropBtn">
                                            <Button onClick={this.showModal}><img src={require('assets/images/mail4.png')} />SEND TO EMAIL</Button>

                                            <Modal
                                                title="  Enviar Notas a un email"
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
                                                        <label className="lbl3"> Email (*) </label>
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
                                                                    <img src={require('assets/images/mail4.png')} /> ENVIAR
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
                                            <h4 className="ex-heading">Cumplimiento de actividades</h4>
                                        </div>
                                        <div className="">
                                            <img src={require('assets/images/chatbare.PNG')} />
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


