import styled from 'styled-components';
import { Button } from './Button';
import { Container } from './Container';

export const NestedContainer = styled(Container)`
  background-color: #2b2b68;
  min-width: 0;
  min-height: 0;
  width: 300px;
  height: 300px;
  transition: background-color 500ms ease-in;
  &:hover {
    background-color: #6ea16e;
    & ${Button} {
      background-color: white;
    }
  }
`;
