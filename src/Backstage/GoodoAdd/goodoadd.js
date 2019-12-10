import React from 'react'
import { Avatar,Form,Input,Button,AutoComplete } from 'antd';

var GoodoAddCss=require('./goodoadd.css');


function handleChange(value) {
    console.log(`selected ${value}`);
  }
const { TextArea } = Input;
class GoodoAdd extends React.Component{
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

    render(){
        
        const { getFieldDecorator } = this.props.form;


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
 

    
        return(
            <div className={GoodoAddCss.all}>
                <div>
                    <div className={GoodoAddCss.one}>添加优秀志愿组织</div> 
                </div>
                <div className={GoodoAddCss.down}>
                    <div className={GoodoAddCss.left}>
                        <Avatar size={100} icon="user" />
                    </div>
                    <div  className={GoodoAddCss.right}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label={<span>名称</span>} >
                        <Input />
                    </Form.Item>
                    <Form.Item label={<span>部长</span>}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={<span>人数</span>}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={<span>重大贡献</span>}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={<span>宣传标语标语</span>}>
                        <TextArea rows={4} style={{width:600,height:150,marginLeft:10,marginTop:50}}/>
                    </Form.Item>
                    <Form.Item label={<span>联系方式</span>}>
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
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
const WrappedGoodoAdd = Form.create({ name: 'register' })(GoodoAdd);
export default WrappedGoodoAdd;