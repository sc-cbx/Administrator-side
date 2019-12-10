import React from 'react';
import { Radio,Form,Button,Modal} from 'antd';
var UserbackFunctionCss=require('./userbackfunction.css');
function success() {
    Modal.success({
      content: '保存成功！',
    });
  }
class UserbackFunctionPage extends React.Component{
   
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={UserbackFunctionCss.all}>
                <div >
                    <div className={UserbackFunctionCss.one}>功能管理</div> 
                </div>
                <div>
                    <div className={UserbackFunctionCss.two}>
                        <Form>
                            <Form.Item label="浏览权限">
                                {getFieldDecorator('radio-group2')(
                                    <Radio.Group>
                                    <Radio value="1">管理员</Radio>
                                    <Radio value="2">用户</Radio>
                                    <Radio value="3">所有人</Radio>
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
const WrappedUserbackFunctionPage = Form.create({ name: 'validate_other' })(UserbackFunctionPage);
export default WrappedUserbackFunctionPage;