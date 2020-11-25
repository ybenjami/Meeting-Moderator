import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { deleteMeeting } from '../../graphql/mutations'

import awsExports from "../../aws-exports";
import 'materialize-css';

import { useHistory } from "react-router-dom";
Amplify.configure(awsExports);


const MeetingDelete = (id) => {
  let history = useHistory();
  async function removeMeeting(id) {
    try {
     
      const meetingData = await API.graphql(graphqlOperation(deleteMeeting, {input: {id: id.meetingId}}))
      history.push('/')
     

    } catch (err) { console.log('error deleting Meetings') }
  }
  return (
    <div>
      <a class="waves-effect waves-light btn-small" onClick={() => removeMeeting(id)} ><i class="material-icons right">remove_circle</i>Delete Meeting</a>
    </div> )
  }


export default MeetingDelete