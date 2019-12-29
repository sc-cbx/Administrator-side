import React from 'react';
import { Form, Upload, Icon, Modal, Input, Button } from 'antd';

const { TextArea } = Input;

var FoodAddCss=require('./foodadd.css')
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
      content: '添加成功！',
    });
  }
export default class FoodAdd extends React.Component{
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
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
          <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>
        );
        return(
            <div className={FoodAddCss.all}>
            
                    <div className={FoodAddCss.one}>添加商品</div> 
                
                <div className={FoodAddCss.di}>
                    <Form className={FoodAddCss.form}>
                        <Form.Item className={FoodAddCss.item}>
                                <h1 className={FoodAddCss.h1}>商品名称：</h1>
                                <Input className={FoodAddCss.in1}/>
                        </Form.Item>
                        <Form.Item className={FoodAddCss.item}>
                                 <h1 className={FoodAddCss.h1}>简述：</h1>
                                <Input className={FoodAddCss.in1}/>
                        </Form.Item>
                        <Form.Item className={FoodAddCss.item}>
                            <h2 className={FoodAddCss.h1}>价格：</h2>
                            <Input className={FoodAddCss.in1}/>
                        </Form.Item>
                        <Form.Item className={FoodAddCss.item}>
                            <h2 className={FoodAddCss.h1}>口味：</h2>
                            <Input className={FoodAddCss.in1}/>
                        </Form.Item>
                        <Form.Item className={FoodAddCss.item}>
                            <h4 className={FoodAddCss.h1}>联系方式：</h4>
                            <Input className={FoodAddCss.in1}/>
                        </Form.Item>
                        <Form.Item className={FoodAddCss.item}>
                            <h5 className={FoodAddCss.h1}>商品详情：</h5>
                            <TextArea rows={4} autoSize  className={FoodAddCss.in1}/>
                        </Form.Item>
                        <Form.Item className={FoodAddCss.item1}>
                            <div className={FoodAddCss.clearfix}>
                                <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" fileList={fileList}
                                onPreview={this.handlePreview} onChange={this.handleChange}> {fileList.length >= 4 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={success} className={FoodAddCss.suc}>发布</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}