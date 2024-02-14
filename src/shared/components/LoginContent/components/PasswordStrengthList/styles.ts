import styled from 'styled-components';

export const ErrorDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  height: 15px;

  :first-child {
    margin-top: 3px;
  }
`;

export const ErrorText = styled.p<{ isMissing: boolean }>`
  color: ${({ isMissing }) => (isMissing ? '#d2d2d2' : '#b1ffca')};
  font-weight: 500;
`;

export const ObservationWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
