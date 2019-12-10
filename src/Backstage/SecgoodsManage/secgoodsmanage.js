import React from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
var SecgoodsManageCss=require('./secgoodsmanage.css')
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}
export default class ArticleManagePage extends React.Component{
    constructor(props) {
        super(props);
        this.columns = [
          {
            title: '发布人',
            dataIndex: 'username',
            width: '15%',
            editable: true,
          },
          {
            title: '商品名称',
            dataIndex: 'goodsname',
            width: '40%',
            editable: true,
          },
          {
            title: '商品描述',
            dataIndex: 'content',
            width: '45%',
            editable: true,
          },
          {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) =>
              this.state.dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                  <a href="javascript:;">删除</a>
                </Popconfirm>
              ) : null,
          },
        ];
    
        this.state = {
          dataSource: [
            {
              key: '1',
              username: 'sc',
              goodsname: '富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级',
              content:'相机入手了了3个月，只用过两次，平常太忙，没时间使用，低价出售，保证质量没有问题，详情可咨询。',
            },
            {
              key: '1',
              username: 'sc',
              goodsname: '富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级',
              content:'相机入手了了3个月，只用过两次，平常太忙，没时间使用，低价出售，保证质量没有问题，详情可咨询。',
            },
            {
              key: '2',
              username: 'sc',
              goodsname: '富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级',
              content:'相机入手了了3个月，只用过两次，平常太忙，没时间使用，低价出售，保证质量没有问题，详情可咨询。',
            },
            {
              key: '3',
              username: 'sc',
              goodsname: '富士相机mini7C傻瓜可爱7s升级套餐含拍立得相纸男女学生款入门级',
              content:'相机入手了了3个月，只用过两次，平常太忙，没时间使用，低价出售，保证质量没有问题，详情可咨询。',
            },
          ],
          count: 2,
        };
      }
    
      handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
      };
    
      handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
          key: 'count',
          name: '题目',
          time: '时间',
        };
        this.setState({
          dataSource: [...dataSource, newData],
          count: count + 1,
        });
      };
    
      handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ dataSource: newData });
      };
    render(){
        const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
        return(
            <div className={SecgoodsManageCss.all}>
                <div >
                    <div className={SecgoodsManageCss.one}>闲置管理</div> 

                </div>
                <div>
                    <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 ,marginTop:20,marginLeft:40}}>
                    增加
                    </Button>
                    <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    style={{ marginLeft:40,width:1600}}/>
                </div>
            </div>
        )
    }
}