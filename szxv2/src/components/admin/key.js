import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button, Form, Input, Table} from 'antd';

import Img5 from '../../assets/images/img5.png'
import QrCode from '../../assets/images/qr-code.png'

class Key extends Component {

  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        name:'Hello world!',
        isShowPwdModal: false
      };
  }

  handleClick = (e) => {
    console.log('this is:', this);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({ isShowPwdModal: false });
    window.$utils.showMessage('error', 'error', '-1');
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
  }

  render() {
    return (
      <div>
        <div className="borderShadow p20">
          <Row className="mb10">
            <Col span={4} className="tr">
            Access Key :
            </Col>
            <Col span={20}>
              <div className="ml10">
                <Input style={{width: 400}} />
                <Button className="ml10">复制Key</Button>
              </div>
            </Col>
          </Row>
          <Row className="mb10">
            <Col span={4} className="tr">
            Access Secret :
            </Col>
            <Col span={20}>
              <div className="ml10">
                <Input.Password  style={{width: 400}} />
                <Button className="ml10">复制Secret</Button>
                <Button className="ml10">重新生成</Button>
              </div>
            </Col>
          </Row>
          <Row className="mb10">
            <Col span={4} className="tr">
            API Token :
            </Col>
            <Col span={20}>
              <div className="ml10">
                <Input style={{width: 400}} placeholder="token123456789kljowjkejhvkn" />
                <Button className="ml10">复制Token</Button>
                <Button className="ml10">重新获取Token</Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt20 fc004ea1">
          <span className="ml20 fs14 bold">如何使用数据</span>
        </div>
        <div className="borderShadow mt20 ptb40">
          <div className="p40">
            <Row className="step">
              <Col span={6} className="step-item">
                <div>注册登录</div>
                <p>注册成为深证信用户或使用巨潮账号登录</p>
              </Col>
              <Col span={6} className="step-item">
                <div>获取凭证</div>
                <p>在个人中心获取个人专属凭证</p>
              </Col>
              <Col span={6} className="step-item">
                <div>开发程序</div>
                <p>参考文档中心代码样例或自行开发程序</p>
              </Col>
              <Col span={6} className="step-item">
                <div>调用数据</div>
                <p>参考文档中心API文档调用需要的数据</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Key;
