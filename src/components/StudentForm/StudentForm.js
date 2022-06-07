import React, { useState, useEffect } from 'react'
import { useAddStudentMutation, useGetStudentByIdQuery, useUpdateStudentMutation } from '../../store/api/studentApi'
import './StudentForm.css'

export default function StudentForm(props) {
    //form应该加载数据库中的最新数据，通过ID查询数据
    const { data: stuData, isError, isSuccess, isLoading, error } = useGetStudentByIdQuery(props.stuId, {
        //form没传props.stuId表示添加数据，所以skip。传了表示修改，不跳过
        skip: props.stuId ? false : true
    })
    const [addStudent] = useAddStudentMutation()
    const [updateStudent] = useUpdateStudentMutation()
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        gender: '男',
        address: ''
    })
    //数据加载成功时设置userData
    useEffect(() => {
        if (isSuccess) {
            setUserData(stuData.attributes)
        }
    }, [isSuccess])
    const nameChangeHandler = (e) => {
        setUserData({ ...userData, name: e.target.value })
    }
    const ageChangeHandler = (e) => {
        setUserData({ ...userData, age: +e.target.value })
    }
    const addressChangeHandler = (e) => {
        setUserData({ ...userData, address: e.target.value })
    }
    const genderChangeHandler = (e) => {
        setUserData({ ...userData, gender: e.target.value })
    }
    const addHandler = () => {
        addStudent(userData)
        //添加数据后重置
        setUserData({
            name: '',
            age: '',
            gender: '男',
            address: ''
        })
    }
    const editHandler = () => {
        updateStudent({
            id: props.stuId,
            ...userData
        })
        //确认修改后切换edit状态
        props.toggleIsEditHandler()
        //数据标签会自动触发获取数据
    }
    return (
        <>
            <tr className='StudentForm'>
                <td><input type="text" placeholder='姓名' value={userData.name} onChange={(e) => nameChangeHandler(e)} /></td>
                <td>
                    <select value={userData.gender} onChange={(e) => genderChangeHandler(e)}>
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </td>
                <td><input type="text" placeholder='年龄' value={userData.age} onChange={(e) => ageChangeHandler(e)} /></td>
                <td><input type="text" placeholder='住址' value={userData.address} onChange={(e) => addressChangeHandler(e)} /></td>
                <td>
                    {props.isEdit ?
                        <>
                            <button onClick={editHandler}>确认</button>
                            <button onClick={props.toggleIsEditHandler}>取消</button>
                        </>
                        :
                        <button onClick={addHandler}>添加</button>}
                </td>
            </tr>
            {isLoading && <tr>
                <td colSpan={5}>{props.stuId ? "正在卖力更新数据中！！" : "正在添加数据中..."}</td>
            </tr>}
            {isError && <tr>
                <td colSpan={5}>{error.error}</td>
            </tr>}
        </>
    )
}
