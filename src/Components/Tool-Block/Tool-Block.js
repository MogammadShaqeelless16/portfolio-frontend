import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* Enable hover effect */
  transition: all 0.2s ease-in-out; /* Smooth hover animations */
  margin: 1rem; /* Add spacing between blocks */

  &:hover {
    transform: scale(1.02); /* Slight hover scale for a subtle effect */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Enhance hover shadow */
  }

  h3 {
    margin: 0.5rem 0; /* Add some margin between title and description */
    font-size: 1.2rem; /* Adjust title font size */
    font-weight: bold;
  }

  p {
    font-size: 1rem; /* Adjust description font size */
    text-align: center; /* Center description text */
  }
`;

const Block = ({ title, description, onClick }) => {
  return (
    <StyledBlock className="block" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledBlock>
  );
};

export default Block;
