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
class ConfirmSignup extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			otp:''
		}
	}
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
      // if (!err) {
        // this.props.showAuthLoader();
        // this.props.userSignIn(values);
      // }
    // });
  };

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
                <h1>Confirm Your Email</h1>
                <p>We send you an email to confirm your account, if it still has not reach you, request a new email </p>
              </div>
              <div className="gx-app-logo">
			  {/*<img alt="example" src={require("assets/images/logo.png")}/>*/}
              </div>
            </div>
            <div className="gx-app-login-content">
              <Form onSubmit={this.handleSubmit} className="gx-signin-form gx-form-row0">

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
                    Confirm email
                  </Button>
                   <span>Or Request a new email</span>
                </FormItem>
                
                
              </Form>
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

const WrappedConfirmSignupForm = Form.create()(ConfirmSignup);

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
})(WrappedConfirmSignupForm);
