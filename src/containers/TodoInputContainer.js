import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// 액션 생성함수 불러오기
import * as inputActions from '../modules/input'
import * as todosActions from '../modules/todos'

class TodoInputContainer extends Component {
    id = 1
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const { value } = e.target;
        const { InputActions } = this.props;
        InputActions.setInput(value);
    }

    handleInsert = () => {
        const { InputActions, TodosActions, value } = this.props;
        const todo = {
            id: this.getId(),
            text: value,
            done: false
        };
        TodosActions.insert(todo);
        InputActions.setInput('');
    }

    render() {
        const { value } = this.props;
        const { handleChange, handleInsert } = this;
        return (
            <TodoInput
                onChange={ handleChange }
                onInsert={ handleInsert }
                value={ value }
            />
        )
    }   
}

export default connect(
    (state) => ({
        value: state.input.value
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
    // Actions들을 일일이 dipatch해주지 않아도 알아서 해준다.
    // InputActions: {
    //     setInput: (val) => dispatch(inputActions.setInput(val))
    // }
)(TodoInputContainer);