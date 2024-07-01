/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProfile = /* GraphQL */ `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    type
    bandName
    firstName
    lastName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const listProfiles = /* GraphQL */ `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      bandName
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfilesQueryVariables,
  APITypes.ListProfilesQuery
>;
export const getTextMessage = /* GraphQL */ `query GetTextMessage($id: ID!) {
  getTextMessage(id: $id) {
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
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTextMessageQueryVariables,
  APITypes.GetTextMessageQuery
>;
export const listTextMessages = /* GraphQL */ `query ListTextMessages(
  $filter: ModelTextMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listTextMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTextMessagesQueryVariables,
  APITypes.ListTextMessagesQuery
>;
export const getChatRoom = /* GraphQL */ `query GetChatRoom($id: ID!) {
  getChatRoom(id: $id) {
    id
    musicianProfileId
    musicianProfile {
      id
      type
      bandName
      firstName
      lastName
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
` as GeneratedQuery<
  APITypes.GetChatRoomQueryVariables,
  APITypes.GetChatRoomQuery
>;
export const listChatRooms = /* GraphQL */ `query ListChatRooms(
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      musicianProfileId
      musicianProfile {
        id
        type
        bandName
        firstName
        lastName
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
        createdAt
        updatedAt
        __typename
      }
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatRoomsQueryVariables,
  APITypes.ListChatRoomsQuery
>;
export const getMessagesByChatRoomId = /* GraphQL */ `query GetMessagesByChatRoomId(
  $chatRoomId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelTextMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  getMessagesByChatRoomId(
    chatRoomId: $chatRoomId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessagesByChatRoomIdQueryVariables,
  APITypes.GetMessagesByChatRoomIdQuery
>;
