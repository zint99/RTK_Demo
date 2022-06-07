import RtkExamp from './components/RtkExamp/RtkExamp'
import { useGetStudentsQuery } from './store/api/studentApi'

function App() {
  const { data, isSuccess, isLoading } = useGetStudentsQuery()

  return (
    <div className="App">
      {/* <RtkExamp /> */}
      {isLoading && <p>数据正在加载中...</p>}
      {isSuccess && data.data.map(stu => <p key={stu.id}>
        {stu.attributes.name}---
        {stu.attributes.gender}---
        {stu.attributes.age}---
        {stu.attributes.address}
      </p>)}
    </div>
  );
}

export default App;
