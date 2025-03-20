import { useMediaQuery } from '@mui/material';

export const useIsPhone = () => {
  const isPhone = useMediaQuery('(max-width: 760px)');
  return isPhone;
}