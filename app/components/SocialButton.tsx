import { IconButton, SxProps, Theme } from '@mui/material';
import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
  variant?: 'square' | 'circle';
  sx?: SxProps<Theme>;
}

export default function SocialButton({ icon, href, variant = 'circle', sx }: SocialButtonProps) {
  const isSquare = variant === 'square';

  return (
    <IconButton
      href={href}
      target="_blank"
      sx={{
        width: 50,
        height: 50,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        bgcolor: 'background.paper',
        color: 'primary.main',
        border: 'none',
        borderRadius: isSquare ? 2 : '50%',
        '&:hover': {
          bgcolor: 'primary.main',
          color: 'white',
          transform: 'translateY(-4px)',
          borderColor: 'primary.main',
          boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3)',
        },
        ...sx,
      }}
    >
      {icon}
    </IconButton>
  );
}
