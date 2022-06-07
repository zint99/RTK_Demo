const { createSlice } = require("@reduxjs/toolkit");
const stuSlice = createSlice({
    name: 'stu',
    initialState: {
        name: '周杰伦',
        age: 38,
        gender: '男',
        address: '台湾'
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload
        },
        setAge(state, action) {
            state.age = action.payload
        }
    }
})

export const { reducer: stuReducer } = stuSlice
export const { setAge, setName } = stuSlice.actions
