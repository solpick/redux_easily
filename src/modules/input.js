import produce from "immer";
import { handleActions, createAction } from "redux-actions";

// 액션 타입 형식.
const SET_INPUT = 'input/SET_INPUT';
// (프로젝트/)리듀서name/액션타입
// 기존st 코드
// export const SET_INPUT = 'SET_INPUT' 

// 액션 생성
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


// 초기값 셋팅 (immutable 사용)
const initialState = {
    value: ''
}

 // 리듀서 생성
export default handleActions({
    [SET_INPUT]: (state, action) => {
        //produce 함수를 작성, param으로 현재 상태(currentState), draft(다음상태가 될 것)를 받는다.
        return produce(state, draft => {
            draft.value = action.payload
        });
    }
}, initialState);

//Ducks 구조로 만들기 완료.