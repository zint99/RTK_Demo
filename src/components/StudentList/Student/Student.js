import React, { useState } from 'react'
import { useDelStudentMutation } from '../../../store/api/studentApi'
import StudentForm from '../../StudentForm/StudentForm'


export default function Student(props) {
    const { name, age, gender, address, id } = props
    const [isEdit, setIsEdit] = useState(false)
    const [delStudent, { isError, isLoading, isSuccess, error }] = useDelStudentMutation()
    const deleteButtonHandler = () => {
        delStudent(id)  //数据标签使其自动刷新
    }
    const toggleIsEditHandler = () => {
        setIsEdit(preIsEdit => !preIsEdit)
    }
    return (
        <>
            {
                isEdit ?
                    <StudentForm stuId={id} isEdit={isEdit} toggleIsEditHandler={toggleIsEditHandler} />
                    :
                    (
                        <>
                            <tr>
                                <td>{name}</td>
                                <td>{gender}</td>
                                <td>{age}</td>
                                <td>{address}</td>
                                <td>
                                    <button onClick={deleteButtonHandler}>删除</button>
                                    <button onClick={toggleIsEditHandler}>修改</button>
                                </td>
                            </tr>

                            {isLoading && <tr>
                                <td colSpan={5}>正在删除数据中...</td>
                            </tr>}
                            {isError && <tr>
                                <td colSpan={5}>{error.error}</td>
                            </tr>}
                            {isSuccess && <tr>
                                <td colSpan={5}>成功删除数据...</td>
                            </tr>}
                        </>
                    )}
        </>
    )
}
