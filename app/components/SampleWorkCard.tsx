import { Box, Grid, Stack, Typography, Link as MuiLink, IconButton } from '@mui/material'
import { ArrowOutward } from '@mui/icons-material'
import React from 'react'
import { useSampleWork } from '../store/useSampleWork'

export default function SampleWorkCard({ project }: { project: any }) {
    const { setOpen, setProject } = useSampleWork();
    const handleViewProject = () => {
        setProject(project)
        setOpen(true)
    }
    return (
        <Grid onClick={handleViewProject} size={{ xs: 12, md: 6 }} key={project.title}>
            <Box
                sx={{
                    cursor: 'pointer',
                    bgcolor: 'background.paper',
                    border: '1px solid rgba(255,255,255,0.06)',
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: 0.5,
                    '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: 200,
                        bgcolor: 'rgba(255,255,255,0.03)',
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        borderRadius: 1,
                        border: '1px solid rgba(255,255,255,0.06)'
                    }}
                >
                    {project.image ? (
                        <Box
                            component="img"
                            src={project.image}
                            alt={project.title}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    ) : (
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                            screenshot placeholder
                        </Typography>
                    )}
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1.5 }}>
                        <Typography variant="h3">
                            {project.title}
                        </Typography>
                        {project.link && project.link !== '#' && (
                            <IconButton
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(project.link, '_blank');
                                }}
                                sx={{
                                    color: 'primary.main',
                                    border: '1px solid rgba(168, 85, 247, 0.2)',
                                    '&:hover': {
                                        bgcolor: 'rgba(168, 85, 247, 0.1)',
                                        border: '1px solid rgba(168, 85, 247, 0.5)',
                                    }
                                }}
                            >
                                <ArrowOutward sx={{ fontSize: 18 }} />
                            </IconButton>
                        )}
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5 }}>
                        {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                        {project.tags.map((tag) => (
                            <Typography
                                key={tag}
                                variant="caption"
                                sx={{
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    px: 1.5,
                                    py: 0.4,
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.05em',
                                    color: 'text.secondary',
                                }}
                            >
                                {tag}
                            </Typography>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </Grid>
    )
}