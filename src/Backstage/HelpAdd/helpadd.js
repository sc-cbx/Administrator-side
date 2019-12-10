import React from 'react'
import {Form,Input,Button,  Upload, Icon, Modal  } from 'antd';

var HelpAddCss=require('./helpadd.css');

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  function success() {
    Modal.success({
      content: '发布成功！',
    });
  }
function handleChange(value) {
    console.log(`selected ${value}`);
  }
const { TextArea } = Input;
class HelpAdd extends React.Component{
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
      state = {
        previewVisible: false,
        previewImage: '',
        fileList: [
          
        ],
      };
    
      handleCancel = () => this.setState({ previewVisible: false });
    
      handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
    
        this.setState({
          previewImage: file.url || file.preview,
          previewVisible: true,
        });
      };
    
      handleChange = ({ fileList }) => this.setState({ fileList });
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
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    
        return(
            <div className={HelpAddCss.all}>
                <div>
                    <div className={HelpAddCss.one}>添加求助</div> 
                </div>
                <div className={HelpAddCss.down}>
                    <div  className={HelpAddCss.right}>
                    <Form className={HelpAddCss.form}>
                        <Form.Item className={HelpAddCss.item}>
                                <h1 className={HelpAddCss.h1}>求助事情：</h1>
                                <Input className={HelpAddCss.in1}/>
                        </Form.Item>
                        <Form.Item className={HelpAddCss.item}>
                                 <h1 className={HelpAddCss.h1}>描述：</h1>
                                <Input className={HelpAddCss.in1}/>
                        </Form.Item>
                        <Form.Item className={HelpAddCss.item}>
                            <h2 className={HelpAddCss.h1}>要求：</h2>
                            <Input className={HelpAddCss.in1}/>
                        </Form.Item>
                        <Form.Item className={HelpAddCss.item}>
                            <h2 className={HelpAddCss.h1}>详情联系：</h2>
                            <Input className={HelpAddCss.in1}/>
                        </Form.Item>
                        <Form.Item className={HelpAddCss.item1}>
                            <div className="clearfix">
                                <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" fileList={fileList}
                                onPreview={this.handlePreview} onChange={this.handleChange}> {fileList.length >= 4 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={success} className={HelpAddCss.suc}>发布</Button>
                        </Form.Item>
                    </Form>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
const WrappedHelpAdd = Form.create({ name: 'register' })(HelpAdd);
export default WrappedHelpAdd;