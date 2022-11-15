import styled from 'styled-components';
import { containerGlobalSettings } from './helpers/constants';

export const APITestContainer = styled.div`
  color: #828282;
  max-width: 300px;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  /* row-gap: 16px; */
  row-gap: ${containerGlobalSettings.rowGap};
`;
