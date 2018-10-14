import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions"

const SET_INPUT = 'input/SET_INPUT';
// 액션 타입 형식.
// (프로젝트/)리듀서name/액션타입

export const setInput = createAction(SET_INPUT);
// 액션 생성 함수 아래코드보다 편리.
// export const setInput = (index) => ({
//     type: types.SET_INPUT,
//     index
// })

const initialState = Map({
    value: ''
});
// 초기값 셋팅

export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload);
    }
}) // 리듀서 생성

//Ducks 구조로 만들기 완료.