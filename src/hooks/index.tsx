import { useMediaQuery } from '@mui/material';

export const useIsPhone = () => {
  const isPhone = useMediaQuery('(max-width: 600px)');
  return isPhone;
}