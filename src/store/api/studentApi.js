import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
const studentApi = createApi({
    reducerPath: 'studentApi',   //API标识
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/'
    }),
    //数据标签
    tagTypes: ['student'],
    //endpoints回调函数生成各种查询方法
    endpoints(build) {
        //build为请求的构建器
        return {
            getStudents: build.query({
                query() {
                    //指定请求子路径
                    return 'students'
                },
                //添加数据时使这个数据标签失效，可以触发重新获取数据
                providesTags: [{
                    type: 'student',
                    id: 'LIST'
                }]
                ,
                transformResponse: response => response.data
            }),
            getStudentById: build.query({
                query: id => `students/${id}`,
                transformResponse: response => response.data,
                keepUnusedDataFor: 60,       //数据缓存时间，默认为60s
                providesTags: ((res, err, id) => [{ type: 'student', id }])
            }),
            delStudent: build.mutation({
                query: id => {
                    return {
                        method: 'delete',
                        url: `students/${id}`
                    }
                },
                invalidatesTags: ['student']
            }),
            addStudent: build.mutation({
                query: stuData => {
                    return {
                        method: 'post',
                        url: `students`,
                        body: {
                            data: stuData
                        }
                    }
                },
                invalidatesTags: [{
                    type: 'student',
                    id: 'LIST'
                }]
            }),
            updateStudent: build.mutation({
                query: stuData => {
                    return {
                        method: 'put',
                        url: `students/${stuData.id}`,
                        body: {
                            data: stuData
                        }
                    }
                },
                invalidatesTags: ((res, err, stuData) => [{ type: 'student', id: stuData.id }, {
                    type: 'student',
                    id: 'LIST'
                }])
            }),
        }
    }
}
)

export const { useGetStudentsQuery, useGetStudentByIdQuery, useDelStudentMutation, useAddStudentMutation, useUpdateStudentMutation } = studentApi
export default studentApi