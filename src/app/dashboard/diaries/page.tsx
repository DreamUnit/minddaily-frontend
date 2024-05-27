'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';
import Diaries from '@/src/components/diaries/Diaries';
import {
  Diary,
  ReadDiariesQuery,
  ReadDiariesQueryVariables,
} from '@/src/@types/__graphqlTypes__/graphql';

const DIARIES_QUERY = gql`
  query ReadDiaries($take: Int!, $skip: Int!) {
    readDiaries(take: $take, skip: $skip) {
      code
      success
      message
      data {
        createdDate
        updatedDate
        deletedDate
        version
        id
        userId
        title
        notes {
          createdDate
          updatedDate
          deletedDate
          version
          id
          diaryId
          title
          text
          images {
            url
            title
          }
        }
      }
      count
    }
  }
`;

const DiariesPage = () => {
  const { data, error } = useSuspenseQuery<
    ReadDiariesQuery,
    ReadDiariesQueryVariables
  >(DIARIES_QUERY, {
    variables: { take: 10, skip: 0 },
  });

  if (error) return <p>Error loading diaries: {error.message}</p>;
  if (!data || !data.readDiaries || !data.readDiaries.data)
    return <p>No data available</p>;
  const filteredData = data.readDiaries.data.filter(
    (diary): diary is Diary => diary !== null
  );

  return <Diaries diariesData={filteredData} />;
};

export default DiariesPage;
