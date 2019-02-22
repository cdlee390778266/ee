import React from 'react'
import { Input, Checkbox, Icon, Pagination, Button  } from 'antd';

import logo from '../../../assets/images/logo.png';
import banner from '../../../assets/images/banner.png';

export default class SupportIndex extends React.Component {

  render () {
    return (

      <div className="company">
        <div className="banner">
          <img src={banner} className='banner' alt="轮播图"/>
        </div>
        <div className="company-wrap">
            <div className="company-name">
              <div className="logo-name"><img src={logo} alt="logo"/>深圳证券信息技术有限公司</div>
              <div className="info">深圳证券信息有限公司成立于1994年，是深交所全资子公司，是国内最早从事互联网证券信息服务的专业机构。公司自2000年以来成功构建了以数据库为基础、以信息披露为核心、集网站和新媒体终端等于一体的多层次资本市场跨媒体信息传播体系，打造出巨潮网、深证/国证系列指数等财经知名品牌，成为中国资本市场信息服务领域的领先企业。</div>
              <div className="name">供应商简称：深证信</div>
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