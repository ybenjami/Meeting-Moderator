/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMeeting = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
      id
      name
      date
      description
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
export const updateMeeting = /* GraphQL */ `
  mutation UpdateMeeting(
    $input: UpdateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    updateMeeting(input: $input, condition: $condition) {
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
export const deleteMeeting = /* GraphQL */ `
  mutation DeleteMeeting(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeeting(input: $input, condition: $condition) {
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
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
