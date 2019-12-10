import React from 'react';
import { Radio,Modal,Form,Button, AutoComplete } from 'antd';
var SecgoodsFunctionCss=require('./secgoodsfunction.css');
function success() {
    Modal.success({
      content: '保存成功！',
    });
  }
class SecgoodsFunction extends React.Component{
   
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={SecgoodsFunctionCss.all}>
                <div >
                    <div className={SecgoodsFunctionCss.one}>功能管理</div> 
                </div>
                <div>
                    <div className={SecgoodsFunctionCss.two}>
                        <Form>
                           <Form.Item label="发布权限" >
                            {getFieldDecorator('radio-group1')(
                                <Radio.Group>
                                <Radio value="1">仅用户</Radio>
                                <Radio value="2">自动公开</Radio>
                               
                                </Radio.Group>,
                            )}
                            </Form.Item>
                        
                            <Form.Item label="浏览权限">
                                {getFieldDecorator('radio-group2')(
                                    <Radio.Group>
                                    <Radio value="1">仅用户</Radio>
                                    <Radio value="2">所有人</Radio>
                                
                                    </Radio.Group>,
                                )}
                            </Form.Item> 
                            <Form.Item label="购买权限">
                                {getFieldDecorator('radio-group3')(
                                    <Radio.Group>
                                    <Radio value="1">仅用户</Radio>
                                    <Radio value="2">所有人（用户，游客）</Radio>
                                
                                    </Radio.Group>,
                                )}
                            </Form.Item> 
                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                <Button onClick={success} type="primary" htmlType="submit">
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
const WrappedSecgoodsFunction= Form.create({ name: 'validate_other' })(SecgoodsFunction);
export default WrappedSecgoodsFunction;