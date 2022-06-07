const { createSlice } = require("@reduxjs/toolkit");
const schoolSlice = createSlice({
    name: 'school',
    initialState: {
        name: '淡江中学',
        address: '台湾'
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload
        },
        setAddress(state, action) {
            state.address = action.payload
        }
    }
})

export const { reducer: schoolReducer } = schoolSlice
export const { setAddress: setSchoolAddress, setName: setSchoolName } = schoolSlice.actions
