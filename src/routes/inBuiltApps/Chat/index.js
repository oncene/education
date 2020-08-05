import React, {Component} from "react";
import {Avatar, Button, Drawer, Input, Tabs} from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import Moment from "moment";

import ChatUserList from "components/chat/ChatUserList";
import conversationList from "./data/conversationList";
import Conversation from "components/chat/Conversation/index";
import users from "./data/chatUsers";
import ContactList from "components/chat/ContactList/index";
import IntlMessages from "util/IntlMessages";
import SearchBox from "components/SearchBox";
import CircularProgress from "../../../components/CircularProgress/index";
import {auth, database, firebase} from "../../../firebase/firebase";
import { firestore } from "firebase";
import "../style_css.css"

const TabPane = Tabs.TabPane;

class Chat extends Component {
  filterContact = (userName) => {
    if (userName === '') {
      return users.filter(user => !user.recent);
    }
    return users.filter((user) =>
      !user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
    );
  };
  filterUsers = (userName) => {
    if (userName === '') {
      return users.filter(user => user.recent);
    }
    return users.filter((user) =>
      user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
    );
  };
  async componentWillMount(){
	  database.ref('chats').once('value').then(function(snapshot) {
        let chats = [];
		console.log(snapshot);
        // snapshot.forEach((snap) => {
          // chats.push(snap.val());
        // });
        // this.setState({ chats });
      });
	  
	   // try {
		   console.log('rahul');
      // database.ref('chats').on('value', (snapshot) => {
        // let chats = [];
        // snapshot.forEach((snap) => {
          // chats.push(snap.val());
        // });
		// console.log(snapshot);
        // this.setState({ chats });
      // });
    // } catch (error) {
      // this.setState({ readError: error.message });
    // }
	// firebase
      // .firestore()
      // .collection("chats")
      //.doc(this.currentUserDocumentId)
      // .get()
      // .then((doc) => {
		  // console.log(doc);
        // doc.data().messages.map((item) => {
          // this.currentUserMessages.push({
            // notificationId: item.notificationId,
            // number: item.number,
          // });
          // return this.currentUserMessages;
        // });
        // this.setState({
          // displayedContactswithNotification: this.currentUserMessages,
        // });
      // });
  }
  Communication = () => {
    const {message, selectedUser, conversation} = this.state;
    const {conversationData} = conversation;
    return <div className="gx-chat-main">
	<div className="gx-chat-search-wrapper cht7x">

        
         <div className="gx-serchbta">
             <h2  className="gx-chatxd"> Chat General   </h2>
          <SearchBox styleName="gx-chat-search-bar gx-lt-icon-search-bar-lg"
                     placeholder=""
                     onChange={this.updateSearchChatUser.bind(this)}
                     value={this.state.searchChatUser}/>
            
          </div>
        </div>
   

      <CustomScrollbars className="gx-chat-list-scroll">
        <Conversation conversationData={conversationData}
                      selectedUser={selectedUser}/>
      </CustomScrollbars>

      <div className="gx-chat-main-footer">
        <div className="gx-flex-row gx-align-items-center" style={{maxHeight: 51}}>
          <div className="gx-col">
            <div className="gx-form-group">
                            <textarea
                              id="required" className="gx-border-0 ant-input gx-chat-textarea"
                              onKeyUp={this._handleKeyPress.bind(this)}
                              onChange={this.updateMessageValue.bind(this)}
                              value={message}
                              placeholder="Type and hit enter to send message"
                            />
            </div>
          </div>
          <i className="gx-icon-btn icon icon-sent" onClick={this.submitComment.bind(this)}/>
        </div>
      </div>
    </div>
  };

