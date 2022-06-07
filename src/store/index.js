import studentApi from "./api/studentApi";
import { schoolReducer } from "./slice/schoolSlice";
import { stuReducer } from "./slice/studentSlice";
const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        student: stuReducer,
        school: schoolReducer,
        [studentApi.reducerPath]: studentApi.reducer
    },
    //api缓存功能
    middleware: (getDefalutMiddleware) => {
        return getDefalutMiddleware().concat(studentApi.middleware)
    }
})

export default store