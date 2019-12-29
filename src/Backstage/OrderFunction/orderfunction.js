import React from 'react';
import { Radio,Form,Button, AutoComplete } from 'antd';
var OrderFunctionCss=require('./orderfunction.css');
class OrderFunctionPage extends React.Component{
   
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={OrderFunctionCss.all}>
                <div >
                    <div className={OrderFunctionCss.one}>功能管理</div> 
                </div>
                <div>
                    <div className={OrderFunctionCss.two}>
                        <Form>
                           <Form.Item label="处理权限" >
                            {getFieldDecorator('radio-group1')(
                                <Radio.Group>
                                <Radio value="1">仅管理员</Radio>
                                <Radio value="2">所有人</Radio>
                               
                                </Radio.Group>,
                            )}
                            </Form.Item>
                        
                            <Form.Item label="浏览权限">
                                {getFieldDecorator('radio-group2')(
                                    <Radio.Group>
                                    <Radio value="1">仅管理员</Radio>
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
const WrappedOrderFunctionPage = Form.create({ name: 'validate_other' })(OrderFunctionPage);
export default WrappedOrderFunctionPage;