import React from 'react';
import { Radio,Form,Button, AutoComplete } from 'antd';
var GoodxFunctionCss=require('./goodxfunction.css');
class GoodxFunctionPage extends React.Component{
   
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={GoodxFunctionCss.all}>
                <div >
                    <div className={GoodxFunctionCss.one}>功能管理</div> 
                </div>
                <div>
                    <div className={GoodxFunctionCss.two}>
                        <Form>
                           <Form.Item label="发布权限" >
                            {getFieldDecorator('radio-group1')(
                                <Radio.Group>
                                <Radio value="1">仅老师</Radio>
                                <Radio value="2">自动公开</Radio>
                               
                                </Radio.Group>,
                            )}
                            </Form.Item>
                        
                            <Form.Item label="浏览权限">
                                {getFieldDecorator('radio-group2')(
                                    <Radio.Group>
                                    <Radio value="1">仅老师</Radio>
                                    <Radio value="2">所有人</Radio>
                                
                                    </Radio.Group>,
                                )}
                            </Form.Item> 
                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                <Button type="primary" htmlType="submit">
                                    保存
                                </Button>
                                </Form.Item>
                        </Form>
                        
                    </div>
                </div>
            </div>
        )
    }
}
const WrappedGoodxFunctionPage = Form.create({ name: 'validate_other' })(GoodxFunctionPage);
export default WrappedGoodxFunctionPage;