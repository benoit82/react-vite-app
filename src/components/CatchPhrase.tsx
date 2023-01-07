import styled, { css } from 'styled-components';

type CatchPhraseProps = {
  dataId?: number;
};

const afterSizeBox = '15px';

const after = css`
  &:after {
    content: attr(data-id);
    margin-left: 5px;
    padding: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #d84444;
    width: ${afterSizeBox};
    height: ${afterSizeBox};
    font-size: 0.95rem;
    background-color: #3b1d1dc7;
  }
`;

export const CatchPhrase = styled.p<CatchPhraseProps>`
  background-color: rgba(119, 119, 119, 0.5);
  font-weight: bold;
  font-style: italic;
  font-size: 1.1rem;
  padding: 8px 16px;
  width: fit-content;
  ${({ dataId }) => (dataId && dataId > 0 ? after : '')}
`;
