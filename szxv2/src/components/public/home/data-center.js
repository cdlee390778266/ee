import React from 'react'
import { Input, Checkbox, Icon, Pagination, Button  } from 'antd';
import { Link } from "react-router-dom";

import logo from '../../../assets/images/logo.png';

const Search = Input.Search;
export default class DataCenter extends React.Component {

  render () {
    return (
      <div className="wrap">
        <div className="content-wrap">
          <div className="filter-condition">
            <div className="sxtj">筛选条件</div>
            <div className="item1">
              <div className="type">用户类别</div>
              <div>
                <Checkbox>普通用户</Checkbox>
                <Checkbox>VIP用户</Checkbox>
              </div>
            </div>
            <div className="item1">
              <div className="type">价格类别</div>
              <div>
                <Checkbox>免费</Checkbox>
                <Checkbox>付费</Checkbox>
              </div>
            </div>
            <div className="item2">
              <div className="type">资产类别</div>
              <div>
                <Checkbox>沪深股票</Checkbox>
                <Checkbox>港股</Checkbox>
                <Checkbox>新三板</Checkbox>
                <Checkbox>基金</Checkbox>
                <Checkbox>债券</Checkbox>
                <Checkbox>私募基金</Checkbox>
                <Checkbox>期货期权</Checkbox>
                <Checkbox>指数</Checkbox>
                <Checkbox>其他</Checkbox>
              </div>
            </div>
            <div className="item3">
              <div className="type">业务类别</div>
              <div>
                <Checkbox>财务数据</Checkbox>
                <Checkbox>K线数据</Checkbox>
                <Checkbox>其他数据</Checkbox>
              </div>
            </div>
            <div className="item4">
              <div className="type">其他筛选条件</div>
              <div>
                <Checkbox>条件1</Checkbox>
                <Checkbox>K线数据</Checkbox>
                <Checkbox>其他数据</Checkbox>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div><Search placeholder="搜索数据类型，如：深圳股票、基金、行情" enterButton style={{ width: 850 }}/></div>
            <div>
              <div className="product">
                <div>
                  <span className="name">股票日行情包</span>
                  <div className="right">
                    <Icon type="like" theme="twoTone" className="like"/>
                    <span className="num">888</span>
                    <Icon type="star" theme="twoTone" className="star"/>
                    <span className="keep">收藏</span>
                  </div>
                </div>
                <div>
                  <Icon type="clock-circle" className="clock"/>
                  <span>上架时间：2019-01-20</span>
                  <Icon type="sync" className="sync"/>
                  <span>更新频率：日</span>
                </div>
                <div>
                  深圳市场股票日行情，日开盘价，收盘价，最高价，最低价。
                </div>
                <div className="property">
                  <span className="regular">普通用户</span>
                  <span className="free">免费</span>
                  <span className="other">其他属性</span>
                </div>

              </div>
              <div className="support">
                <div className="support-logo"><img src={logo} alt="logo"/></div>
                <div className="support-name">供应商：深证信</div>
              </div>
            </div>
            <div>
              <div className="product">
                <div>
                  <Link to='/product/package'className="name" >股票日行情包</Link>
                  <div className="right">
                    <Icon type="like" theme="twoTone" className="like"/>
                    <span className="num">888</span>
                    <Icon type="star" theme="twoTone" className="star"/>
                    <span className="keep">收藏</span>
                  </div>
                </div>
                <div>
                  <Icon type="clock-circle" className="clock"/>
                  <span>上架时间：2019-01-20</span>
                  <Icon type="sync" className="sync"/>
                  <span>更新频率：日</span>
                </div>
                <div>
                  深圳市场股票日行情，日开盘价，收盘价，最高价，最低价。
                </div>
                <div className="property">
                  <span className="regular">普通用户</span>
                  <span className="free">免费</span>
                  <span className="other">其他属性</span>
                </div>

              </div>
              <div className="support">
                <div className="support-logo"><img src={logo} alt="logo"/></div>
                <div className="support-name">供应商：深证信</div>
              </div>
            </div>
            <div>
              <div className="product">
                <div>
                  <span className="name">股票日行情包</span>
                  <div className="right">
                    <Icon type="like" theme="twoTone" className="like"/>
                    <span className="num">888</span>
                    <Icon type="star" theme="twoTone" className="star"/>
                    <span className="keep">收藏</span>
                  </div>
                </div>
                <div>
                  <Icon type="clock-circle" className="clock"/>
                  <span>上架时间：2019-01-20</span>
                  <Icon type="sync" className="sync"/>
                  <span>更新频率：日</span>
                </div>
                <div>
                  深圳市场股票日行情，日开盘价，收盘价，最高价，最低价。
                </div>
                <div className="property">
                  <span className="regular">普通用户</span>
                  <span className="free">免费</span>
                  <span className="other">其他属性</span>
                </div>

              </div>
              <div className="support">
                <div className="support-logo"><img src={logo} alt="logo"/></div>
                <div className="support-name">供应商：深证信</div>
              </div>
            </div>
            <div className="pagination">
              <div className="page"><Pagination showQuickJumper defaultCurrent={1} total={100} onChange={onChange} itemRender={itemRender} pageSize={3}/></div>
              <div className="jumper"><Button>确定</Button></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}
function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>上一页</a>;
  } if (type === 'next') {
    return <a>下一页</a>;
  }
  return originalElement;
}