  AppUsersInfo = () => {
    return <div className="gx-chat-sidenav-main">
      <div className="gx-bg-grey-light gx-chat-sidenav-header">

        <div className="gx-chat-user-hd gx-mb-0">
          <i className="gx-icon-btn icon icon-arrow-left" onClick={() => {
            this.setState({userState: 1});
          }}/>

        </div>
        <div className="gx-chat-user gx-chat-user-center">
          <div className="gx-chat-avatar gx-mx-auto">
            <Avatar src='https://via.placeholder.com/150x150'
                    className="gx-size-60" alt="John Doe"/>
          </div>

          <div className="gx-user-name h4 gx-my-2">Robert Johnson</div>

        </div>
      </div>
      <div className="gx-chat-sidenav-content">

        <CustomScrollbars className="gx-chat-sidenav-scroll">
          <div className="gx-p-4">
            <form>
              <div className="gx-form-group gx-mt-4">
                <label>Mood</label>

                <Input
                  fullWidth
                  id="exampleTextarea"
                  multiline
                  rows={3}
                  onKeyUp={this._handleKeyPress.bind(this)}
                  onChange={this.updateMessageValue.bind(this)}
                  defaultValue="it's a status....not your diary..."
                  placeholder="Status"
                  margin="none"/>

              </div>
            </form>
          </div>
        </CustomScrollbars>

      </div>
    </div>
  };
  ChatUsers = () => {
    return <div className="gx-chat-sidenav-main">

	{/*<div className="gx-chat-sidenav-header">

        <div className="gx-chat-user-hd">

          <div className="gx-chat-avatar gx-mr-3" onClick={() => {
            this.setState({
              userState: 2
            });
          }}>
            <div className="gx-status-pos">
              <Avatar id="avatar-button" src='https://via.placeholder.com/150x150'
                      className="gx-size-50"
                      alt=""/>
              <span className="gx-status gx-online"/>
            </div>
          </div>

          <div className="gx-module-user-info gx-flex-column gx-justify-content-center">
            <div className="gx-module-title">
              <h5 className="gx-mb-0">Robert Johnson</h5>
            </div>
            <div className="gx-module-user-detail">
              <span className="gx-text-grey gx-link">robert@example.com</span>
            </div>
          </div>
        </div>

        
	</div>*/}
		
      <div className="gx-chat-sidenav-content">
        {/*<AppBar position="static" className="no-shadow chat-tabs-header">*/}
		
            <CustomScrollbars className="gx-chat-sidenav-scroll-tab-1">
			<div className="gx-sideTop">
   <div className="gx-nme">MensAjeria</div>
   <div className="gx-chatUsers">Chat General >></div>
   <div className="gx-sels">
      <span className="gx-imgcn">
      <img src="https://img.icons8.com/carbon-copy/2x/chat.png" />
      </span>
      <p className="gx-textsecd">
         <span className="dek1">Juan Salas </span> Ya hicieron la tarea? Examen manana 
      </p>
      <div className=" gx-rsi">
         <span className="gx-bg-primary gx-rounded-circle gx-badge gx-text-white">10</span>
      </div>
   </div>
</div>
<div className="gx-sideSecnd">
   <div className="gx-chatUsers">Chat De GRUPOS >></div>
   <div className="gx-allchat">
      <span className="gx-imgcn"><img src="https://image.flaticon.com/icons/png/512/94/94755.png" /></span>
      <div className="gx-text2">
         <p>LOS ACOPLADOS</p>
         <span>
         <span className="dek1">Juan </span>
         BRAYAN Dande estan..</span>
      </div>
      <div className=" gx-rsi">
         <span className="gx-bg-primary gx-rounded-circle gx-badge gx-text-white">10</span>
      </div>
   </div>
   <div className="gx-allchat">
      <span className="gx-imgcn"><img src="https://image.flaticon.com/icons/png/512/94/94755.png" /></span>
      <div className="gx-text2">
         <p>LOS PENDEJOS</p>
         <span>
         <span className="dek1">BRAYAN </span>
         BRAYAN Dande estan..</span>
      </div>
   </div>
   <div className="gx-allchat">
      <span className="gx-imgcn"><img src="https://image.flaticon.com/icons/png/512/94/94755.png" /></span>
      <div className="gx-text2">
         <p>LOS 3 MOSQUETEROS</p>
         <span>
         <span className="dek1">Juan </span>
         Ya hicieron la tarea</span>
      </div>
   </div>
   <div className="gx-chatUsers">Personas  >> </div>
</div>
      

              {this.state.chatUsers.length === 0 ?
                <div className="gx-p-5">{this.state.userNotFound}</div>
                :
                <ChatUserList chatUsers={this.state.chatUsers}
                              selectedSectionId={this.state.selectedSectionId}
                              onSelectUser={this.onSelectUser.bind(this)}/>
              }

              
            </CustomScrollbars>

          {/*<TabPane label={<IntlMessages id="chat.contacts"/>} tab={<IntlMessages id="chat.contacts"/>} key="2">
            <CustomScrollbars className="gx-chat-sidenav-scroll-tab-2">
              {
                this.state.contactList.length === 0 ?
                  <div className="gx-p-5">{this.state.userNotFound}</div>
                  :
                  <ContactList contactList={this.state.contactList}
                               selectedSectionId={this.state.selectedSectionId}
                               onSelectUser={this.onSelectUser.bind(this)}/>
              }
            </CustomScrollbars>
          </TabPane>*/}


      </div>
    </div>
  };
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.submitComment();
    }
  };

  handleChange = (event, value) => {
    this.setState({selectedTabIndex: value});
  };

  handleChangeIndex = index => {
    this.setState({selectedTabIndex: index});
  };
  onSelectUser = (user) => {
    this.setState({
      loader: true,
      selectedSectionId: user.id,
      drawerState: this.props.drawerState,
      selectedUser: user,
      conversation: this.state.conversationList.find((data) => data.id === user.id)
    });
    setTimeout(() => {
      this.setState({loader: false});
    }, 1500);
  };
  showCommunication = () => {
    return (
      <div className="gx-chat-box">
        {this.state.selectedUser === null ?
          <div className="gx-comment-box">
            <div className="gx-fs-80"><i className="icon icon-chat gx-text-muted"/></div>
            <h1 className="gx-text-muted">{<IntlMessages id="chat.selectUserChat"/>}</h1>
            <Button className="gx-d-block gx-d-lg-none" type="primary"
                    onClick={this.onToggleDrawer.bind(this)}>{<IntlMessages
              id="chat.selectContactChat"/>}</Button>

          </div>
          : this.Communication()}
      </div>)
  };

  constructor() {
    super();
    this.state = {
      loader: false,
      userNotFound: 'No user found',
      drawerState: false,
      selectedSectionId: '',
      selectedTabIndex: 1,
      userState: 1,
      searchChatUser: '',
      contactList: users.filter((user) => !user.recent),
      selectedUser: null,
      message: '',
      chatUsers: users.filter((user) => user.recent),
      conversationList: conversationList,
      conversation: null
    }
  }

  submitComment() {
    if (this.state.message !== '') {
      const updatedConversation = this.state.conversation.conversationData.concat({
        'type': 'sent',
        'message': this.state.message,
        'sentAt': Moment().format('hh:mm:ss A'),
      });
      this.setState({
        conversation: {
          ...this.state.conversation, conversationData: updatedConversation
        },
        message: '',
        conversationList: this.state.conversationList.map(conversationData => {
          if (conversationData.id === this.state.conversation.id) {
            return {...this.state.conversation, conversationData: updatedConversation};
          } else {
            return conversationData;
          }
        })
      });
    }
  }

  updateMessageValue(evt) {
    this.setState({
      message: evt.target.value
    });
  }

  updateSearchChatUser(evt) {
    this.setState({
      searchChatUser: evt.target.value,
      contactList: this.filterContact(evt.target.value),
      chatUsers: this.filterUsers(evt.target.value)
    });
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {loader, userState, drawerState} = this.state;
    return (
      <div className="gx-main-content">
        <div className="gx-app-module gx-chat-module">
          <div className="gx-chat-module-box">
            <div className="gx-d-block gx-d-lg-none">
              <Drawer
                placement="left"
                closable={false}
                visible={drawerState}
                onClose={this.onToggleDrawer.bind(this)}>
                {userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}
              </Drawer>
            </div>
            <div className="gx-chat-sidenav gx-d-none gx-d-lg-flex">
              {userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}
            </div>
            {loader ?
              <div className="gx-loader-view">
                <CircularProgress/>
              </div> : this.showCommunication()
            }
          </div>
        </div>
      </div>
    )
  }
}


export default Chat;
