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
// list.get(n); 
// List 배열의 인덱스 번호로 접근.
// list.getIn([0, 'value'])
// getIn으로 인덱스와, 키값을 넣어 값 읽어오기.
