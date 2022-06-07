import { useDispatch, useSelector } from "react-redux";
import { setName, setAge } from './store/slice/studentSlice'
import { setSchoolName, setSchoolAddress } from './store/slice/schoolSlice'

function App() {
  //加载state中数据
  const { student, school } = useSelector(state => state)
  const dispatch = useDispatch()
  const setNameHandler = () => {
    dispatch(setName('孙悟空'))
  }
  const setAgeHandler = () => {
    dispatch(setAge(18))
  }
  const setSchoolNameHandler = () => {
    dispatch(setSchoolName('成都七中'))
  }
  const setSchoolAddressHandler = () => {
    dispatch(setSchoolAddress('成都省'))
  }
  return (
    <div className="App">
      {student.name} -- {student.gender} -- {student.age} -- {student.address}
      <button onClick={setNameHandler}>修改姓名</button>
      <button onClick={setAgeHandler}>修改年龄</button>
      <hr />
      {school.name} -- {school.address}
      <button onClick={setSchoolNameHandler}>修改学校</button>
      <button onClick={setSchoolAddressHandler}>修改地址</button>
    </div>
  );
}

export default App;
