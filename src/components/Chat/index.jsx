/* eslint-disable react/display-name */
/**
 * Created by ed on 17/03/2018.
 */

'use strict';

import React from 'react';

import 'index.scss';
import {Button, Col, FormControl, Grid, Row} from 'react-bootstrap';
import ChatAPI from '../ChatApi/ChatApi';

import Scroll from 'react-scroll';
let Element = Scroll.Element;
let scroller = Scroll.scroller;

import '../styles/chat.scss';

import cleverModule from '../../veryCleverModule';

export default class extends React.Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.state = {
      value: '',
      messages: [],
    };
    this.messageId = 0;
  }

  sendMessage(){
    if(this.state.value === '')
      return;
    this.addMessage({user: 'Я', text: this.state.value});
    cleverModule.sendMessage(this.state.value).then(fullfillment => {
      console.log(response);
      this.addMessage({user: 'Bot', text: fullfillment});
    });
    this.setState({value: ''});
  }

  handleChange(e){
    this.setState({ value: e.target.value });
  }

  addMessage(message){
    this.setState({ messages: this.state.messages.concat({
          id:this.messageId++,
          user: message.user,
          text: message.text,
        }
      )});
    let chat = document.getElementById("chatbot-message");
    let h = chat.scrollHeight;
    chat.scrollTop = h;
  }


  componentDidMount(){
    let input = document.getElementById('chatbot-input');
    input.onkeypress = (event) => {
      if(event.key === 'Enter'){
        this.sendMessage();
      }
    }
  }

  render () {

    return (
      <div id="chatbot">
        <div id="chatbot-message">
          <Element><span className="user">Bot: </span>Привет, чем могу помочь?</Element>
          {
            this.state.messages.map(message =>
              (<Element name={`message${message.id}`} key={message.id}><span className="user">{`${message.user}: `}</span>{message.text}</Element>)
            )
          }
        </div>
        <div>
          <div className="input-group">
            <FormControl
              id="chatbot-input"
              className="form-control"
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <div className="input-group-btn">
              <Button id="chatbot-submit" onClick={this.sendMessage} className="btn btn-default">Send</Button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
