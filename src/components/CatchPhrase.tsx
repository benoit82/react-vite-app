import styled from 'styled-components';

type CatchPhraseProps = {
  dataId?: number;
};

export const CatchPhrase = styled.p.attrs((props) => ({
  'data-id': props.dataId,
}))<CatchPhraseProps>`
  background-color: rgba(119, 119, 119, 0.5);
  font-weight: bold;
  font-style: italic;
  font-size: 1.1rem;
  padding: 8px 16px;
  width: fit-content;
`;
