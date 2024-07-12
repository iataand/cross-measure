/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfileInput = {
  id?: string | null;
  type: profileTypes;
  bandName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};

export enum profileTypes {
  musician = "musician",
  band = "band",
}

export type ModelProfileConditionInput = {
  id?: ModelStringInput | null;
  type?: ModelprofileTypesInput | null;
  bandName?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  and?: Array<ModelProfileConditionInput | null> | null;
  or?: Array<ModelProfileConditionInput | null> | null;
  not?: ModelProfileConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelprofileTypesInput = {
  eq?: profileTypes | null;
  ne?: profileTypes | null;
};

export type Profile = {
  __typename: "Profile";
  id: string;
  type: profileTypes;
  bandName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProfileInput = {
  id: string;
  type?: profileTypes | null;
  bandName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};

export type DeleteProfileInput = {
  id: string;
};

export type CreateTextMessageInput = {
  id?: string | null;
  message: string;
  isRead?: boolean | null;
  createdAt?: string | null;
  chatRoomId: string;
  ownerProfileId: string;
};

export type ModelTextMessageConditionInput = {
  message?: ModelStringInput | null;
  isRead?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  chatRoomId?: ModelIDInput | null;
  ownerProfileId?: ModelStringInput | null;
  and?: Array<ModelTextMessageConditionInput | null> | null;
  or?: Array<ModelTextMessageConditionInput | null> | null;
  not?: ModelTextMessageConditionInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type TextMessage = {
  __typename: "TextMessage";
  id: string;
  message: string;
  isRead?: boolean | null;
  createdAt: string;
  chatRoomId: string;
  ownerProfileId: string;
  ownerProfile?: Profile | null;
  updatedAt: string;
};

export type UpdateTextMessageInput = {
  id: string;
  message?: string | null;
  isRead?: boolean | null;
  createdAt?: string | null;
  chatRoomId?: string | null;
  ownerProfileId?: string | null;
};

export type DeleteTextMessageInput = {
  id: string;
};

export type CreateChatRoomInput = {
  id?: string | null;
  musicianProfileId: string;
  bandProfileId: string;
};

export type ModelChatRoomConditionInput = {
  musicianProfileId?: ModelStringInput | null;
  bandProfileId?: ModelStringInput | null;
  and?: Array<ModelChatRoomConditionInput | null> | null;
  or?: Array<ModelChatRoomConditionInput | null> | null;
  not?: ModelChatRoomConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ChatRoom = {
  __typename: "ChatRoom";
  id: string;
  musicianProfileId: string;
  musicianProfile?: Profile | null;
  bandProfileId: string;
  bandProfile?: Profile | null;
  messages?: ModelTextMessageConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelTextMessageConnection = {
  __typename: "ModelTextMessageConnection";
  items: Array<TextMessage | null>;
  nextToken?: string | null;
};

export type UpdateChatRoomInput = {
  id: string;
  musicianProfileId?: string | null;
  bandProfileId?: string | null;
};

export type DeleteChatRoomInput = {
  id: string;
};

export type ModelProfileFilterInput = {
  id?: ModelStringInput | null;
  type?: ModelprofileTypesInput | null;
  bandName?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelProfileFilterInput | null> | null;
  or?: Array<ModelProfileFilterInput | null> | null;
  not?: ModelProfileFilterInput | null;
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection";
  items: Array<Profile | null>;
  nextToken?: string | null;
};

export type ModelTextMessageFilterInput = {
  id?: ModelIDInput | null;
  message?: ModelStringInput | null;
  isRead?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  chatRoomId?: ModelIDInput | null;
  ownerProfileId?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTextMessageFilterInput | null> | null;
  or?: Array<ModelTextMessageFilterInput | null> | null;
  not?: ModelTextMessageFilterInput | null;
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null;
  musicianProfileId?: ModelStringInput | null;
  bandProfileId?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelChatRoomFilterInput | null> | null;
  or?: Array<ModelChatRoomFilterInput | null> | null;
  not?: ModelChatRoomFilterInput | null;
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection";
  items: Array<ChatRoom | null>;
  nextToken?: string | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  bandName?: ModelSubscriptionStringInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionProfileFilterInput | null> | null;
  or?: Array<ModelSubscriptionProfileFilterInput | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionTextMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  message?: ModelSubscriptionStringInput | null;
  isRead?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  chatRoomId?: ModelSubscriptionIDInput | null;
  ownerProfileId?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTextMessageFilterInput | null> | null;
  or?: Array<ModelSubscriptionTextMessageFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  musicianProfileId?: ModelSubscriptionStringInput | null;
  bandProfileId?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionChatRoomFilterInput | null> | null;
  or?: Array<ModelSubscriptionChatRoomFilterInput | null> | null;
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput;
  condition?: ModelProfileConditionInput | null;
};

export type CreateProfileMutation = {
  createProfile?: {
    __typename: "Profile";
    id: string;
    type: profileTypes;
    bandName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput;
  condition?: ModelProfileConditionInput | null;
};

export type UpdateProfileMutation = {
  updateProfile?: {
    __typename: "Profile";
    id: string;
    type: profileTypes;
    bandName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput;
  condition?: ModelProfileConditionInput | null;
};

export type DeleteProfileMutation = {
  deleteProfile?: {
    __typename: "Profile";
    id: string;
    type: profileTypes;
    bandName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateTextMessageMutationVariables = {
  input: CreateTextMessageInput;
  condition?: ModelTextMessageConditionInput | null;
};

export type CreateTextMessageMutation = {
  createTextMessage?: {
    __typename: "TextMessage";
    id: string;
    message: string;
    isRead?: boolean | null;
    createdAt: string;
    chatRoomId: string;
    ownerProfileId: string;
    ownerProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    updatedAt: string;
  } | null;
};

export type UpdateTextMessageMutationVariables = {
  input: UpdateTextMessageInput;
  condition?: ModelTextMessageConditionInput | null;
};

export type UpdateTextMessageMutation = {
  updateTextMessage?: {
    __typename: "TextMessage";
    id: string;
    message: string;
    isRead?: boolean | null;
    createdAt: string;
    chatRoomId: string;
    ownerProfileId: string;
    ownerProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    updatedAt: string;
  } | null;
};

export type DeleteTextMessageMutationVariables = {
  input: DeleteTextMessageInput;
  condition?: ModelTextMessageConditionInput | null;
};

export type DeleteTextMessageMutation = {
  deleteTextMessage?: {
    __typename: "TextMessage";
    id: string;
    message: string;
    isRead?: boolean | null;
    createdAt: string;
    chatRoomId: string;
    ownerProfileId: string;
    ownerProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    updatedAt: string;
  } | null;
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput;
  condition?: ModelChatRoomConditionInput | null;
};

export type CreateChatRoomMutation = {
  createChatRoom?: {
    __typename: "ChatRoom";
    id: string;
    musicianProfileId: string;
    musicianProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    bandProfileId: string;
    bandProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: "ModelTextMessageConnection";
      items: Array<{
        __typename: "TextMessage";
        id: string;
        message: string;
        isRead?: boolean | null;
        createdAt: string;
        chatRoomId: string;
        ownerProfileId: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput;
  condition?: ModelChatRoomConditionInput | null;
};

export type UpdateChatRoomMutation = {
  updateChatRoom?: {
    __typename: "ChatRoom";
    id: string;
    musicianProfileId: string;
    musicianProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    bandProfileId: string;
    bandProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: "ModelTextMessageConnection";
      items: Array<{
        __typename: "TextMessage";
        id: string;
        message: string;
        isRead?: boolean | null;
        createdAt: string;
        chatRoomId: string;
        ownerProfileId: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput;
  condition?: ModelChatRoomConditionInput | null;
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?: {
    __typename: "ChatRoom";
    id: string;
    musicianProfileId: string;
    musicianProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    bandProfileId: string;
    bandProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: "ModelTextMessageConnection";
      items: Array<{
        __typename: "TextMessage";
        id: string;
        message: string;
        isRead?: boolean | null;
        createdAt: string;
        chatRoomId: string;
        ownerProfileId: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetProfileQueryVariables = {
  id: string;
};

export type GetProfileQuery = {
  getProfile?: {
    __typename: "Profile";
    id: string;
    type: profileTypes;
    bandName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProfilesQuery = {
  listProfiles?: {
    __typename: "ModelProfileConnection";
    items: Array<{
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetTextMessageQueryVariables = {
  id: string;
};

export type GetTextMessageQuery = {
  getTextMessage?: {
    __typename: "TextMessage";
    id: string;
    message: string;
    isRead?: boolean | null;
    createdAt: string;
    chatRoomId: string;
    ownerProfileId: string;
    ownerProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    updatedAt: string;
  } | null;
};

export type ListTextMessagesQueryVariables = {
  filter?: ModelTextMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTextMessagesQuery = {
  listTextMessages?: {
    __typename: "ModelTextMessageConnection";
    items: Array<{
      __typename: "TextMessage";
      id: string;
      message: string;
      isRead?: boolean | null;
      createdAt: string;
      chatRoomId: string;
      ownerProfileId: string;
      ownerProfile?: {
        __typename: "Profile";
        id: string;
        type: profileTypes;
        bandName?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetChatRoomQueryVariables = {
  id: string;
};

export type GetChatRoomQuery = {
  getChatRoom?: {
    __typename: "ChatRoom";
    id: string;
    musicianProfileId: string;
    musicianProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    bandProfileId: string;
    bandProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: "ModelTextMessageConnection";
      items: Array<{
        __typename: "TextMessage";
        id: string;
        message: string;
        isRead?: boolean | null;
        createdAt: string;
        chatRoomId: string;
        ownerProfileId: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListChatRoomsQuery = {
  listChatRooms?: {
    __typename: "ModelChatRoomConnection";
    items: Array<{
      __typename: "ChatRoom";
      id: string;
      musicianProfileId: string;
      musicianProfile?: {
        __typename: "Profile";
        id: string;
        type: profileTypes;
        bandName?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      bandProfileId: string;
      bandProfile?: {
        __typename: "Profile";
        id: string;
        type: profileTypes;
        bandName?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      messages?: {
        __typename: "ModelTextMessageConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetMessagesByChatRoomIdQueryVariables = {
  chatRoomId: string;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelTextMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type GetMessagesByChatRoomIdQuery = {
  getMessagesByChatRoomId?: {
    __typename: "ModelTextMessageConnection";
    items: Array<{
      __typename: "TextMessage";
      id: string;
      message: string;
      isRead?: boolean | null;
      createdAt: string;
      chatRoomId: string;
      ownerProfileId: string;
      ownerProfile?: {
        __typename: "Profile";
        id: string;
        type: profileTypes;
        bandName?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateTextMessageByChatRoomIdSubscriptionVariables = {
  chatRoomId: string;
};

export type OnCreateTextMessageByChatRoomIdSubscription = {
  onCreateTextMessageByChatRoomId?: {
    __typename: "TextMessage";
    id: string;
    message: string;
    isRead?: boolean | null;
    createdAt: string;
    chatRoomId: string;
    ownerProfileId: string;
    ownerProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    updatedAt: string;
  } | null;
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null;
};

export type OnCreateProfileSubscription = {
  onCreateProfile?: {
    __typename: "Profile";
    id: string;
    type: profileTypes;
    bandName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null;
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?: {
    __typename: "Profile";
    id: string;
    type: profileTypes;
    bandName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null;
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?: {
    __typename: "Profile";
    id: string;
    type: profileTypes;
    bandName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateTextMessageSubscriptionVariables = {
  filter?: ModelSubscriptionTextMessageFilterInput | null;
};

export type OnCreateTextMessageSubscription = {
  onCreateTextMessage?: {
    __typename: "TextMessage";
    id: string;
    message: string;
    isRead?: boolean | null;
    createdAt: string;
    chatRoomId: string;
    ownerProfileId: string;
    ownerProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    updatedAt: string;
  } | null;
};

export type OnUpdateTextMessageSubscriptionVariables = {
  filter?: ModelSubscriptionTextMessageFilterInput | null;
};

export type OnUpdateTextMessageSubscription = {
  onUpdateTextMessage?: {
    __typename: "TextMessage";
    id: string;
    message: string;
    isRead?: boolean | null;
    createdAt: string;
    chatRoomId: string;
    ownerProfileId: string;
    ownerProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    updatedAt: string;
  } | null;
};

export type OnDeleteTextMessageSubscriptionVariables = {
  filter?: ModelSubscriptionTextMessageFilterInput | null;
};

export type OnDeleteTextMessageSubscription = {
  onDeleteTextMessage?: {
    __typename: "TextMessage";
    id: string;
    message: string;
    isRead?: boolean | null;
    createdAt: string;
    chatRoomId: string;
    ownerProfileId: string;
    ownerProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    updatedAt: string;
  } | null;
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null;
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?: {
    __typename: "ChatRoom";
    id: string;
    musicianProfileId: string;
    musicianProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    bandProfileId: string;
    bandProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: "ModelTextMessageConnection";
      items: Array<{
        __typename: "TextMessage";
        id: string;
        message: string;
        isRead?: boolean | null;
        createdAt: string;
        chatRoomId: string;
        ownerProfileId: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null;
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?: {
    __typename: "ChatRoom";
    id: string;
    musicianProfileId: string;
    musicianProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    bandProfileId: string;
    bandProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: "ModelTextMessageConnection";
      items: Array<{
        __typename: "TextMessage";
        id: string;
        message: string;
        isRead?: boolean | null;
        createdAt: string;
        chatRoomId: string;
        ownerProfileId: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null;
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?: {
    __typename: "ChatRoom";
    id: string;
    musicianProfileId: string;
    musicianProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    bandProfileId: string;
    bandProfile?: {
      __typename: "Profile";
      id: string;
      type: profileTypes;
      bandName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages?: {
      __typename: "ModelTextMessageConnection";
      items: Array<{
        __typename: "TextMessage";
        id: string;
        message: string;
        isRead?: boolean | null;
        createdAt: string;
        chatRoomId: string;
        ownerProfileId: string;
        updatedAt: string;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
