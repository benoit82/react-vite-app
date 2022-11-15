import useGetStore from 'hooks/useGetStore';
import { FC } from 'react';
import { Button } from './Button';
import { NestedContainer } from './NestedContainer';

export const SwitchThemeSection: FC = () => {
  const { count, toggleTheme } = useGetStore();

  return (
    <>
      <p>
        switch theme counter : <span>{count}</span>
      </p>
      <NestedContainer>
        <Button onClick={toggleTheme}>switch theme</Button>
      </NestedContainer>
    </>
  );
};
