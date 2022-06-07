import { schoolReducer } from "./slice/schoolSlice";
import { stuReducer } from "./slice/studentSlice";
const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        student: stuReducer,
        school: schoolReducer
    }
})

export default store