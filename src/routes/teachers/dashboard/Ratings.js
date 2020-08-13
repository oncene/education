import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, Table } from "antd";
import { DownOutlined } from '@ant-design/icons';
import InternalSidebar from './InternalSidebar.js';
import '../home-style.css';





export default class Ratings extends React.Component {

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
            { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
            { title: 'Fecha de entrega', dataIndex: 'fetch', key: 'fetch' },
            { title: 'Estado', dataIndex: 'estado', key: 'estado' },
            { title: 'Puntaje', dataIndex: 'punt', key: 'punt' },
            { title: 'De', dataIndex: 'de', key: 'de' },
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
                nombre: 'Práctica Nro 1 Arte Moderno',
                fetch: '12-02-2020 10:26 PM',
                estado: '',
                punt: '80',
                de: 100,
            },
            {
                key: 2,
                nombre: 'Práctica Nro 1 Arte Moderno',
                fetch: '12-02-2020 10:26 PM',
                estado: 'Faltante',
                punt: '80',
                de: 100,
            },
            {
                key: 3,
                nombre: 'Práctica Nro 1 Arte Moderno',
                fetch: '12-02-2020 10:26 PM',
                estado: '',
                punt: '80',
                de: 100,
            },
            {
                key: 4,
                nombre: 'Práctica Nro 1 Arte Moderno',
                fetch: '12-02-2020 10:26 PM',
                estado: '',
                punt: '80',
                de: 100,
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
                                        <Row gutter={[8, 16]}>
                                            <Col span={12} >
                                                <div>
                                                    <Row gutter={[8, 16]} className="rg-allr">
                                                        <Col span={5} >
                                                            <div className="rg-img">
                                                                <img alt="" src={require("assets/images/avatar6-sm3.png")} />
                                                            </div>
                                                        </Col>
                                                        <Col span={19} >
                                                            <div className="rg-texth">
                                                                <h4 className="rg-heading3">Carolina Airoa </h4>
                                                                <p>Docente > Artes Plasticas</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                            <Col span={12} >
                                                <div>
                                                    <Row gutter={[8, 16]} className="rg-allr">
                                                        <Col span={19} >
                                                            <div className="rg-texth1">
                                                                <h4 className="rg-heading3">Carla Abigail Villegas</h4>
                                                                <p>carlaabi@gmail.com  <img alt="" src={require("assets/images/mail1.png")} /> </p>
                                                                <p>Sexto A  <img alt="" src={require("assets/images/mail2.png")} /> </p>
                                                            </div>
                                                        </Col>
                                                        <Col span={5} >
                                                            <div className="rg-img">
                                                                <img alt="" src={require("assets/images/avatar3-sm4.png")} />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row gutter={[8, 16]} >
                                            <Col span={24} >
                                                <div className="califlitgind">
                                                    <h3>Calificaciones</h3>
                                                    <p>Artes Plásticas</p>
                                                </div>
                                            </Col>
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


