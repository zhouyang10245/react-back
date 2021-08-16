// import { Prompt } from 'react-router-dom'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, incremented, decremented, incrementAsync } from '../../redux/counter'

function Home() {
  const state = useSelector(selectCount)
  const dispatch = useDispatch();
  return (
    <div className="home">
      <p style={{ textAlign: 'center', color: '#ff671b', fontSize: 40 }}>
        {state.value}
      </p>

      <Button type="primary" onClick={()=>{dispatch(incremented())}}>+</Button>
      <Button onClick={()=>{dispatch(decremented())}}>-</Button>
      <Button onClick={()=>{dispatch(incrementAsync(2))}}>++</Button>
    </div>
  )
}

export default Home
