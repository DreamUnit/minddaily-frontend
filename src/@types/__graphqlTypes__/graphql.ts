/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type Diary = {
  __typename?: 'Diary';
  createdDate: Scalars['DateTime']['output'];
  deletedDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  notes: Array<Maybe<DiaryNote>>;
  title: Scalars['String']['output'];
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['ID']['output'];
  version: Scalars['Int']['output'];
};

export type DiaryFilterOpts = {
  field: Scalars['String']['input'];
  intValue?: InputMaybe<Scalars['Int']['input']>;
  stringValue?: InputMaybe<Scalars['String']['input']>;
};

export type DiaryNote = {
  __typename?: 'DiaryNote';
  createdDate: Scalars['DateTime']['output'];
  deletedDate?: Maybe<Scalars['DateTime']['output']>;
  diaryId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  images: Array<Maybe<Image>>;
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
};

export type DiaryNoteFilterOpts = {
  field: Scalars['String']['input'];
  intValue?: InputMaybe<Scalars['Int']['input']>;
  stringValue?: InputMaybe<Scalars['String']['input']>;
};

export type Image = {
  __typename?: 'Image';
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDiary?: Maybe<ReadDiaryResponse>;
  createDiaryNote?: Maybe<ReadDiaryNoteResponse>;
  createUser?: Maybe<ReadUserResponse>;
  deleteDiary?: Maybe<ReadDiaryResponse>;
  deleteDiaryNote?: Maybe<ReadDiaryNoteResponse>;
  deleteUser?: Maybe<ReadUserResponse>;
  updateDiary?: Maybe<ReadDiaryResponse>;
  updateDiaryNote?: Maybe<ReadDiaryNoteResponse>;
  updateUser?: Maybe<ReadUserResponse>;
};

export type MutationCreateDiaryArgs = {
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type MutationCreateDiaryNoteArgs = {
  diaryId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type MutationCreateUserArgs = {
  authUserId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type MutationDeleteDiaryArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteDiaryNoteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateDiaryArgs = {
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateDiaryNoteArgs = {
  id: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type MutationUpdateUserArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  points?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  readDiaries?: Maybe<ReadDiariesResponse>;
  readDiaryById?: Maybe<ReadDiaryResponse>;
  readDiaryNoteById?: Maybe<ReadDiaryNoteResponse>;
  readDiaryNotes?: Maybe<ReadDiaryNotesResponse>;
  readUserById?: Maybe<ReadUserResponse>;
  readUsers?: Maybe<ReadUsersResponse>;
};

export type QueryReadDiariesArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};

export type QueryReadDiaryByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryReadDiaryNoteByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryReadDiaryNotesArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};

export type QueryReadUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryReadUsersArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};

export type ReadDiariesResponse = {
  __typename?: 'ReadDiariesResponse';
  code: Scalars['Int']['output'];
  count?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<Diary>>>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ReadDiaryNoteResponse = {
  __typename?: 'ReadDiaryNoteResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<DiaryNote>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ReadDiaryNotesResponse = {
  __typename?: 'ReadDiaryNotesResponse';
  code: Scalars['Int']['output'];
  count?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<DiaryNote>>>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ReadDiaryResponse = {
  __typename?: 'ReadDiaryResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<Diary>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ReadUserResponse = {
  __typename?: 'ReadUserResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<User>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ReadUsersResponse = {
  __typename?: 'ReadUsersResponse';
  code: Scalars['Int']['output'];
  count?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<User>>>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  active?: Maybe<Scalars['Boolean']['output']>;
  authUserId: Scalars['String']['output'];
  createdDate: Scalars['DateTime']['output'];
  deletedDate?: Maybe<Scalars['DateTime']['output']>;
  diaries?: Maybe<Array<Maybe<Diary>>>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissions: Array<Maybe<Scalars['String']['output']>>;
  points?: Maybe<Scalars['Int']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
};

export type UserFilterOpts = {
  field: Scalars['String']['input'];
  intValue?: InputMaybe<Scalars['Int']['input']>;
  stringValue?: InputMaybe<Scalars['String']['input']>;
};

export type ReadDiariesQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;

export type ReadDiariesQuery = {
  __typename?: 'Query';
  readDiaries?: {
    __typename?: 'ReadDiariesResponse';
    code: number;
    success: boolean;
    message?: string | null;
    count?: number | null;
    data?: Array<{
      __typename?: 'Diary';
      createdDate: any;
      updatedDate?: any | null;
      deletedDate?: any | null;
      version: number;
      id: string;
      userId: string;
      title: string;
      notes: Array<{
        __typename?: 'DiaryNote';
        createdDate: any;
        updatedDate?: any | null;
        deletedDate?: any | null;
        version: number;
        id: string;
        diaryId: string;
        title: string;
        text?: string | null;
        images: Array<{
          __typename?: 'Image';
          url: string;
          title?: string | null;
        } | null>;
      } | null>;
    } | null> | null;
  } | null;
};

export const ReadDiariesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ReadDiaries' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'readDiaries' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'success' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdDate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedDate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'deletedDate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'version' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'notes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdDate' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedDate' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'deletedDate' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'version' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'diaryId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'text' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'images' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'url' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReadDiariesQuery, ReadDiariesQueryVariables>;
