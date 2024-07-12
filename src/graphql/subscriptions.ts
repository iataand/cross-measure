/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTextMessageByChatRoomId = /* GraphQL */ `subscription OnCreateTextMessageByChatRoomId($chatRoomId: String!) {
  onCreateTextMessageByChatRoomId(chatRoomId: $chatRoomId) {
    id
    message
    isRead
    createdAt
    chatRoomId
    ownerProfileId
    ownerProfile {
      id
      type
      bandName
      firstName
      lastName
      genres
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTextMessageByChatRoomIdSubscriptionVariables,
  APITypes.OnCreateTextMessageByChatRoomIdSubscription
>;
export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onCreateProfile(filter: $filter) {
    id
    type
    bandName
    firstName
    lastName
    genres
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onUpdateProfile(filter: $filter) {
    id
    type
    bandName
    firstName
    lastName
    genres
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
  onDeleteProfile(filter: $filter) {
    id
    type
    bandName
    firstName
    lastName
    genres
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onCreateTextMessage = /* GraphQL */ `subscription OnCreateTextMessage(
  $filter: ModelSubscriptionTextMessageFilterInput
) {
  onCreateTextMessage(filter: $filter) {
    id
    message
    isRead
    createdAt
    chatRoomId
    ownerProfileId
    ownerProfile {
      id
      type
      bandName
      firstName
      lastName
      genres
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTextMessageSubscriptionVariables,
  APITypes.OnCreateTextMessageSubscription
>;
export const onUpdateTextMessage = /* GraphQL */ `subscription OnUpdateTextMessage(
  $filter: ModelSubscriptionTextMessageFilterInput
) {
  onUpdateTextMessage(filter: $filter) {
    id
    message
    isRead
    createdAt
    chatRoomId
    ownerProfileId
    ownerProfile {
      id
      type
      bandName
      firstName
      lastName
      genres
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTextMessageSubscriptionVariables,
  APITypes.OnUpdateTextMessageSubscription
>;
export const onDeleteTextMessage = /* GraphQL */ `subscription OnDeleteTextMessage(
  $filter: ModelSubscriptionTextMessageFilterInput
) {
  onDeleteTextMessage(filter: $filter) {
    id
    message
    isRead
    createdAt
    chatRoomId
    ownerProfileId
    ownerProfile {
      id
      type
      bandName
      firstName
      lastName
      genres
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTextMessageSubscriptionVariables,
  APITypes.OnDeleteTextMessageSubscription
>;
export const onCreateChatRoom = /* GraphQL */ `subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onCreateChatRoom(filter: $filter) {
    id
    musicianProfileId
    musicianProfile {
      id
      type
      bandName
      firstName
      lastName
      genres
      createdAt
      updatedAt
      __typename
    }
    bandProfileId
    bandProfile {
      id
      type
      bandName
      firstName
      lastName
      genres
      createdAt
      updatedAt
      __typename
    }
    messages {
      items {
        id
        message
        isRead
        createdAt
        chatRoomId
        ownerProfileId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChatRoomSubscriptionVariables,
  APITypes.OnCreateChatRoomSubscription
>;
export const onUpdateChatRoom = /* GraphQL */ `subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onUpdateChatRoom(filter: $filter) {
    id
    musicianProfileId
    musicianProfile {
      id
      type
      bandName
      firstName
      lastName
      genres
      createdAt
      updatedAt
      __typename
    }
    bandProfileId
    bandProfile {
      id
      type
      bandName
      firstName
      lastName
      genres
      createdAt
      updatedAt
      __typename
    }
    messages {
      items {
        id
        message
        isRead
        createdAt
        chatRoomId
        ownerProfileId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChatRoomSubscriptionVariables,
  APITypes.OnUpdateChatRoomSubscription
>;
export const onDeleteChatRoom = /* GraphQL */ `subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onDeleteChatRoom(filter: $filter) {
    id
    musicianProfileId
    musicianProfile {
      id
      type
      bandName
      firstName
      lastName
      genres
      createdAt
      updatedAt
      __typename
    }
    bandProfileId
    bandProfile {
      id
      type
      bandName
      firstName
      lastName
      genres
      createdAt
      updatedAt
      __typename
    }
    messages {
      items {
        id
        message
        isRead
        createdAt
        chatRoomId
        ownerProfileId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChatRoomSubscriptionVariables,
  APITypes.OnDeleteChatRoomSubscription
>;
