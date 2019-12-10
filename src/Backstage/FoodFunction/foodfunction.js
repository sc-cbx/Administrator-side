import React from 'react';
import { Radio,Form,Button,Modal, AutoComplete } from 'antd';
var FoodFunctionCss=require('./foodfunction.css');
function success() {
    Modal.success({
      content: '保存成功！',
    });
  }
class FoodFunction extends React.Component{
   
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={FoodFunctionCss.all}>
                <div >
                    <div className={FoodFunctionCss.one}>功能管理</div> 
                </div>
                <div>
                    <div className={FoodFunctionCss.two}>
                        <Form>
                           <Form.Item label="发布权限" >
                            {getFieldDecorator('radio-group1')(
                                <Radio.Group>
                                <Radio value="1">仅商家</Radio>
                                <Radio value="2">自动公开</Radio>
                               
                                </Radio.Group>,
                            )}
                            </Form.Item>
                        
                            <Form.Item label="浏览权限">
                                {getFieldDecorator('radio-group2')(
                                    <Radio.Group>
                                    <Radio value="1">仅用户</Radio>
                                    <Radio value="2">所有人（游客，用户）</Radio>
                                
                                    </Radio.Group>,
                                )}
                            </Form.Item> 
                            <Form.Item label="购买权限">
                                {getFieldDecorator('radio-group3')(
                                    <Radio.Group>
                                    <Radio value="1">仅用户</Radio>
                                    <Radio value="2">所有人（游客，用户）</Radio>
                                
                                    </Radio.Group>,
                                )}
                            </Form.Item> 
                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                <Button type="primary" htmlType="submit"  onClick={success}>
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
const WrappedFoodFunction = Form.create({ name: 'validate_other' })(FoodFunction);
export default WrappedFoodFunction;