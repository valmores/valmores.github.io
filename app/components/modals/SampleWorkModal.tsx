import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack, Typography, MobileStepper, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { ArrowOutward, Close, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
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

export default function SampleWorkModal() {
    const { open, setOpen, project } = useSampleWork();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 3;

    if (!project) return null;

    const handleNext = () => {
        if (activeStep < maxSteps - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            window.open(project.link, '_blank');
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        } else {
            setOpen(false)
        }
    };

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            TransitionComponent={Transition}
            keepMounted
            maxWidth="lg"
            fullWidth
            PaperProps={{
                sx: { 
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    backgroundImage: 'none'
                }
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 3, mt: 3 }}>
                <IconButton onClick={() => setOpen(false)}>
                    <Close sx={{ fontSize: 22 }} />
                </IconButton>
            </Box>

            <DialogTitle variant="h4" sx={{ pt: 0 }}>{project.title}</DialogTitle>

            <DialogContentText sx={{ px: 3, mb: 2 }}>
                {project.description}
            </DialogContentText>

            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            p: 2,
                            width: '100%',
                            height: 400,
                            bgcolor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: 0.5
                        }}
                    >
                        <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                            Step {activeStep + 1}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                            {project.title} Screenshot Placeholder
                        </Typography>
                    </Box>
                    <MobileStepper
                        variant="dots"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        sx={{
                            bgcolor: 'transparent',
                            '& .MuiMobileStepper-dot': {
                                bgcolor: 'rgba(255,255,255,0.2)'
                            },
                            '& .MuiMobileStepper-dotActive': {
                                bgcolor: 'primary.main'
                            }
                        }}
                        nextButton={null}
                        backButton={null}
                    />

                </Box>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 3 }}>
                    {project.tags.map((tag: string) => (
                        <Typography
                            key={tag}
                            variant="caption"
                            sx={{
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: 1,
                                px: 1.5,
                                py: 0.5,
                                fontSize: '0.75rem',
                                color: 'text.primary',
                                bgcolor: 'rgba(255,255,255,0.03)'
                            }}
                        >
                            {tag}
                        </Typography>
                    ))}
                </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 3, gap: 1 }}>
                <Button
                    onClick={handleBack}
                    startIcon={activeStep > 0 ? <KeyboardArrowLeft /> : null}
                    sx={{
                        color: 'text.secondary',
                        px: 2
                    }}
                >
                    {activeStep === 0 ? 'Close' : 'Back'}
                </Button>

                <Box sx={{ flex: '1 1 auto' }} />

                <Button
                    variant="contained"
                    disabled={activeStep === maxSteps - 1}
                    onClick={handleNext}
                    endIcon={<KeyboardArrowRight />}
                    sx={{
                        px: 4,
                        py: 1,
                        borderRadius: 2,
                        boxShadow: '0 4px 14px 0 rgba(168, 85, 247, 0.39)'
                    }}
                >
                    Next
                </Button>
            </DialogActions>
        </Dialog>
    )
}