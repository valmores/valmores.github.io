import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Slide, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { Close, Download, Fullscreen } from '@mui/icons-material'
import React from 'react'
import { useSampleWork } from '../../store/useSampleWork'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ResumeModal() {
    const { resumeOpen, setResumeOpen } = useSampleWork();

    const resumePath = '/resume/Fullstack Web Developer 2026.pdf';

    const handleDownload = () => {
        window.open(resumePath, '_blank');
    };

    return (
        <Dialog
            open={resumeOpen}
            onClose={() => setResumeOpen(false)}
            TransitionComponent={Transition}
            maxWidth="lg"
            fullWidth
            PaperProps={{
                sx: { 
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    backgroundImage: 'none',
                    height: '90vh'
                }
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, mt: 3 }}>
                <Typography variant="h4">Resumé</Typography>
                <IconButton onClick={() => setResumeOpen(false)}>
                    <Close sx={{ fontSize: 22 }} />
                </IconButton>
            </Box>

            <DialogContent sx={{ mt: 2, p: 0, overflow: 'hidden', height: '100%' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        mx: 'auto',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Box
                        component="iframe"
                        src={resumePath}
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            borderRadius: 1
                        }}
                        title="Resume Preview"
                    />
                </Box>
            </DialogContent>

            <DialogActions sx={{ p: 3, gap: 1 }}>
                <Button
                    onClick={() => setResumeOpen(false)}
                    sx={{ color: 'text.secondary' }}
                >
                    Close
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                    variant="contained"
                    startIcon={<Download />}
                    onClick={handleDownload}
                    sx={{
                        px: 4,
                        py: 1,
                        borderRadius: 2,
                        boxShadow: '0 4px 14px 0 rgba(168, 85, 247, 0.39)'
                    }}
                >
                    Download PDF
                </Button>
            </DialogActions>
        </Dialog>
    )
}
