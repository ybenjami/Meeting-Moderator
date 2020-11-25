/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listMeetings, getMeeting } from '../../graphql/queries'
import { useParams } from "react-router-dom"
import MeetingDelete from "./Meeting-delete"
import AddTopic from "../topic/Add-topic";
import DisplayTopic from "../topic/display-topic";
import { useHistory } from "react-router-dom";
import notebook from '../../notebook.jpg';


import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '' , id: '', date: ''}


const Detail = () => {

  const { meetingId } = useParams();
  const [todos, setTodos] = useState([])

  const [meeting, setMeeting] = useState({topic:{items:[]}})
  let history = useHistory();
  let pageDisplay;

  useEffect(() => {
    if(meetingId){
      fetchMeeting(meetingId) 
    }else{
      fetchMeetings()
    }  
  }, [])


  async function fetchMeetings() {
    try {
      const todoData = await API.graphql(graphqlOperation(listMeetings))
      const todos = todoData.data.listMeetings.items
      setTodos(todos)
    } catch (err) { 
      console.log('error fetching Meetings') 
    }
  }

  async function fetchMeeting(id) {
    try {
      const meetingData = await API.graphql(graphqlOperation(getMeeting, {id: id}))
      if(!meetingData.data.getMeeting){
        history.push('/',[])
      }
      setMeeting(meetingData.data.getMeeting)
    } catch (err) { 
      console.log('error fetching Meetings') 
      
      
    }
  }


  if (!meetingId) {
    pageDisplay =  (
      <div>
      <h2>List of Meetings {meetingId} </h2>
        <ul class="collection">
        {
          todos.map((todo, index) => (
            <li class="collection-item">
              <span class="title"><a href={`meeting/${todo.id}`}>{todo.name}</a></span>
               :: {todo.createdAt}
            </li>
          
          ))
        }
      </ul>
      </div>);
  }else{
    pageDisplay = ( 
      <div>
        <div class='col s12 m6'>
      <div class="card" >
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src={notebook} />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{meeting.name}<i class="material-icons right">more_vert</i></span>
          <p><a href="#">Meeting ID: {meeting.id}</a></p>
          <p>Date: {meeting.createdAt}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">{meeting.name}<i class="material-icons right">close</i></span>
          <p>{meeting.description} - {meeting.createdAt}</p>
        </div>
        </div>
        <MeetingDelete meetingId={meeting.id}></MeetingDelete>
        </div>
        <div class='col s12 m6'>
            <h4>Topics</h4>
             <ul>
              {!!meeting?.id &&  (<DisplayTopic meeting={meeting}></DisplayTopic>)}
              </ul>
              <AddTopic meeting={meeting}></AddTopic>
          </div>
        
          
      </div>

       )
    }

  return (
    <div class="container">
    <div class="row">
      <div class="col s12">
        <div>{pageDisplay}</div>
      </div>
   </div>
  
</div>)

}

export default Detail