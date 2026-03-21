import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export default function ExperienceItem({ company, role, period, description, skills }: ExperienceItemProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        pl: { xs: 3, md: 5 },
        pb: 8,
        '&:last-child': { pb: 0 },
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 8,
          bottom: 0,
          width: '1px',
          bgcolor: 'rgba(255,255,255,0.1)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          left: -4,
          top: 8,
          width: 9,
          height: 9,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
        },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
            {role}
          </Typography>
          <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 600 }}>
            {company}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            bgcolor: 'rgba(255,255,255,0.03)',
            px: 2,
            py: 0.5,
            borderRadius: 1,
            border: '1px solid rgba(255,255,255,0.06)',
            fontSize: '0.85rem',
          }}
        >
          {period}
        </Typography>
      </Stack>

      <Box sx={{ mb: 4 }}>
        {description.map((item, i) => (
          <Typography
            key={i}
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 1.5,
              position: 'relative',
              pl: 3,
              lineHeight: 1.7,
              '&::before': {
                content: '"▹"',
                position: 'absolute',
                left: 0,
                color: 'primary.main',
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {skills.map((skill) => (
          <Typography
            key={skill}
            variant="caption"
            sx={{
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 0.5,
              px: 1.5,
              py: 0.5,
              fontSize: '0.75rem',
              color: 'text.secondary',
              bgcolor: 'rgba(255,255,255,0.02)',
              transition: 'all 0.3s',
              '&:hover': {
                borderColor: 'primary.main',
                color: 'primary.main',
                bgcolor: 'rgba(168, 85, 247, 0.05)',
              },
            }}
          >
            {skill}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
