/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProfileChatRoomsFilterInput = {
  id?: ModelIDInput | null,
  profileId?: ModelStringInput | null,
  chatRoomId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProfileChatRoomsFilterInput | null > | null,
  or?: Array< ModelProfileChatRoomsFilterInput | null > | null,
  not?: ModelProfileChatRoomsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProfileChatRoomsConnection = {
  __typename: "ModelProfileChatRoomsConnection",
  items:  Array<ProfileChatRooms | null >,
  nextToken?: string | null,
};

export type ProfileChatRooms = {
  __typename: "ProfileChatRooms",
  id: string,
  profileId: string,
  chatRoomId: string,
  profile: Profile,
  chatRoom: ChatRoom,
  createdAt: string,
  updatedAt: string,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  type: profileTypes,
  bandName?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  chatRooms?: ModelProfileChatRoomsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum profileTypes {
  musician = "musician",
  band = "band",
}


export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  messages?: ModelTextMessageConnection | null,
  profiles?: ModelProfileChatRoomsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTextMessageConnection = {
  __typename: "ModelTextMessageConnection",
  items:  Array<TextMessage | null >,
  nextToken?: string | null,
};

export type TextMessage = {
  __typename: "TextMessage",
  id: string,
  message: string,
  isRead?: boolean | null,
  createdAt: string,
  chatRoomId: string,
  ownerProfileId: string,
  ownerProfile?: Profile | null,
  updatedAt: string,
};

export type CreateProfileInput = {
  id?: string | null,
  type: profileTypes,
  bandName?: string | null,
  firstName?: string | null,
  lastName?: string | null,
};

export type ModelProfileConditionInput = {
  id?: ModelStringInput | null,
  type?: ModelprofileTypesInput | null,
  bandName?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelprofileTypesInput = {
  eq?: profileTypes | null,
  ne?: profileTypes | null,
};

export type UpdateProfileInput = {
  id: string,
  type?: profileTypes | null,
  bandName?: string | null,
  firstName?: string | null,
  lastName?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreateTextMessageInput = {
  id?: string | null,
  message: string,
  isRead?: boolean | null,
  createdAt?: string | null,
  chatRoomId: string,
  ownerProfileId: string,
};

export type ModelTextMessageConditionInput = {
  message?: ModelStringInput | null,
  isRead?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  chatRoomId?: ModelIDInput | null,
  ownerProfileId?: ModelStringInput | null,
  and?: Array< ModelTextMessageConditionInput | null > | null,
  or?: Array< ModelTextMessageConditionInput | null > | null,
  not?: ModelTextMessageConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTextMessageInput = {
  id: string,
  message?: string | null,
  isRead?: boolean | null,
  createdAt?: string | null,
  chatRoomId?: string | null,
  ownerProfileId?: string | null,
};

export type DeleteTextMessageInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
};

export type ModelChatRoomConditionInput = {
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateProfileChatRoomsInput = {
  id?: string | null,
  profileId: string,
  chatRoomId: string,
};

export type ModelProfileChatRoomsConditionInput = {
  profileId?: ModelStringInput | null,
  chatRoomId?: ModelIDInput | null,
  and?: Array< ModelProfileChatRoomsConditionInput | null > | null,
  or?: Array< ModelProfileChatRoomsConditionInput | null > | null,
  not?: ModelProfileChatRoomsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateProfileChatRoomsInput = {
  id: string,
  profileId?: string | null,
  chatRoomId?: string | null,
};

export type DeleteProfileChatRoomsInput = {
  id: string,
};

export type ModelProfileFilterInput = {
  id?: ModelStringInput | null,
  type?: ModelprofileTypesInput | null,
  bandName?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelTextMessageFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  isRead?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  chatRoomId?: ModelIDInput | null,
  ownerProfileId?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTextMessageFilterInput | null > | null,
  or?: Array< ModelTextMessageFilterInput | null > | null,
  not?: ModelTextMessageFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  bandName?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTextMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  isRead?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  chatRoomId?: ModelSubscriptionIDInput | null,
  ownerProfileId?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTextMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionTextMessageFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type ModelSubscriptionProfileChatRoomsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  profileId?: ModelSubscriptionStringInput | null,
  chatRoomId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileChatRoomsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileChatRoomsFilterInput | null > | null,
};

export type getChatRoomsByProfileIdQueryVariables = {
  profileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileChatRoomsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type getChatRoomsByProfileIdQuery = {
  profileChatRoomsByProfileId?:  {
    __typename: "ModelProfileChatRoomsConnection",
    nextToken?: string | null,
    items:  Array< {
      __typename: "ProfileChatRooms",
      chatRoom:  {
        __typename: "ChatRoom",
        profiles?:  {
          __typename: "ModelProfileChatRoomsConnection",
          items:  Array< {
            __typename: "ProfileChatRooms",
            profile:  {
              __typename: "Profile",
              bandName?: string | null,
              firstName?: string | null,
              lastName?: string | null,
            },
            chatRoomId: string,
            createdAt: string,
            id: string,
          } | null >,
        } | null,
      },
    } | null >,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    type: profileTypes,
    bandName?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    chatRooms?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    type: profileTypes,
    bandName?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    chatRooms?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    type: profileTypes,
    bandName?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    chatRooms?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTextMessageMutationVariables = {
  input: CreateTextMessageInput,
  condition?: ModelTextMessageConditionInput | null,
};

export type CreateTextMessageMutation = {
  createTextMessage?:  {
    __typename: "TextMessage",
    id: string,
    message: string,
    isRead?: boolean | null,
    createdAt: string,
    chatRoomId: string,
    ownerProfileId: string,
    ownerProfile?:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateTextMessageMutationVariables = {
  input: UpdateTextMessageInput,
  condition?: ModelTextMessageConditionInput | null,
};

export type UpdateTextMessageMutation = {
  updateTextMessage?:  {
    __typename: "TextMessage",
    id: string,
    message: string,
    isRead?: boolean | null,
    createdAt: string,
    chatRoomId: string,
    ownerProfileId: string,
    ownerProfile?:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteTextMessageMutationVariables = {
  input: DeleteTextMessageInput,
  condition?: ModelTextMessageConditionInput | null,
};

export type DeleteTextMessageMutation = {
  deleteTextMessage?:  {
    __typename: "TextMessage",
    id: string,
    message: string,
    isRead?: boolean | null,
    createdAt: string,
    chatRoomId: string,
    ownerProfileId: string,
    ownerProfile?:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    messages?:  {
      __typename: "ModelTextMessageConnection",
      items:  Array< {
        __typename: "TextMessage",
        id: string,
        message: string,
        isRead?: boolean | null,
        createdAt: string,
        chatRoomId: string,
        ownerProfileId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    messages?:  {
      __typename: "ModelTextMessageConnection",
      items:  Array< {
        __typename: "TextMessage",
        id: string,
        message: string,
        isRead?: boolean | null,
        createdAt: string,
        chatRoomId: string,
        ownerProfileId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    messages?:  {
      __typename: "ModelTextMessageConnection",
      items:  Array< {
        __typename: "TextMessage",
        id: string,
        message: string,
        isRead?: boolean | null,
        createdAt: string,
        chatRoomId: string,
        ownerProfileId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfileChatRoomsMutationVariables = {
  input: CreateProfileChatRoomsInput,
  condition?: ModelProfileChatRoomsConditionInput | null,
};

export type CreateProfileChatRoomsMutation = {
  createProfileChatRooms?:  {
    __typename: "ProfileChatRooms",
    id: string,
    profileId: string,
    chatRoomId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      messages?:  {
        __typename: "ModelTextMessageConnection",
        nextToken?: string | null,
      } | null,
      profiles?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileChatRoomsMutationVariables = {
  input: UpdateProfileChatRoomsInput,
  condition?: ModelProfileChatRoomsConditionInput | null,
};

export type UpdateProfileChatRoomsMutation = {
  updateProfileChatRooms?:  {
    __typename: "ProfileChatRooms",
    id: string,
    profileId: string,
    chatRoomId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      messages?:  {
        __typename: "ModelTextMessageConnection",
        nextToken?: string | null,
      } | null,
      profiles?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileChatRoomsMutationVariables = {
  input: DeleteProfileChatRoomsInput,
  condition?: ModelProfileChatRoomsConditionInput | null,
};

export type DeleteProfileChatRoomsMutation = {
  deleteProfileChatRooms?:  {
    __typename: "ProfileChatRooms",
    id: string,
    profileId: string,
    chatRoomId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      messages?:  {
        __typename: "ModelTextMessageConnection",
        nextToken?: string | null,
      } | null,
      profiles?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    type: profileTypes,
    bandName?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    chatRooms?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTextMessageQueryVariables = {
  id: string,
};

export type GetTextMessageQuery = {
  getTextMessage?:  {
    __typename: "TextMessage",
    id: string,
    message: string,
    isRead?: boolean | null,
    createdAt: string,
    chatRoomId: string,
    ownerProfileId: string,
    ownerProfile?:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListTextMessagesQueryVariables = {
  filter?: ModelTextMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTextMessagesQuery = {
  listTextMessages?:  {
    __typename: "ModelTextMessageConnection",
    items:  Array< {
      __typename: "TextMessage",
      id: string,
      message: string,
      isRead?: boolean | null,
      createdAt: string,
      chatRoomId: string,
      ownerProfileId: string,
      ownerProfile?:  {
        __typename: "Profile",
        id: string,
        type: profileTypes,
        bandName?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    messages?:  {
      __typename: "ModelTextMessageConnection",
      items:  Array< {
        __typename: "TextMessage",
        id: string,
        message: string,
        isRead?: boolean | null,
        createdAt: string,
        chatRoomId: string,
        ownerProfileId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      messages?:  {
        __typename: "ModelTextMessageConnection",
        nextToken?: string | null,
      } | null,
      profiles?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfileChatRoomsQueryVariables = {
  id: string,
};

export type GetProfileChatRoomsQuery = {
  getProfileChatRooms?:  {
    __typename: "ProfileChatRooms",
    id: string,
    profileId: string,
    chatRoomId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      messages?:  {
        __typename: "ModelTextMessageConnection",
        nextToken?: string | null,
      } | null,
      profiles?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfileChatRoomsQueryVariables = {
  filter?: ModelProfileChatRoomsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfileChatRoomsQuery = {
  listProfileChatRooms?:  {
    __typename: "ModelProfileChatRoomsConnection",
    items:  Array< {
      __typename: "ProfileChatRooms",
      id: string,
      profileId: string,
      chatRoomId: string,
      profile:  {
        __typename: "Profile",
        id: string,
        type: profileTypes,
        bandName?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomIdQueryVariables = {
  chatRoomId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTextMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomIdQuery = {
  messagesByChatRoomId?:  {
    __typename: "ModelTextMessageConnection",
    items:  Array< {
      __typename: "TextMessage",
      id: string,
      message: string,
      isRead?: boolean | null,
      createdAt: string,
      chatRoomId: string,
      ownerProfileId: string,
      ownerProfile?:  {
        __typename: "Profile",
        id: string,
        type: profileTypes,
        bandName?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProfileChatRoomsByProfileIdQueryVariables = {
  profileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileChatRoomsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfileChatRoomsByProfileIdQuery = {
  profileChatRoomsByProfileId?:  {
    __typename: "ModelProfileChatRoomsConnection",
    items:  Array< {
      __typename: "ProfileChatRooms",
      id: string,
      profileId: string,
      chatRoomId: string,
      profile:  {
        __typename: "Profile",
        id: string,
        type: profileTypes,
        bandName?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProfileChatRoomsByChatRoomIdQueryVariables = {
  chatRoomId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileChatRoomsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfileChatRoomsByChatRoomIdQuery = {
  profileChatRoomsByChatRoomId?:  {
    __typename: "ModelProfileChatRoomsConnection",
    items:  Array< {
      __typename: "ProfileChatRooms",
      id: string,
      profileId: string,
      chatRoomId: string,
      profile:  {
        __typename: "Profile",
        id: string,
        type: profileTypes,
        bandName?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTextMessageByChatRoomIdSubscriptionVariables = {
  chatRoomId: string,
};

export type OnCreateTextMessageByChatRoomIdSubscription = {
  onCreateTextMessageByChatRoomId?:  {
    __typename: "TextMessage",
    id: string,
    message: string,
    isRead?: boolean | null,
    createdAt: string,
    chatRoomId: string,
    ownerProfileId: string,
    ownerProfile?:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    type: profileTypes,
    bandName?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    chatRooms?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    type: profileTypes,
    bandName?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    chatRooms?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    type: profileTypes,
    bandName?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    chatRooms?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTextMessageSubscriptionVariables = {
  filter?: ModelSubscriptionTextMessageFilterInput | null,
};

export type OnCreateTextMessageSubscription = {
  onCreateTextMessage?:  {
    __typename: "TextMessage",
    id: string,
    message: string,
    isRead?: boolean | null,
    createdAt: string,
    chatRoomId: string,
    ownerProfileId: string,
    ownerProfile?:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTextMessageSubscriptionVariables = {
  filter?: ModelSubscriptionTextMessageFilterInput | null,
};

export type OnUpdateTextMessageSubscription = {
  onUpdateTextMessage?:  {
    __typename: "TextMessage",
    id: string,
    message: string,
    isRead?: boolean | null,
    createdAt: string,
    chatRoomId: string,
    ownerProfileId: string,
    ownerProfile?:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTextMessageSubscriptionVariables = {
  filter?: ModelSubscriptionTextMessageFilterInput | null,
};

export type OnDeleteTextMessageSubscription = {
  onDeleteTextMessage?:  {
    __typename: "TextMessage",
    id: string,
    message: string,
    isRead?: boolean | null,
    createdAt: string,
    chatRoomId: string,
    ownerProfileId: string,
    ownerProfile?:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    messages?:  {
      __typename: "ModelTextMessageConnection",
      items:  Array< {
        __typename: "TextMessage",
        id: string,
        message: string,
        isRead?: boolean | null,
        createdAt: string,
        chatRoomId: string,
        ownerProfileId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    messages?:  {
      __typename: "ModelTextMessageConnection",
      items:  Array< {
        __typename: "TextMessage",
        id: string,
        message: string,
        isRead?: boolean | null,
        createdAt: string,
        chatRoomId: string,
        ownerProfileId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    messages?:  {
      __typename: "ModelTextMessageConnection",
      items:  Array< {
        __typename: "TextMessage",
        id: string,
        message: string,
        isRead?: boolean | null,
        createdAt: string,
        chatRoomId: string,
        ownerProfileId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    profiles?:  {
      __typename: "ModelProfileChatRoomsConnection",
      items:  Array< {
        __typename: "ProfileChatRooms",
        id: string,
        profileId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfileChatRoomsSubscriptionVariables = {
  filter?: ModelSubscriptionProfileChatRoomsFilterInput | null,
};

export type OnCreateProfileChatRoomsSubscription = {
  onCreateProfileChatRooms?:  {
    __typename: "ProfileChatRooms",
    id: string,
    profileId: string,
    chatRoomId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      messages?:  {
        __typename: "ModelTextMessageConnection",
        nextToken?: string | null,
      } | null,
      profiles?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileChatRoomsSubscriptionVariables = {
  filter?: ModelSubscriptionProfileChatRoomsFilterInput | null,
};

export type OnUpdateProfileChatRoomsSubscription = {
  onUpdateProfileChatRooms?:  {
    __typename: "ProfileChatRooms",
    id: string,
    profileId: string,
    chatRoomId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      messages?:  {
        __typename: "ModelTextMessageConnection",
        nextToken?: string | null,
      } | null,
      profiles?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileChatRoomsSubscriptionVariables = {
  filter?: ModelSubscriptionProfileChatRoomsFilterInput | null,
};

export type OnDeleteProfileChatRoomsSubscription = {
  onDeleteProfileChatRooms?:  {
    __typename: "ProfileChatRooms",
    id: string,
    profileId: string,
    chatRoomId: string,
    profile:  {
      __typename: "Profile",
      id: string,
      type: profileTypes,
      bandName?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      chatRooms?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      messages?:  {
        __typename: "ModelTextMessageConnection",
        nextToken?: string | null,
      } | null,
      profiles?:  {
        __typename: "ModelProfileChatRoomsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
