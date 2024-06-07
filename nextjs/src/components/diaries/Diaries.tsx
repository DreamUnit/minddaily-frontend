import React from 'react';
import { Diary } from '@/src/@types/__graphqlTypes__/graphql';

interface DiariesProps {
  diariesData: Diary[];
}

const Diaries: React.FC<DiariesProps> = ({ diariesData }) => {
  return (
    <div>
      <h1>Diaries</h1>
      {diariesData.map((diary) => (
        <div key={diary.id}>
          <h2>{diary.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Diaries;
