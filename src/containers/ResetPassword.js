import React from "react";
import {Button, Checkbox, Form, Icon, Input, message} from "antd";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import OtpInput from 'react-otp-input';
import {
	hideMessage,
	showAuthLoader,
	userFacebookSignIn,
	userGoogleSignIn,
	userSignIn
} from "appRedux/actions/Auth";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "components/CircularProgress/index";

const FormItem = Form.Item;
const inputstyleotp = {
      width: "2.5rem",
    height: "2.5rem",
    margin: "0 .30rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid rgba(0,0,0,0.3)"
    };
class ResetPassword extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			step:1,
			otp:''
		}
	}
	
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.showAuthLoader();
        this.props.userSignIn(values);
      }
    });
  };
  handleSubmitEmail = (e)=>{
	  e.preventDefault();
	  this.setState({'step':2});
  }
  handleSubmitOTP = (e)=>{
	  e.preventDefault();
	  this.setState({'step':3});
  }
  handleSubmitPassword = (e)=>{
	  e.preventDefault();
	  this.setState({'step':3});
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }
handleChange = (otp)=>{
		console.log(otp);
		this.setState({ otp });
	}
  render() {
    const {getFieldDecorator} = this.props.form;
    const {showMessage, loader, alertMessage} = this.props;

    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img src="https://via.placeholder.com/272x395" alt='Neature'/>
              </div>
              <div className="gx-app-logo-wid">
			  {(this.state.step ==1 || this.state.step ==2)&&<h1>Reset Password</h1>}
			  {(this.state.step ==3)&&<h1>New Password</h1>}
			  {this.state.step ==1 &&<p>Enter your registered email below to receive password reset instruction</p>}
			  {this.state.step ==2 &&<p>Please check your inbox and copy code received to reset a password</p>}
			  {this.state.step ==3 &&<p>Change new password, you can access with your new password</p>}
              </div>
              <div className="gx-app-logo">
			  {/*<img alt="example" src={require("assets/images/logo.png")}/>*/}
              </div>
            </div>
            <div className="gx-app-login-content">
			{this.state.step== 1 &&<Form onSubmit={(e)=>this.handleSubmitEmail(e)} className="gx-signin-form gx-form-row0">

                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{
                      required: true, type: 'email', message: 'The input is not valid E-mail!',
                    }],
                  })(
                    <Input placeholder="Email"/>
                  )}
                </FormItem>
                
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    Send email
                  </Button>
                </FormItem>
                
			</Form>}
			  
			  {this.state.step == 2 &&<Form onSubmit={(e)=>this.handleSubmitOTP(e)} className="gx-signin-form gx-form-row0">

                <FormItem>
                  <OtpInput
					value={this.state.otp}
						onChange={this.handleChange}
						numInputs={5}
						inputStyle = {inputstyleotp}
					  />
                </FormItem>
                
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    New Password
                  </Button>
                </FormItem>
                
              </Form>}
			  
			  {this.state.step ==3 &&<Form onSubmit={(e)=>this.handleSubmitPassword(e)} className="gx-signin-form gx-form-row0">

                 <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{
                      required: true, message: 'Please input your Password!',
                    }],
                  })(
                    <Input type="password" placeholder="Password"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('confirm_password', {
                   
                    rules: [{required: true, message: 'Please input your confirm Password!'}],
                  })(
                    <Input type="password" placeholder="Confirm Password"/>
                  )}
                </FormItem>
                
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    Reset Password
                  </Button>
                </FormItem>
                
              </Form>}
			  <div><Link to="/signin">Login</Link></div>
            </div>

            {loader ?
              <div className="gx-loader-view">
                <CircularProgress/>
              </div> : null}
            {showMessage ?
              message.error(alertMessage.toString()) : null}
          </div>
        </div>
      </div>
    );
  }
}

const WrappedResetPasswordForm = Form.create()(ResetPassword);

const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
})(WrappedResetPasswordForm);
