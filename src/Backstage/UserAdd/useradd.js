import React from 'react'
import { Avatar,Form,Input,Modal,Radio,Select,Row,Col,Checkbox,Button,AutoComplete } from 'antd';

var UserAddCss=require('./useradd.css');
const { TextArea } = Input;
function success() {
  Modal.success({
    content: '保存成功！',
  });
}
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

class UserAdd extends React.Component{
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    
      handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };
    
      compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      };
    

    render(){
        
        const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '2018',
    })(
      <Select style={{ width: 100 }}>
        <Option value="2018">+2018</Option>
        <Option value="2017">+2019</Option>
        <Option value="2017">+2017</Option>
      </Select>,
    );

    
        return(
            <div className={UserAddCss.all}>
                <div>
                    <div className={UserAddCss.one}>添加用户</div> 
                </div>
                <div className={UserAddCss.down}>
                    <div className={UserAddCss.left}>
                        <Avatar size={100} icon="user" />
                    </div>
                    <div  className={UserAddCss.right}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label={<span>用户名</span>}>
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: '请输入姓名!', whitespace: true }],
                        })(<Input style={{width:200}}/>)}
                    </Form.Item>
                    <Form.Item label="密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                            ],
                        })(<Input.Password  style={{width:250}}/>)}
                    </Form.Item>
                    <Form.Item label="性别">
                    {getFieldDecorator('gender', {
                        rules: [{ required: true,  }],
                      })(
                      <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio value={1}>男</Radio>
                        <Radio value={2}>女</Radio>
                      </Radio.Group>)}
                    </Form.Item>
                    <Form.Item label={<span>QQ邮箱</span>}>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: '请输入邮箱!', whitespace: true }],
                                    })(<Input style={{width:300}}/>)}
                    </Form.Item>
        
                    <Form.Item label="自我介绍">
                      <TextArea rows={4} autoSize />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
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
const WrappedUserAdd = Form.create({ name: 'register' })(UserAdd);
export default WrappedUserAdd;