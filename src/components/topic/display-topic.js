import './components.css'; 
import React, { useState } from 'react'
import { onCreateTopic, onUpdateTopic } from '../../graphql/subscriptions'
import "@aws-amplify/pubsub";
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { updateTopic } from '../../graphql/mutations'


const DisplayTopic = (foo) => {
  const items = foo?.meeting?.topic?.items;
  const variables = {input: {meetingID: foo.meeting.id}};
  
   const [topic, setTopics] = useState([...items])
    API.graphql(
        graphqlOperation(onCreateTopic, {meetingID: foo.meeting.id})
      ).subscribe({
        next: e => {
           console.log(e)
          if (!!e){
                const newTopic = e.value.data.onCreateTopic;
                setTopics([...topic, newTopic])
              }
        }
      });
    if(variables){
      API.graphql(
        graphqlOperation(onUpdateTopic, {meetingID: foo.meeting.id})
      ).subscribe({
        next: e => {
          if (!!e && topic){
                const val = e.value.data.onUpdateTopic;
                const item = topic.map(x => {
                  if (x.id === val.id){
                    x = val
                  }
                  return x
                })
               setTopics(item)
              }
        }
      });
    }
      
    async function resolveTopic(val) {
        try {
            val.isResolved = !val.isResolved;
            delete val.createdAt;
            delete val.updatedAt;
            const item = topic.map(x => {
              if (x.id === val.id){
                x = val
              }
              return x
            })
            setTopics(item);
            const meetingData = await API.graphql(graphqlOperation(updateTopic, {input: val}))
          } catch (err) { console.log('error updating meeting Topic') }
        }

        return topic.map((item) => <li key={item.id}>  
        <label>
          <input type="checkbox" checked={item.isResolved} disabled={item.isResolved} onChange={() => resolveTopic(item)} /> <span className={`${item.isResolved ? "strike" : ""}`} >{item.title}</span>
        </label>
    </li>)

    }
export default DisplayTopic



