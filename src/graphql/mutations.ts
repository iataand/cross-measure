/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProfile = /* GraphQL */ `mutation CreateProfile(
  $input: CreateProfileInput!
  $condition: ModelProfileConditionInput
) {
  createProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProfileMutationVariables,
  APITypes.CreateProfileMutation
>;
export const updateProfile = /* GraphQL */ `mutation UpdateProfile(
  $input: UpdateProfileInput!
  $condition: ModelProfileConditionInput
) {
  updateProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProfileMutationVariables,
  APITypes.UpdateProfileMutation
>;
export const deleteProfile = /* GraphQL */ `mutation DeleteProfile(
  $input: DeleteProfileInput!
  $condition: ModelProfileConditionInput
) {
  deleteProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
export const createTextMessage = /* GraphQL */ `mutation CreateTextMessage(
  $input: CreateTextMessageInput!
  $condition: ModelTextMessageConditionInput
) {
  createTextMessage(input: $input, condition: $condition) {
    id
    message
    isRead
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTextMessageMutationVariables,
  APITypes.CreateTextMessageMutation
>;
export const updateTextMessage = /* GraphQL */ `mutation UpdateTextMessage(
  $input: UpdateTextMessageInput!
  $condition: ModelTextMessageConditionInput
) {
  updateTextMessage(input: $input, condition: $condition) {
    id
    message
    isRead
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTextMessageMutationVariables,
  APITypes.UpdateTextMessageMutation
>;
export const deleteTextMessage = /* GraphQL */ `mutation DeleteTextMessage(
  $input: DeleteTextMessageInput!
  $condition: ModelTextMessageConditionInput
) {
  deleteTextMessage(input: $input, condition: $condition) {
    id
    message
    isRead
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTextMessageMutationVariables,
  APITypes.DeleteTextMessageMutation
>;
