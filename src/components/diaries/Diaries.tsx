'use client';

export const dynamic = 'force-dynamic';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';

const query = gql`
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

const Diaries = () => {
  // const { error, data } = useSuspenseQuery(query, {
  //   variables: { take: 10, skip: 0 },
  // });
  const { data, error } = useSuspenseQuery(query, {
    variables: { take: 10, skip: 0 },
  });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <h1>Diaries</h1>
      {data.readDiaries.data.map((diary) => (
        <div key={diary.id}>
          <h2>{diary.title}</h2>
          {diary.notes.map((note) => (
            <div key={note.id}>
              <h3>{note.title}</h3>

              <p>{note.text}</p>
              {note.images.map((image) => (
                <img key={image.url} src={image.url} alt={image.title} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Diaries;
