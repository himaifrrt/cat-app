import React from 'react';
import styled from 'styled-components';

interface CatImageProps {
  imageUrl: string;
}

const StyledCatImage = styled.img`
  max-width: 500px;
  height: auto;
  width: 100%;
  margin-top: 20px;
`;

const CatImage: React.FC<CatImageProps> = ({ imageUrl }) => {
  return <StyledCatImage src={imageUrl} alt="Random Cat" />;
};

export default CatImage;
