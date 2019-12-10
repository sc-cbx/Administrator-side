import React from 'react'
import { Statistic,Card,Icon,Progress, Row, Col, Button,Divider  } from 'antd';

var FoodStatisticsCss=require('./foodstatistics.css');

export default class FoodStatistics extends React.Component{
    render(){
        return(
            <div className={FoodStatisticsCss.all}>
                <div >
                    <div className={FoodStatisticsCss.one}>统计分析</div> 
                </div>
                <div className={FoodStatisticsCss.two}>
                    <div className={FoodStatisticsCss.twodiv}>用户人数统计</div>
                    <Statistic value={148}  title="本月用户新增数"  valueStyle={{fontSize:'1.4em',color:'blue'}} className={FoodStatisticsCss.statistic1}/>
                    <Statistic value={1200} title="用户总数量" valueStyle={{fontSize:'1.4em',color:'red'}} className={FoodStatisticsCss.statistic1}/>
                </div>
                <div className={FoodStatisticsCss.three}>
                    <div className={FoodStatisticsCss.twodiv}>用户注册/消情况</div>
                        <Statistic title="注册人数" value={11.28} precision={2} valueStyle={{fontSize:'1.4em', color: '#3f8600' }} prefix={<Icon type="arrow-up"/>}  suffix="%" className={FoodStatisticsCss.statistic2}/>
                        <Statistic title="注销人数" value={9.3} precision={2} valueStyle={{fontSize:'1.4em', color: '#cf1322' }} prefix={<Icon type="arrow-down"/>} suffix="%" className={FoodStatisticsCss.statistic2}/>
                </div>
                
                <div className={FoodStatisticsCss.four}>
                    <div className={FoodStatisticsCss.fourdiv}>使用时长</div>
                    <div className={FoodStatisticsCss.time}>
                        <div className={FoodStatisticsCss.name}>肖露：</div>
                        <Progress percent={94} status="active" className={FoodStatisticsCss.active}/>
                    </div>
                    <div className={FoodStatisticsCss.time}>
                    <div className={FoodStatisticsCss.name}>何婷：</div>
                        <Progress percent={84} status="active"  className={FoodStatisticsCss.active}/>
                    </div>
                    <div className={FoodStatisticsCss.time}>
                        <div className={FoodStatisticsCss.name}>玥玥：</div>
                        <Progress percent={48} status="active"  className={FoodStatisticsCss.active}/>
                    </div>
                    <div className={FoodStatisticsCss.time}>
                        <div className={FoodStatisticsCss.name}>湘芹：</div>
                        <Progress percent={54} status="active"  className={FoodStatisticsCss.active}/>
                    </div>  
                    <div className={FoodStatisticsCss.time}>
                        <div className={FoodStatisticsCss.name}>莉莉：</div>
                        <Progress percent={51} status="active"  className={FoodStatisticsCss.active}/>
                    </div>
                </div>
            </div>
        )
    }
}