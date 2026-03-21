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
  keyframes,
} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  ArrowOutward,
  Twitter,
} from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import SampleWorkCard from './components/SampleWorkCard';
import { useSampleWork } from './store/useSampleWork';
import SampleWorkModal from './components/modals/SampleWorkModal';
import SocialButton from './components/SocialButton';
import ExperienceItem from './components/ExperienceItem';
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

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

const navLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const projects: Project[] = [
  {
    title: 'CyTech Module',
    description: 'A brief description of what this project does and the technologies used.',
    tags: ['Python Ninja', 'Next.js', 'MUI', 'Postgres'],
    link: '#',
    image: null,
  },
  {
    title: 'Budget Android',
    description: 'A brief description of what this project does and the technologies used.',
    tags: ['Flutter', 'Firebase'],
    link: '#',
    image: null,
  }
];

const experiences: Experience[] = [

  {
    company: 'Cytech International, Inc.',
    role: 'Full-Stack Developer',
    period: 'March 2025 - April 2026',
    description: [
      'Designing and developing high-performance web applications using modern frameworks like React and Next.js.',
      'Building scalable backend services and APIs with Python and cloud-native technologies.',
      'Focused on delivering exceptional user experiences through intuitive design and performance optimization.',
      'Continuous learning and experimentation with emerging technologies to stay at the forefront of web development.',
    ],
    skills: ['React', 'Next.js', 'Python', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Postgres', 'MUI', 'AWS'],
  },
];

/* ───────────────────── ANIMATIONS ───────────────────── */

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const spinReverse = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

/* ───────────────────── PAGE ───────────────────── */

export default function Home() {
  const { open, setOpen } = useSampleWork();
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
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 280, md: 400 },
                  height: { xs: 280, md: 400 },
                  transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  '&:hover': {
                    transform: 'scale(1.02) translateY(-10px)',
                  },
                  '&:hover .glow-1': {
                    animation: `${spin} 12s linear infinite`,
                    top: '-3%',
                    left: '-3%',
                    transform: 'scale(1.1)',
                    opacity: 0.25,
                    filter: 'blur(30px)',
                  },
                  '&:hover .glow-2': {
                    animation: `${spinReverse} 10s linear infinite`,
                    top: '-1.5%',
                    left: '-1.5%',
                    transform: 'scale(1.05)',
                    opacity: 0.3,
                    filter: 'blur(20px)',
                  },
                  '&:hover .profile-avatar': {
                    border: (theme) => `8px solid ${theme.palette.primary.main}`,
                    boxShadow: '0 40px 80px rgba(168, 85, 247, 0.4)',
                    transform: 'scale(1.02)',
                  }
                }}
              >
                {/* Background Glow 1 */}
                <Box
                  className="glow-1"
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
                    transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
                    filter: 'blur(20px)',
                  }}
                />
                {/* Background Glow 2 */}
                <Box
                  className="glow-2"
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
                    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                    filter: 'blur(10px)',
                  }}
                />
                {/* Profile Avatar */}
                <Avatar
                  className="profile-avatar"
                  src="/prof.png"
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: '8px solid #1a1a1a',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    zIndex: 2,
                    position: 'relative',
                    transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
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
                HI THERE! I&apos;M
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
                A <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>Full-Stack Web Developer</Box> passionate about creating interactive applications and experiences on the web.
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
                    { icon: <Twitter />, href: '#' },
                  ].map((social, i) => (
                    <SocialButton
                      key={i}
                      icon={social.icon}
                      href={social.href}
                      variant="square"
                    />
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
            Things I&apos;ve Built
          </Typography>
          {/* ---------Work Card-------------- */}
          <Grid container spacing={4}>
            {projects.map((project, i) => (
              <SampleWorkCard key={i} project={project} />
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ mx: 'auto', maxWidth: 'lg' }} />

      {/* ── Experience Section ── */}
      <Box id="experience" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="md">
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
            Career Journey
          </Typography>
          <Typography variant="h2" sx={{ mb: 8 }}>
            Work Experience
          </Typography>
          <Box sx={{ mt: 5 }}>
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} {...exp} />
            ))}
          </Box>
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
            I&apos;m a Computer Engineering graduate from Mindanao University of Science
            and Technology (2016). I enjoy building things for the web and continuously
            learning new technologies.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            When I&apos;m not coding, you can find me exploring new tools, contributing to
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
            Let&apos;s work together
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
            <SocialButton
              icon={<GitHub />}
              href="https://github.com/valmores"
              variant="circle"
            />
            <SocialButton
              icon={<LinkedIn />}
              href="#"
              variant="circle"
            />
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
      <SampleWorkModal />
    </Box>
  );
}
