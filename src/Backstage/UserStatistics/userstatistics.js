import React from 'react'
import { Statistic,Card,Icon,Progress, Row, Col, Button,Divider  } from 'antd';

var UserStatisticsCss=require('./userstatistics.css');

export default class UserStatistics extends React.Component{
    render(){
        return(
            <div className={UserStatisticsCss.all}>
                <div >
                    <div className={UserStatisticsCss.one}>统计分析</div> 
                </div>
                <div className={UserStatisticsCss.two}>
                    <div className={UserStatisticsCss.twodiv}>用户人数统计</div>
                    <Statistic value={148}  title="本月用户新增数"  valueStyle={{fontSize:'1.4em',color:'blue'}} className={UserStatisticsCss.statistic1}/>
                    <Statistic value={1200} title="用户总数量" valueStyle={{fontSize:'1.4em',color:'red'}} className={UserStatisticsCss.statistic1}/>
                </div>
                <div className={UserStatisticsCss.three}>
                    <div className={UserStatisticsCss.twodiv}>用户注册/消情况</div>
                        <Statistic title="注册人数" value={11.28} precision={2} valueStyle={{fontSize:'1.4em', color: '#3f8600' }} prefix={<Icon type="arrow-up"/>}  suffix="%" className={UserStatisticsCss.statistic2}/>
                        <Statistic title="注销人数" value={9.3} precision={2} valueStyle={{fontSize:'1.4em', color: '#cf1322' }} prefix={<Icon type="arrow-down"/>} suffix="%" className={UserStatisticsCss.statistic2}/>
                </div>
                
                <div className={UserStatisticsCss.four}>
                    <div className={UserStatisticsCss.fourdiv}>使用时长</div>
                    <div className={UserStatisticsCss.time}>
                        <div className={UserStatisticsCss.name}>肖露：</div>
                        <Progress percent={94} status="active" className={UserStatisticsCss.active}/>
                    </div>
                    <div className={UserStatisticsCss.time}>
                    <div className={UserStatisticsCss.name}>何婷：</div>
                        <Progress percent={84} status="active"  className={UserStatisticsCss.active}/>
                    </div>
                    <div className={UserStatisticsCss.time}>
                        <div className={UserStatisticsCss.name}>玥玥：</div>
                        <Progress percent={48} status="active"  className={UserStatisticsCss.active}/>
                    </div>
                    <div className={UserStatisticsCss.time}>
                        <div className={UserStatisticsCss.name}>湘芹：</div>
                        <Progress percent={54} status="active"  className={UserStatisticsCss.active}/>
                    </div>  
                    <div className={UserStatisticsCss.time}>
                        <div className={UserStatisticsCss.name}>莉莉：</div>
                        <Progress percent={51} status="active"  className={UserStatisticsCss.active}/>
                    </div>
                </div>
            </div>
        )
    }
}