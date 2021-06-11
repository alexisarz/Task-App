import React, {useState, createRef} from 'react';
import AppHeader from './components/appHeader'
import './App.css'
import Weather from './components/weather'



function App() {

  let tasknameRef = createRef();
  let dateRef = createRef();
  let timeRef = createRef();
  let descRef = createRef();
  
  
  const [taskItem, setTaskItem] = useState([])
  
  const [uid, setUid] = useState(0)
  
  const handleAddTask = () =>{
    if(tasknameRef.current.value !== '' && 
       dateRef.current.value !== '' && 
       timeRef.current.value !== ''){
      
        const newTask = {
          id: uid,
          name: tasknameRef.current.value,
          date: dateRef.current.value,
          time: `${timeRef.current.value} hs`,
          description: descRef.current.value,
          done: false
        }
        
        setUid(uid+1)
        setTaskItem([...taskItem, newTask])
        tasknameRef.current.value = ''
        dateRef.current.value = ''
        timeRef.current.value = ''
        descRef.current.value = ''
    }

    else{ alert('Los campos Tarea, Fecha y Hora son obligatorios!') }
    
  }

  const doneTaskHandler = (id) =>{
    const doneTask = taskItem.filter(t => t.id !== id);
    setTaskItem(doneTask);
    
  }
  
  return (
    <div className="App bg-light bg-gradient p-3 m-0 w-100">
      <AppHeader taskleft={taskItem.length}/>
      <div className="input-group">
        <input className="form-control" ref={tasknameRef} type="text"></input>
        <input className="form-control" ref={dateRef} type="date"></input>
        <input className="form-control" ref={timeRef} type="number" max="23"></input>
        <input className="form-control" ref={descRef} type="text"></input>
        <button className="btn btn-primary" onClick={handleAddTask}>Añadir</button>
      </div>
      <table className="table table-striped table-bordered bg-light">
        
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {taskItem.map((t) =>( <tr>
              <th>{t.name}</th>
              <th>{t.date}</th>
              <th>{t.time}</th>
              <th>{t.description}</th>
              <th>
                  <button className="btn btn-outline-danger" onClick={() => doneTaskHandler(t.id)}>X</button>
              </th>
          </tr>))}
        </tbody>
      </table>
      <Weather/>
    </div>
  );
}

export default App;
