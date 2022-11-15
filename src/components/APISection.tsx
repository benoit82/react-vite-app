import useGetStore from 'hooks/useGetStore';
import { FC } from 'react';
import { APITestContainer } from './APITestContainer';
import { Button } from './Button';
import { Title } from './Title';

export const APISection: FC = () => {
  const { fakeData, getFakeData } = useGetStore();

  return (
    <APITestContainer>
      <Title>{fakeData}</Title>
      <Button onClick={getFakeData}>Get a random lorem title</Button>
    </APITestContainer>
  );
};
