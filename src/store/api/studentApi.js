import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
const studentApi = createApi({
    reducerPath: 'studentApi',   //API标识
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/'
    }),
    //endpoints回调函数生成各种查询方法
    endpoints(build) {
        //build为请求的构建器
        return {
            getStudents: build.query({
                query() {
                    //指定请求子路径
                    return 'students'
                }
            })
        }
    }
}
)

export const { useGetStudentsQuery } = studentApi
export default studentApi