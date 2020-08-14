import React, { Component } from "react";
import { Col, Row, Modal, Button, Form, Input, Select, Checkbox, Timeline, Menu, Dropdown, Table, Radio } from "antd";
import { DownOutlined } from '@ant-design/icons';
import InternalSidebar from './InternalSidebar.js';
import '../home-style.css';





export default class Ratingsnotes3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    state = {
        value: 1,
    };


    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

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

        const { value } = this.state;

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
                                                    <h3>Ratings</h3>
                                                    <p>Plastic arts</p>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="caerdrow1">
                                            <span className="ex-paracard-01">
                                                <h4>Lorem ipsum dolor sit amet, consetetur sadipscing.</h4>
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>

                                            </span>
                                        </div>
                                        <div className="caerdrow1">
                                            <Row gutter={[8, 16]}>
                                                <Col span={24} >
                                                    <span className="ex-paracard-02">
                                                        <h4>Art is a science?</h4>
                                                        <div className="radiobtn1d">

                                                            <Radio.Group name="radiogroup" onChange={this.onChange} value={value}>
                                                                <Radio value={1}> - Yes </Radio>
                                                                <Radio value={2}> - No </Radio>
                                                            </Radio.Group>
                                                        </div>

                                                    </span>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="caerdrow-rg">
                                            <Row gutter={[8, 16]}>
                                                <Col span={22} >
                                                    <span className="ex-paracard-02">
                                                        <h4>What is the art?</h4>
                                                        <p> Lorem ipsum dolor sit amet, consetetur sadipscing.</p>

                                                    </span>
                                                    <div className="line-btm2">
                                                    </div>
                                                </Col>
                                                <Col span={2} >
                                                    <div className="rg-iconLeft">
                                                        <img src={require('assets/images/msg01.PNG')} />
                                                    </div>
                                                </Col>
                                            </Row>

                                        </div>
                                        <div className="caerdrow1">
                                            <Row gutter={[8, 16]}>

                                                <Col span={24} >
                                                    <span className="ex-paracard1">

                                                        <h4 className="ex-heading">Since what time did art begin?</h4>
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
                                        <div className="caerdrow1">
                                            <Row gutter={[8, 16]}>
                                                <Col span={24} >
                                                    <span className="ex-paracard-02">
                                                        <h4>Art is a science?</h4>
                                                        <div className="radiobtn1d">

                                                            <Radio.Group name="radiogroup" onChange={this.onChange} value={value}>
                                                                <Radio value={1}> - Yes </Radio>
                                                                <Radio value={2}> - No </Radio>
                                                            </Radio.Group>
                                                        </div>

                                                    </span>
                                                </Col>
                                            </Row>
                                        </div>
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


