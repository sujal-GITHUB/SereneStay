import Image from 'next/image';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import logoLight from './logo_.png';
import logoDark from './logo.png';

const Agoda_logo: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // To ensure this works only on the client side

  return (
    <Image
      src={theme === 'dark' ? logoDark : logoLight}
      alt="Agoda Logo"
      width={150}
      height={150}
    />
  );
};

export default Agoda_logo;
