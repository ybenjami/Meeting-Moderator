
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTopic } from '../../graphql/mutations'
import { v4 as uuidv4 } from 'uuid';
import setTodos  from '../meeting/Meeting-detail'
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

const initialState = { title: ''}

const AddTopic = (meeting) => {

    const [formState, setFormState] = useState(initialState)

    function setInput(key, value) {
      setFormState({ ...formState, [key]: value })
    }
  
    async function addTopic(data) {
        var id = uuidv4();
        if (!formState.title) return
        const topic = { ...formState }
        const topicObj ={
          id: id,
          isResolved: false,
          title: topic.title,
          meetingID: data.meeting.id
        };
    
        try {
          const meetingData = await API.graphql(graphqlOperation(createTopic, {input: topicObj}))
         
        } catch (err) { console.log('error creating meeting Topic') }
      }
{
    return (
        <form class="col s12">
            <h5>Add Topic</h5>
                <div class="input-field col s12">
                <input
            onChange={event => setInput('title', event.target.value)}
            value={formState.title}
            placeholder="Topic"
          />
                </div>
                <div class="input-field col s6">
                    <a class="waves-effect waves-light btn-small" onClick={() => addTopic(meeting)} ><i class="material-icons right">add</i>Add Topic</a>
                </div>
        </form>)
  }
}
export default AddTopic