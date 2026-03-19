'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  ArrowOutward,
  Twitter,
} from '@mui/icons-material';
import Grid from '@mui/material/Grid';
/* ───────────────────── DATA ───────────────────── */

interface NavLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string | null;
}

const navLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of what this project does and the technologies used.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    image: null,
  },
  {
    title: 'Project Two',
    description: 'A brief description of what this project does and the technologies used.',
    tags: ['Next.js', 'Firebase', 'MUI'],
    link: '#',
    image: null,
  },
  {
    title: 'Project Three',
    description: 'A brief description of what this project does and the technologies used.',
    tags: ['Flutter', 'Dart', 'Firestore'],
    link: '#',
    image: null,
  },
  {
    title: 'Project Four',
    description: 'A brief description of what this project does and the technologies used.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    image: null,
  },
];

/* ───────────────────── PAGE ───────────────────── */

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>

      {/* ── Navbar ── */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'rgba(10,10,10,0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.03)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.85rem' }}
            >
              JEV.
            </Typography>
            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {navLinks.map((l) => (
                <MuiLink
                  key={l.label}
                  href={l.href}
                  underline="none"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.82rem',
                    letterSpacing: '0.06em',
                    transition: 'color 0.3s',
                    '&:hover': { color: 'text.primary' },
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.href.replace('#', ''));
                  }}
                >
                  {l.label}
                </MuiLink>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ── Hero ── */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          pt: { xs: 12, md: 8 },
          pb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            {/* Left: Profile Image with Glow */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ position: 'relative', width: { xs: 280, md: 400 }, height: { xs: 280, md: 400 } }}>
                {/* Layered Glow Effects */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    opacity: 0.1,
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '2.5%',
                    left: '2.5%',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    opacity: 0.15,
                    zIndex: 1,
                  }}
                />
                <Avatar
                  src="/prof.png"
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: '8px solid #1a1a1a',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    zIndex: 2,
                    position: 'relative'
                  }}
                />
              </Box>
            </Grid>

            {/* Right: Content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h6"
                className="fade-up"
                sx={{ 
                  color: 'text.secondary', 
                  mb: 2,
                  fontSize: '0.9rem',
                  letterSpacing: '0.3em'
                }}
              >
                HI THERE! I'M
              </Typography>
              <Typography
                variant="h1"
                className="fade-up fade-up-delay-1"
                sx={{ 
                  fontSize: { xs: '3rem', md: '4.5rem' }, 
                  lineHeight: 1.1, 
                  mb: 3,
                  fontWeight: 800,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Box component="span" sx={{ color: 'primary.main' }}>
                  JOHN ERIC
                </Box>
                <Box component="span">
                  VALMORES
                </Box>
              </Typography>
              <Typography
                variant="body1"
                className="fade-up fade-up-delay-2"
                sx={{ 
                  color: 'text.secondary', 
                  maxWidth: 540, 
                  mb: 6, 
                  fontSize: '1.1rem',
                  lineHeight: 1.7
                }}
              >
                A <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>Front-End Web Developer</Box> passionate about creating interactive applications and experiences on the web.
              </Typography>
              
              <Stack direction="row" spacing={3} alignItems="center" className="fade-up fade-up-delay-3">
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  sx={{ 
                    px: 5, 
                    py: 1.8,
                    fontSize: '1rem',
                    boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3)'
                  }}
                >
                  Resumé
                </Button>
                
                <Stack direction="row" spacing={2}>
                  {[
                    { icon: <LinkedIn />, href: '#' },
                    { icon: <GitHub />, href: 'https://github.com/valmores' },
                    { icon: <Twitter />, href: '#' }, // Assuming Twitter for now
                  ].map((social, i) => (
                    <IconButton
                      key={i}
                      href={social.href}
                      target="_blank"
                      sx={{
                        bgcolor: 'background.paper',
                        color: 'primary.main',
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        transition: 'all 0.3s',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                          transform: 'translateY(-4px)'
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ mx: 'auto', maxWidth: 'lg' }} />

      {/* ── Work Section ── */}
      <Box id="work" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
            Selected Work
          </Typography>
          <Typography variant="h2" sx={{ mb: 8 }}>
            Things I've Built
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={i}>
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    border: '1px solid rgba(255,255,255,0.06)',
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                      screenshot placeholder
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h3" sx={{ mb: 1.5 }}>
                      {project.title}
                    </Typography>
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
                    <MuiLink
                      href={project.link}
                      underline="none"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        fontSize: '0.82rem',
                        color: 'text.primary',
                        letterSpacing: '0.04em',
                        transition: 'opacity 0.3s',
                        '&:hover': { opacity: 0.6 },
                      }}
                    >
                      View Project <ArrowOutward sx={{ fontSize: 14 }} />
                    </MuiLink>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ mx: 'auto', maxWidth: 'lg' }} />

      {/* ── About ── */}
      <Box id="about" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="md">
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
            About
          </Typography>
          <Typography variant="h2" sx={{ mb: 4 }}>
            A little about me
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            I'm a Computer Engineering graduate from Mindanao University of Science
            and Technology (2016). I enjoy building things for the web and continuously
            learning new technologies.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            When I'm not coding, you can find me exploring new tools, contributing to
            open-source projects, or working on personal experiments.
          </Typography>
        </Container>
      </Box>

      <Divider sx={{ mx: 'auto', maxWidth: 'lg' }} />

      {/* ── Contact ── */}
      <Box id="contact" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="md">
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
            Contact
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Let's work together
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, maxWidth: 500 }}>
            Have a project in mind or just want to say hello?
            Feel free to reach out.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<Email />}
              href="mailto:johnericvalmores@gmail.com"
            >
              Email me
            </Button>
            <IconButton
              color="primary"
              href="https://github.com/valmores"
              target="_blank"
              sx={{ border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              color="primary"
              href="#"
              target="_blank"
              sx={{ border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <LinkedIn />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      {/* ── Footer ── */}
      <Box
        sx={{
          py: 4,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem', letterSpacing: '0.04em' }}>
          &copy; {new Date().getFullYear()} John Eric Valmores
        </Typography>
      </Box>
    </Box>
  );
}
