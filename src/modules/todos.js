import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션타입 정의
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성
export const insert =  createAction(INSERT);
export const toggle =  createAction(TOGGLE);
export const remove =  createAction(REMOVE);

// 초기값 설정
// List immutable 사용. List([]) 안에 Map({}) 설정.
const initialState = List([
    Map({
        id: 0,
        text: '리액트 공부하기',
        done: true
    }),
    Map({
        id: 1,
        text: '컴포넌트 스타일링 해보기',
        done: false
    }),
])


export default handleActions({
    [INSERT]: (state, action) => {
        const { id, text, done } = action.payload;
        // 이 액션이 어떤 데이터를 처리하는지 쉽게 볼 수 있도록 레퍼런스를 만들어준다.
        // 비구조화 할당
        return state.push(Map({
            id,
            text,
            done
        }));
    },
    [TOGGLE]: (state, action) => {
        const { payload: index} = action;
        // const index = action.payload;
        // payload의 값을 index란 이름으로 지정.

        return state.updateIn([index, 'done'], done => !done);
        // updateIn : 현재의 값을 참조할 수있음.
    },
    [REMOVE]: (state, action) => {
        const { payload: index} = action;
        return state.delete(index);
    }
}, initialState);
