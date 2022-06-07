// import RtkExamp from './components/RtkExamp/RtkExamp'
import { useEffect } from 'react';
import './App.css'
import StudentList from './components/StudentList/StudentList';
import { useGetStudentsQuery } from './store/api/studentApi'

function App() {
  const { data, isSuccess, isLoading, isError } = useGetStudentsQuery()

  return (
    <div className="App">

      {isLoading && <h2>加载数据中...</h2>}
      {isError && <h2>加载数据失败!..</h2>}
      {isSuccess && <StudentList stus={data} />}
    </div>
  );
}

export default App;
