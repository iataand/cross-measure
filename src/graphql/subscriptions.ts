/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
  onCreateProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTextMessageSubscriptionVariables,
  APITypes.OnDeleteTextMessageSubscription
>;
export const onCreateChatRoom = /* GraphQL */ `subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onCreateChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatRoomSubscriptionVariables,
  APITypes.OnCreateChatRoomSubscription
>;
export const onUpdateChatRoom = /* GraphQL */ `subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onUpdateChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatRoomSubscriptionVariables,
  APITypes.OnUpdateChatRoomSubscription
>;
export const onDeleteChatRoom = /* GraphQL */ `subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onDeleteChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatRoomSubscriptionVariables,
  APITypes.OnDeleteChatRoomSubscription
>;
export const onCreateProfileChatRooms = /* GraphQL */ `subscription OnCreateProfileChatRooms(
  $filter: ModelSubscriptionProfileChatRoomsFilterInput
) {
  onCreateProfileChatRooms(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProfileChatRoomsSubscriptionVariables,
  APITypes.OnCreateProfileChatRoomsSubscription
>;
export const onUpdateProfileChatRooms = /* GraphQL */ `subscription OnUpdateProfileChatRooms(
  $filter: ModelSubscriptionProfileChatRoomsFilterInput
) {
  onUpdateProfileChatRooms(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProfileChatRoomsSubscriptionVariables,
  APITypes.OnUpdateProfileChatRoomsSubscription
>;
export const onDeleteProfileChatRooms = /* GraphQL */ `subscription OnDeleteProfileChatRooms(
  $filter: ModelSubscriptionProfileChatRoomsFilterInput
) {
  onDeleteProfileChatRooms(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProfileChatRoomsSubscriptionVariables,
  APITypes.OnDeleteProfileChatRoomsSubscription
>;
