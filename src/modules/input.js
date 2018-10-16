import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions"

const SET_INPUT = 'input/SET_INPUT';
// 액션 타입 형식.
// (프로젝트/)리듀서name/액션타입
// 기존st 코드
// export const SET_INPUT = 'SET_INPUT' 

export const setInput = createAction(SET_INPUT);
// setInput('ABC') || setInput({a: 1, b: '3'});
// {
//      type: 'input/SET_INPUT'   
//      payload: 'ABC' || { a: 1, b: '3' }
// }
// 액션 생성 함수 기존.
// export const setInput = (index) => ({
//     type: types.SET_INPUT,
//     index
// })


const initialState = Map({
    value: ''
});
// 초기값 셋팅 (immutable 사용)

export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload);
    }
}) // 리듀서 생성

//Ducks 구조로 만들기 완료.