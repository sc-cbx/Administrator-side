import React from 'react';
import { Radio,Form,Modal,Button, AutoComplete } from 'antd';
var HelpFunctionCss=require('./helpfunction.css');
function success() {
    Modal.success({
      content: '保存成功！',
    });
  }
class HelpFunction extends React.Component{
   
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={HelpFunctionCss.all}>
                <div >
                    <div className={HelpFunctionCss.one}>功能管理</div> 
                </div>
                <div>
                    <div className={HelpFunctionCss.two}>
                        <Form>
                           <Form.Item label="发布权限" >
                            {getFieldDecorator('radio-group1')(
                                <Radio.Group>
                                <Radio value="1">仅用户</Radio>
                                <Radio value="2">所有人</Radio>
                               
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
const WrappedHelpFunction = Form.create({ name: 'validate_other' })(HelpFunction);
export default WrappedHelpFunction;