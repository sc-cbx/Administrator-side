import React from 'react'
import { Avatar,Upload,Icon,message,Form,Input,Button,AutoComplete } from 'antd';

var GoodxAddCss=require('./goodxadd.css');

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
const { TextArea } = Input;
class GoodxAdd extends React.Component{
    state = {
        loading: false,
      };
    
      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
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

    render(){
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          const { imageUrl } = this.state;
        
    


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
            <div className={GoodxAddCss.all}>
                <div>
                    <div className={GoodxAddCss.one}>添加优秀志愿项目</div> 
                </div>
                <div className={GoodxAddCss.down}>
                    <div className={GoodxAddCss.left}>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                        </Upload>
                    </div>
                    <div  className={GoodxAddCss.right}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label={<span>称号</span>} >
                        <Input />
                    </Form.Item>
                    <Form.Item label={<span>志愿地点</span>}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={<span>志愿组织组织</span>}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={<span>描述</span>}>
                        <TextArea rows={4} style={{width:600,height:150,marginLeft:10,marginTop:50}}/>
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
const WrappedGoodxAdd = Form.create({ name: 'register' })(GoodxAdd);
export default WrappedGoodxAdd;