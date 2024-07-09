'use client';
import styled from 'styled-components';
import { BlogItem } from '../blog-item';
import { MaxWidthContainer } from '@/style';

const BlogItemsContainer = styled.div`
  padding: 0 64px;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(341px, 1fr));
  gap: 24px;
  @media (width < 768px) {
    padding: 0px 20px 48px 20px;
    grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  }
`;

export const BlogList = ({ posts }) => {
  return (
    <MaxWidthContainer>
      <BlogItemsContainer>
        {posts.length > 0 &&
          posts.map((post, key) => <BlogItem key={key} blog={post} />)}
      </BlogItemsContainer>
    </MaxWidthContainer>
  );
};
