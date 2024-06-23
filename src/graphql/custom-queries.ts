import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getChatRoomsByProfileId =
  /* GraphQL */ `query getChatRoomsByProfileId(
  $profileId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelProfileChatRoomsFilterInput
  $limit: Int
  $nextToken: String
) {
  profileChatRoomsByProfileId(
    profileId: $profileId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    nextToken
    items {
      chatRoom {
        profiles(filter: {profileId: {ne: $profileId}}) {
          items {
            profile {
              bandName
              firstName
              lastName
            }
            chatRoomId
            createdAt
            id
          }
        }
      }
    }
  }
}
` as GeneratedQuery<
    APITypes.ProfileChatRoomsByProfileIdQueryVariables,
    APITypes.ProfileChatRoomsByProfileIdQuery
  >;
