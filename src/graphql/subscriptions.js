/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMeeting = /* GraphQL */ `
  subscription OnCreateMeeting {
    onCreateMeeting {
      id
      name
      date
      topic {
        items {
          id
          title
          meetingID
          notes
          isResolved
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMeeting = /* GraphQL */ `
  subscription OnUpdateMeeting {
    onUpdateMeeting {
      id
      name
      date
      topic {
        items {
          id
          title
          meetingID
          notes
          isResolved
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMeeting = /* GraphQL */ `
  subscription OnDeleteMeeting {
    onDeleteMeeting {
      id
      name
      date
      topic {
        items {
          id
          title
          meetingID
          notes
          isResolved
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic ($meetingID: ID){
    onCreateTopic (meetingID: $meetingID) {
      id
      title
      meetingID
      meeting {
        id
        name
        date
        topic {
          nextToken
        }
        createdAt
        updatedAt
      }
      notes
      isResolved
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic ($meetingID: ID){
    onUpdateTopic(meetingID: $meetingID) {
      id
      title
      meetingID
      meeting {
        id
        name
        date
        topic {
          nextToken
        }
        createdAt
        updatedAt
      }
      notes
      isResolved
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
      id
      title
      meetingID
      meeting {
        id
        name
        date
        topic {
          nextToken
        }
        createdAt
        updatedAt
      }
      notes
      isResolved
      createdAt
      updatedAt
    }
  }
`;
