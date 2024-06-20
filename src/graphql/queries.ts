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
