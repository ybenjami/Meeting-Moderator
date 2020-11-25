/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createMeeting } from '../../graphql/mutations'
import { listMeetings } from '../../graphql/queries'
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '' , description: '', date: ''}



const Meeting = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  let history = useHistory();

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listMeetings))
      const todos = todoData.data.listMeetings.items
      setTodos(todos)
      console.log(todos)
    } catch (err) { console.log('error fetching Meetings') }
  }



  async function addTodo() {
    try {
      if (!formState.name) return
      var id = uuidv4();
      const todo = { ...formState }
      todo.id = id;

      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createMeeting, {input: todo}))
      history.push(`meeting/${todo.id}`)
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div>
      <h3>Create A Meeting</h3>
      <div class="input-field col s6">
          <input
            onChange={event => setInput('name', event.target.value)}
            value={formState.name}
            placeholder="Meeting"
          />
        </div>
        <div class="input-field col s6">
            <input
        onChange={event => setInput('date', event.target.value)}
        class="datepicker"
        value={formState.date}
        placeholder="Meeting Date"
      />
        </div>
        <input
            onChange={event => setInput('description', event.target.value)}
            value={formState.description}
            placeholder="Meeting Description (Optional)"
          />
    
      <a class="waves-effect waves-light btn-small" onClick={addTodo} ><i class="material-icons right">add</i>Create Meeting</a>
      
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}><a href={'meeting/' + todo.id}>{todo.name}</a></p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default Meeting