import StudentForm from '../StudentForm/StudentForm'
import Student from './Student/Student'
import style from './StudentList.module.css'
import { useGetStudentsQuery } from '../../store/api/studentApi'
export default function StudentList(props) {
    const { refetch } = useGetStudentsQuery()
    return (
        <div className={style.StudentList}>
            <button onClick={refetch}>更新数据</button>
            <table>
                <caption>学生列表</caption>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>gender</th>
                        <th>age</th>
                        <th>address</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {props.stus.map((stu) => <Student key={stu.id} {...stu.attributes} id={stu.id} />)}
                </tbody>
                <tfoot>
                    <StudentForm />
                </tfoot>
            </table>
        </div>
    )
}
