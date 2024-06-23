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
    chatRooms {
      items {
        id
        profileId
        chatRoomId
        profile {
          id
          type
          bandName
          firstName
          lastName
          chatRooms {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        chatRoom {
          id
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
          profiles {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        createdAt
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
    chatRooms {
      items {
        id
        profileId
        chatRoomId
        profile {
          id
          type
          bandName
          firstName
          lastName
          chatRooms {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        chatRoom {
          id
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
          profiles {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        createdAt
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
    chatRooms {
      items {
        id
        profileId
        chatRoomId
        profile {
          id
          type
          bandName
          firstName
          lastName
          chatRooms {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        chatRoom {
          id
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
          profiles {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        createdAt
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
    chatRoomId
    chatRoom {
      id
      messages {
        items {
          id
          message
          isRead
          createdAt
          chatRoomId
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          ownerProfileId
          ownerProfile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
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
      profiles {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    ownerProfileId
    ownerProfile {
      id
      type
      bandName
      firstName
      lastName
      chatRooms {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    chatRoomId
    chatRoom {
      id
      messages {
        items {
          id
          message
          isRead
          createdAt
          chatRoomId
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          ownerProfileId
          ownerProfile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
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
      profiles {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    ownerProfileId
    ownerProfile {
      id
      type
      bandName
      firstName
      lastName
      chatRooms {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    chatRoomId
    chatRoom {
      id
      messages {
        items {
          id
          message
          isRead
          createdAt
          chatRoomId
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          ownerProfileId
          ownerProfile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
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
      profiles {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    ownerProfileId
    ownerProfile {
      id
      type
      bandName
      firstName
      lastName
      chatRooms {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTextMessageMutationVariables,
  APITypes.DeleteTextMessageMutation
>;
export const createChatRoom = /* GraphQL */ `mutation CreateChatRoom(
  $input: CreateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  createChatRoom(input: $input, condition: $condition) {
    id
    messages {
      items {
        id
        message
        isRead
        createdAt
        chatRoomId
        chatRoom {
          id
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
          profiles {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        ownerProfileId
        ownerProfile {
          id
          type
          bandName
          firstName
          lastName
          chatRooms {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    profiles {
      items {
        id
        profileId
        chatRoomId
        profile {
          id
          type
          bandName
          firstName
          lastName
          chatRooms {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        chatRoom {
          id
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
          profiles {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        createdAt
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
` as GeneratedMutation<
  APITypes.CreateChatRoomMutationVariables,
  APITypes.CreateChatRoomMutation
>;
export const updateChatRoom = /* GraphQL */ `mutation UpdateChatRoom(
  $input: UpdateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  updateChatRoom(input: $input, condition: $condition) {
    id
    messages {
      items {
        id
        message
        isRead
        createdAt
        chatRoomId
        chatRoom {
          id
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
          profiles {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        ownerProfileId
        ownerProfile {
          id
          type
          bandName
          firstName
          lastName
          chatRooms {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    profiles {
      items {
        id
        profileId
        chatRoomId
        profile {
          id
          type
          bandName
          firstName
          lastName
          chatRooms {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        chatRoom {
          id
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
          profiles {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        createdAt
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
` as GeneratedMutation<
  APITypes.UpdateChatRoomMutationVariables,
  APITypes.UpdateChatRoomMutation
>;
export const deleteChatRoom = /* GraphQL */ `mutation DeleteChatRoom(
  $input: DeleteChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  deleteChatRoom(input: $input, condition: $condition) {
    id
    messages {
      items {
        id
        message
        isRead
        createdAt
        chatRoomId
        chatRoom {
          id
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
          profiles {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        ownerProfileId
        ownerProfile {
          id
          type
          bandName
          firstName
          lastName
          chatRooms {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    profiles {
      items {
        id
        profileId
        chatRoomId
        profile {
          id
          type
          bandName
          firstName
          lastName
          chatRooms {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        chatRoom {
          id
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
          profiles {
            items {
              id
              profileId
              chatRoomId
              createdAt
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
        createdAt
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
` as GeneratedMutation<
  APITypes.DeleteChatRoomMutationVariables,
  APITypes.DeleteChatRoomMutation
>;
export const createProfileChatRooms = /* GraphQL */ `mutation CreateProfileChatRooms(
  $input: CreateProfileChatRoomsInput!
  $condition: ModelProfileChatRoomsConditionInput
) {
  createProfileChatRooms(input: $input, condition: $condition) {
    id
    profileId
    chatRoomId
    profile {
      id
      type
      bandName
      firstName
      lastName
      chatRooms {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    chatRoom {
      id
      messages {
        items {
          id
          message
          isRead
          createdAt
          chatRoomId
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          ownerProfileId
          ownerProfile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
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
      profiles {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProfileChatRoomsMutationVariables,
  APITypes.CreateProfileChatRoomsMutation
>;
export const updateProfileChatRooms = /* GraphQL */ `mutation UpdateProfileChatRooms(
  $input: UpdateProfileChatRoomsInput!
  $condition: ModelProfileChatRoomsConditionInput
) {
  updateProfileChatRooms(input: $input, condition: $condition) {
    id
    profileId
    chatRoomId
    profile {
      id
      type
      bandName
      firstName
      lastName
      chatRooms {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    chatRoom {
      id
      messages {
        items {
          id
          message
          isRead
          createdAt
          chatRoomId
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          ownerProfileId
          ownerProfile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
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
      profiles {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProfileChatRoomsMutationVariables,
  APITypes.UpdateProfileChatRoomsMutation
>;
export const deleteProfileChatRooms = /* GraphQL */ `mutation DeleteProfileChatRooms(
  $input: DeleteProfileChatRoomsInput!
  $condition: ModelProfileChatRoomsConditionInput
) {
  deleteProfileChatRooms(input: $input, condition: $condition) {
    id
    profileId
    chatRoomId
    profile {
      id
      type
      bandName
      firstName
      lastName
      chatRooms {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    chatRoom {
      id
      messages {
        items {
          id
          message
          isRead
          createdAt
          chatRoomId
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          ownerProfileId
          ownerProfile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
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
      profiles {
        items {
          id
          profileId
          chatRoomId
          profile {
            id
            type
            bandName
            firstName
            lastName
            chatRooms {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          chatRoom {
            id
            messages {
              nextToken
              __typename
            }
            profiles {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          createdAt
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProfileChatRoomsMutationVariables,
  APITypes.DeleteProfileChatRoomsMutation
>;
