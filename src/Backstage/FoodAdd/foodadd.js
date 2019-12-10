import React from 'react';
import { Input,Button } from 'antd';

const { TextArea } = Input;

var FoodAddCss=require('./foodadd.css')
export default class FoodAdd extends React.Component{
    render(){
        return(
            <div className={FoodAddCss.all}>
                <div >
                    <div className={FoodAddCss.one}>添加活动内容</div> 
                </div>
                <div>
                    <div>
                        <label className={FoodAddCss.label}>题目：</label>
                        <Input placeholder="title" style={{width:200,height:40,marginTop:20}}></Input>
                    </div>
                    <div>
                        <TextArea rows={4} style={{width:850,height:600,marginLeft:50,marginTop:20}}/>
                    </div>
                    <div>
                    <Button type="primary" htmlType="submit" style={{width:100,height:30,marginTop:20,marginLeft:800}}>保存</Button>
                    </div>
                </div>
            </div>
        )
    }
}