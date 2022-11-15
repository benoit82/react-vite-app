import { useStore } from '@store/mainStore';

const useGetStore = () => {
  const storeData = useStore((state) => state);

  return storeData;
};

export default useGetStore;
