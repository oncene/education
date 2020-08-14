import React,{Component} from "react";
import {
			Col,
			Row,
			Modal, 
			Button,
			Form, Input,  Select,
			Checkbox,
			Upload,
			Icon
		} from "antd";
import {connect} from "react-redux";
import '../dashboard.css'
import {AddParallel, AddSubjects} from "appRedux/actions/TeacherDashboard";

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

class Dashboard extends React.Component{

	constructor(props){
		super(props);
		this.state = {
	    visible: false,
	    visibleSubject: false,
	    confirmLoading: false,
		activeparallel:0
	  };
	}
	

	  showModal = () => {
	    this.setState({
	      visible: true,
	    });
	  };

	  showModalSubject = () => {
	    this.setState({
	      visibleSubject: true,
	    });
	  };

	handleOk = () => {
		this.setState({ visible: false });
	};
	handleOkSubject = () => {
		this.props.form.validateFields(['matter_parallel', 'matter_description', 'matter_title'],(err, values) => {
			if (!err) {
				//this.props.showAuthLoader();
				this.props.AddSubjects(values.matter_parallel, values.matter_title,values.matter_description);
				this.props.form.resetFields();
				this.setState({ visibleSubject: false });
			}
		});
	};
	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.form.validateFields(['parallel_description', 'parallel_title'],(err, values) => {
			if (!err) {
				//this.props.showAuthLoader();
				this.props.AddParallel(values.parallel_title,values.parallel_description);
				this.props.form.resetFields();
				this.setState({ visible: false });
			}
		});
	}
	handleClickParallel = (parallel_id,k)=>{
		this.setState({activeparallel: k});
	}
	handleCancel = ()=>{
		this.setState({'visible':false});
	}
	handleCancelSubject = ()=>{
		this.setState({'visibleSubject':false});
	}
	
	render(){
		 const {getFieldDecorator} = this.props.form;
		 const { visible, confirmLoading, visibleSubject } = this.state;
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
								         onOk={this.handleSubmit}
								         onCancel={this.handleCancel}
								          confirmLoading={confirmLoading}
								           footer={null}
								         
								        >
								         <Form
									      {...layout}
									      name="basic"
									      className="form002" 
									    >
									    <label className="lbl2">School </label>
									    <Form.Item  wrapperCol={{ sm: 24 }} style={{ width: "100%" }} span={24}>
											{this.props.school_details.school_name}
									    </Form.Item>

									  <label className="lbl2">Title (*) </label>
									      <Form.Item  wrapperCol={{ sm: 24 }} style={{ width: "100%" }} className="form001">
										  {getFieldDecorator('parallel_title',{
									            required: true,
									            message: 'Please input Parallel Title!',
									          })(
									        <Input />
									       )}
									      </Form.Item>

									       
									       <label className="lbl2" >Description (*) </label>
									         <Form.Item  wrapperCol={{ sm: 24 }} style={{ width: "100%" }} name="description" > 
											 {getFieldDecorator('parallel_description',{
									            required: true,
									            message: 'Please input Parallel description!',
									          })(
									        <Input.TextArea />
											 )}
									      </Form.Item>
									 

									    </Form>
						<div className="sbtrgt"> 
            <Button  key="submit" type="primary" htmlType="submit" onClick={(e)=>this.handleSubmit(e)}>
             + New Parallel
            </Button>
            </div>
      
         
								        </Modal>
					  					
					  				</div>
					  			</Col>
					  		</Row>
					  	</div>
						{this.props.parallels.length>0 && this.props.parallels.map(function(parallel, k){	
						return (
							<div key ={k} onClick={()=>this.handleClickParallel(parallel.parallel_id, k)} className={"pxPralllels1 "+(this.state.activeparallel == k?'active':'')}>
								<Row gutter={[8, 8]}>
									<Col span={5} >
										<div className="px_high">
										{this.state.activeparallel == k?<img src={require('assets/images/surface10.png')} />:
										<img src={require('assets/images/surface2.png')} />}
										</div>
									</Col>
									<Col span={16} >
										<div className="px_high">
											<h3>{parallel.title}</h3>
											<p>
												{parallel.description}
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
						);
						},this)
						}
				  		
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
				  					<Button onClick={this.showModalSubject}>
				  						<span>&#43; </span> New Subjects	
				  					</Button>
									<Modal
								        id="modelBox1"
								          title=" Create new Subject"
								          visible={visibleSubject}
								         onOk={this.handleOkSubject}
								         onCancel={this.handleCancelSubject}
								          confirmLoading={confirmLoading}
								           footer={null}
								         
								        >
								         <Form
									      {...layout}
									      name="basic"
									      className="form002" 
									    >
									    <label className="lbl2">School Parallel(*) </label>
									    <Form.Item  wrapperCol={{ sm: 24 }} style={{ width: "100%" }} span={24}>
										{getFieldDecorator('matter_parallel',{
									            required: true,
									            message: 'Please select School!',
									          })(
											<Select>
											{this.props.parallels.length>0 && this.props.parallels.map(function(parallel,k){
												return (<Select.Option key={k} value={parallel.parallel_id}>{parallel.title}</Select.Option>)
											},this)
											}
											</Select>
										)}
									    </Form.Item>

									  <label className="lbl2">Cover Image (*) </label>
									      <Form.Item  wrapperCol={{ sm: 24 }} style={{ width: "100%" }} className="form001"
									        name="username"
									        rules={[
									          {
									            required: true,
									            message: 'Please input your username!',
									          },
									        ]}
									      >
									        
											<Upload>
												<Button>
												  <Icon type="upload" /> Click to Upload
												</Button>
											  </Upload>
									       
									      </Form.Item>
									  <label className="lbl2">Matter Title (*) </label>
									      <Form.Item  wrapperCol={{ sm: 24 }} style={{ width: "100%" }} className="form001">
										  {getFieldDecorator('matter_title',{
									            required: true,
									            message: 'Please input Matter Title!',
									          })(
									        <Input />
									       )}
									      </Form.Item>

									       
									       <label className="lbl2" >Description (*) </label>
									        <Form.Item  wrapperCol={{ sm: 24 }} style={{ width: "100%" }} className="form001">
										  {getFieldDecorator('matter_description',{
									            required: true,
									            message: 'Please input Description!',
									          })(
									        
												<Input.TextArea />
										  )}
									      </Form.Item>
									 

									    </Form>
						<div className="sbtrgt"> 
            <Button  key="submit" type="primary" onClick={()=>this.handleOkSubject()}>
             + New Parallel
            </Button>
            </div>
      
         
								        </Modal>
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
										<div className="treedotw">
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
const WrappedDashboardForm = Form.create()(Dashboard);
const mapStateToProps = ({teacherdashboard}) => {
  const {user_details, school_details, parallels, subjects} = teacherdashboard;
  return {user_details, school_details, parallels, subjects};
};
export default connect(mapStateToProps, {AddParallel, AddSubjects})(WrappedDashboardForm);