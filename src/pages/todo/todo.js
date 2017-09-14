import React from 'react';
import { Input, Button, Tag } from 'antd';
import './todo.less';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoList: []
        };
    }

    submit() {
        let input = this.refs.input;
        input = input.refs.input;
        let value = input.value;

        if (value) {
            this.setState({
                todoList: this.state.todoList.concat({value: value, color: this.getColor()})
            });
        }

        input.value = '';
    }

    getColor() {
        let arr = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple'];
        let id = Math.floor(Math.random() * (7 - 0));

        return arr[id];
    }
    
    render() {
        return (
            <div className="todo-wrap" style={{ marginBottom: 16 }}>
                <div className="input">
                    <Input ref="input" style={{width: 400, marginRight: 20}} placeholder="输入要做的事" />
                    <Button type="primary" onClick={this.submit.bind(this)}>添加</Button>
                </div>
                <ul className="todo-list">
                    {
                        this.state.todoList.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <Tag color={item.color}>{item.value}</Tag>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}