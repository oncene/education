import React,{Component} from "react";
import {
			Col,
			Row,
			Modal, 
			Button,
			Form, Input,  Select,
			Checkbox
		} from "antd";

import '../dashboard.css'

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

export default class Dashboard extends React.Component{

	constructor(props){
		super(props);
		this.state = {
	    ModalText: 'Content of the modal',
	    visible: false,
	    confirmLoading: false,
	  };
	}
onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

	

	  showModal = () => {
	    this.setState({
	      visible: true,
	    });
	  };

	  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };




	  




	






	render(){






		 const { visible, confirmLoading, ModalText } = this.state;
		return(
			<div className="tchtestpage">
				<Row gutter={[8, 16]}>
				  <Col span={9} >
				  	<div className="parlTop">
				  		<div className="tchbtx">
					  		<Row gutter={[8, 8]} className="flexnme1">
					  			<Col span={12} >
					  				<div className="parallelsHeading">
					  					<p>
					  						Parallels 
					  					</p>
					  				</div>
					  			</Col>
					  			<Col span={12} >
					  				<div className="newParallels">


					  					<Button onClick={this.showModal}>
								         <span> &#43; </span> New Parallels
								        </Button>
								        <Modal
								        id="modelBox1"
								          title=" Create new Parallel"
								          visible={visible}
								         onOk={this.handleOk}
								         onCancel={this.handleCancel}
								          confirmLoading={confirmLoading}
								           footer={null}
								         
								        >
								         <Form
									      {...layout}
									      name="basic"
									      initialValues={{
									        remember: true,
									      }}

									      className="form002" 
									      onFinish={()=>this.onFinish()}
									      onFinishFailed={()=>this.onFinishFailed()}
									    >
									    <label className="lbl2">School (*) </label>
									    <Form.Item  wrapperCol={{ sm: 24 }}

style={{ width: "100%" }}
									     span={24}>
									          <Select>
									            <Select.Option value="demo">Demo1</Select.Option>
									             <Select.Option value="demo">Demo2</Select.Option>
									          </Select>
									        </Form.Item>

									  <label className="lbl2">Title (*) </label>
									      <Form.Item  wrapperCol={{ sm: 24 }}

style={{ width: "100%" }}
									      className="form001"
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

									       
									       <label className="lbl2" >Description (*) </label>
									         <Form.Item  wrapperCol={{ sm: 24 }}

style={{ width: "100%" }} name={['user', 'Description']} > 
									        <Input.TextArea />
									      </Form.Item>
									 

									    </Form>
						<div className="sbtrgt"> 
            <Button  key="submit" type="primary" onClick={this.handleOk}>
             + New Parallel
            </Button>
            </div>
      
         
								        </Modal>




					  					
					  				</div>
					  			</Col>
					  		</Row>
					  	</div>	
				  		<div className="pxPralllels1 active">
				  			<Row gutter={[8, 8]}>
						  		<Col span={5} >
						  			<div className="px_high">
						  				<img src={require('assets/images/surface10.png')} />

						  			</div>
						  		</Col>
						  		<Col span={16} >
						  			<div className="px_high">
						  				<h3>2C High School</h3>
						  				<p>
						  					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
						  				</p>
						  			</div>
						  		</Col>
						  		<Col  span={3} >
						  			<div className="treedots">
						  				 <span>&#8942;</span>
						  			</div>
						  		</Col>
					  		</Row>
				  		</div>
				  		<div className="pxPralllels1">
				  			<Row gutter={[8, 8]}>
						  		<Col span={5} >
						  			<div className="px_high">
						  				<img src={require('assets/images/surface2.png')} />

						  			</div>
						  		</Col>
						  		<Col span={16} >
						  			<div className="px_high">
						  				<h3>2C High School</h3>
						  				<p>
						  					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
						  				</p>
						  			</div>
						  		</Col>
						  		<Col  span={3} >
						  			<div className="treedots">
						  				 <span>&#8942;</span>
						  			</div>
						  		</Col>
					  		</Row>
				  		</div>
				  		<div className="pxPralllels1">
				  			<Row gutter={[8, 8]}>
						  		<Col span={5} >
						  			<div className="px_high">
						  				<img src={require('assets/images/surface2.png')} />

						  			</div>
						  		</Col>
						  		<Col span={16} >
						  			<div className="px_high">
						  				<h3>2C High School</h3>
						  				<p>
						  					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
						  				</p>
						  			</div>
						  		</Col>
						  		<Col  span={3} >
						  			<div className="treedots">
						  				 <span>&#8942;</span>
						  			</div>
						  		</Col>
					  		</Row>
				  		</div>
				  	</div>
				  </Col>
				  <Col span={9} >
				  <div className="txsubjTab1">
				  	<div className="tchbtx">
				  		<Row gutter={[8, 8]} className="flexnme1">
				  			<Col span={12} >
				  				<div className="parallelsHeading">
				  					<p>
				  						Subjects
				  					</p>
				  				</div>
				  			</Col>
				  			<Col span={12} >
				  				<div className="newParallels">
				  					<button>
				  						<span>&#43; </span> New Subjects	
				  					</button>
				  				</div>
				  			</Col>
				  		</Row>
				  	</div>		
				  	<div className="subcls1 active">
				  		<Row gutter={[0, 0]} className="pdding0">
						  <Col span={7} className="pdding0">
						  	<div className="subimg0xs">
						  		<img src={require('assets/images/BG.png')} />
						  	</div>
						  </Col>
						  <Col span={17} className="pnd9 pdding0">
						  	<div className="bluepxs">
						  		<Row gutter={[0, 0]}  className="pdding0">
						  			<Col span={20}  className="pdding0">
									  	<div className="plstxth">
									  		<h3>Plastic Arts</h3>
									  		<span className="extraInfo-1Y8H">
									  			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
									  		</span>
									  	</div>
									</Col>  	
									<Col span={4} className="pdding0">
										<div class="treedotw">
											<span>&#8942;</span>
											<img src={require('assets/images/Enmascarar_grupo_23.png')} />
										</div>
									</Col>
								</Row>
								<Row gutter={[0, 0]}  className="pdding0">
									<Col span={20}  className="pdding0">
										<div className="jytecxt">
											<a href="#">Por: Juan Gabriel Torrez </a>
										</div>
									</Col>
									<Col span={4}  className="pdding0">
										<div className="tag5s">
											<span>5</span>
										</div>
									</Col>
								</Row>
						  	</div>		
						   </Col>
						</Row>
				  	</div>
				  	<div className="subcls1">
				  		<Row gutter={[0, 0]} className="pdding0">
						  <Col span={7} className="pdding0">
						  	<div className="subimg0xs">
						  		<img src={require('assets/images/BG.png')} />
						  	</div>
						  </Col>
						  <Col span={17} className="pnd9 pdding0">
						  	<div className="bluepxs">
						  		<Row gutter={[0, 0]}  className="pdding0">
						  			<Col span={20}  className="pdding0">
									  	<div className="plstxth">
									  		<h3>Biology</h3>
									  		<span className="extraInfo-1Y8H">
									  			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
									  		</span>
									  	</div>
									</Col>  	
									<Col span={4} className="pdding0">
										<div class="treedotw">
											<span>&#8942;</span>
											<img src={require('assets/images/Enmascarar-grupo-24.png')} />
										</div>
									</Col>
								</Row>
								<Row gutter={[0, 0]}  className="pdding0">
									<Col span={20}  className="pdding0">
										<div className="jytecxt">
											<a href="#">Por: Juan Gabriel Torrez </a>
										</div>
									</Col>
									<Col span={4}  className="pdding0">
										<div className="tag5s">
											<span>4</span>
										</div>
									</Col>
								</Row>
						  	</div>		
						   </Col>
						</Row>
				  	</div>
				  	<div className="subcls1">
				  		<Row gutter={[0, 0]} className="pdding0">
						  <Col span={7} className="pdding0">
						  	<div className="subimg0xs">
						  		<img src={require('assets/images/BG.png')} />
						  	</div>
						  </Col>
						  <Col span={17} className="pnd9 pdding0">
						  	<div className="bluepxs">
						  		<Row gutter={[0, 0]}  className="pdding0">
						  			<Col span={20}  className="pdding0">
									  	<div className="plstxth">
									  		<h3>Plastic Arts</h3>
									  		<span className="extraInfo-1Y8H">
									  			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
									  		</span>
									  	</div>
									</Col>  	
									<Col span={4} className="pdding0">
										<div class="treedotw">
											<span>&#8942;</span>
											<img src={require('assets/images/Enmascarar-grupo-24.png')} />
										</div>
									</Col>
								</Row>
								<Row gutter={[0, 0]}  className="pdding0">
									<Col span={20}  className="pdding0">
										<div className="jytecxt">
											<a href="#">Por: Juan Gabriel Torrez </a>
										</div>
									</Col>
									<Col span={4}  className="pdding0">
										<div className="tag5s">
											<span>5</span>
										</div>
									</Col>
								</Row>
						  	</div>		
						   </Col>
						</Row>
				  	</div>
				  	<div className="subcls1">
				  		<Row gutter={[0, 0]} className="pdding0">
						  <Col span={7} className="pdding0">
						  	<div className="subimg0xs">
						  		<img src={require('assets/images/BG.png')} />
						  	</div>
						  </Col>
						  <Col span={17} className="pnd9 pdding0">
						  	<div className="bluepxs">
						  		<Row gutter={[0, 0]}  className="pdding0">
						  			<Col span={20}  className="pdding0">
									  	<div className="plstxth">
									  		<h3>Plastic Arts</h3>
									  		<span className="extraInfo-1Y8H">
									  			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
									  		</span>
									  	</div>
									</Col>  	
									<Col span={4} className="pdding0">
										<div class="treedotw">
											<span>&#8942;</span>
											<img src={require('assets/images/Enmascarar-grupo-24.png')} />
										</div>
									</Col>
								</Row>
								<Row gutter={[0, 0]}  className="pdding0">
									<Col span={20}  className="pdding0">
										<div className="jytecxt">
											<a href="#">Por: Juan Gabriel Torrez </a>
										</div>
									</Col>
									<Col span={4}  className="pdding0">
										<div className="tag5s">
											<span>5</span>
										</div>
									</Col>
								</Row>
						  	</div>		
						   </Col>
						</Row>
				  	</div>
				  	<div className="subcls1">
				  		<Row gutter={[0, 0]} className="pdding0">
						  <Col span={7} className="pdding0">
						  	<div className="subimg0xs">
						  		<img src={require('assets/images/BG.png')} />
						  	</div>
						  </Col>
						  <Col span={17} className="pnd9 pdding0">
						  	<div className="bluepxs">
						  		<Row gutter={[0, 0]}  className="pdding0">
						  			<Col span={20}  className="pdding0">
									  	<div className="plstxth">
									  		<h3>Plastic Arts</h3>
									  		<span className="extraInfo-1Y8H">
									  			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
									  		</span>
									  	</div>
									</Col>  	
									<Col span={4} className="pdding0">
										<div class="treedotw">
											<span>&#8942;</span>
											<img src={require('assets/images/Enmascarar-grupo-24.png')} />
										</div>
									</Col>
								</Row>
								<Row gutter={[0, 0]}  className="pdding0">
									<Col span={20}  className="pdding0">
										<div className="jytecxt">
											<a href="#">Por: Juan Gabriel Torrez </a>
										</div>
									</Col>
									<Col span={4}  className="pdding0">
										<div className="tag5s">
											<span>5</span>
										</div>
									</Col>
								</Row>
						  	</div>		
						   </Col>
						</Row>
				  	</div>
				  
				  </div>
				  </Col>
				  <Col span={6} >
				  	<div className="technotiction">
				  		<div className="techntionHdg">
				  			<h3>Notifications</h3>
				  		</div>
				  		<div className="ntfnbox1">
				  			<div className="notinImg">
				  				<img src="https://img.pngio.com/deafult-profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" />
				  			</div>
				  			<div className="notinPara">
				  				<h3>Vincent Marshall</h3>
				  				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, st ut.</p>
				  			</div>
				  		</div>
				  		<div className="ntfnbox1">
				  			<div className="notinImg">
				  				<img src="https://img.pngio.com/deafult-profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" />
				  			</div>
				  			<div className="notinPara">
				  				<h3>Vincent Marshall</h3>
				  				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, st ut.</p>
				  			</div>
				  		</div>
				  		<div className="ntfnbox1">
				  			<div className="notinImg">
				  				<img src="https://img.pngio.com/deafult-profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" />
				  			</div>
				  			<div className="notinPara">
				  				<h3>Vincent Marshall</h3>
				  				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, st ut.</p>
				  			</div>
				  		</div>
				  		<div className="ntfnbox1">
				  			<div className="notinImg">
				  				<img src="https://img.pngio.com/deafult-profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" />
				  			</div>
				  			<div className="notinPara">
				  				<h3>Vincent Marshall</h3>
				  				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, st ut.</p>
				  			</div>
				  		</div>
				  		<div className="ntfnbox1">
				  			<div className="notinImg">
				  				<img src="https://img.pngio.com/deafult-profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" />
				  			</div>
				  			<div className="notinPara">
				  				<h3>Vincent Marshall</h3>
				  				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, st ut.</p>
				  			</div>
				  		</div>
				  	</div>
				  </Col>
				</Row>
			</div>
		);
	}
}

