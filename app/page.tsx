'use client';

import React, { useEffect, useRef } from 'react';
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
  KeyboardArrowUp,
  Code,
  Storage,
  Cloud,
  Devices,
} from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import SampleWorkCard from './components/SampleWorkCard';
import { useSampleWork } from './store/useSampleWork';
import SampleWorkModal from './components/modals/SampleWorkModal';
import ResumeModal from './components/modals/ResumeModal';
import SocialButton from './components/SocialButton';

import ExperienceItem from './components/ExperienceItem';

// Import screenshots
import budget1 from '../public/budget_app/Screenshot_20260327_081404.jpg';
import budget2 from '../public/budget_app/Screenshot_20260327_081414.jpg';
import budget3 from '../public/budget_app/Screenshot_20260327_081422.jpg';
import budget4 from '../public/budget_app/Screenshot_20260327_081429.jpg';
import budget5 from '../public/budget_app/Screenshot_20260327_081442.jpg';
import budget_icon from '../public/budget_app/app_icon.jpg';

// ISSC Screenshots
import issc1 from '../public/issc/issc_dashboard.png';
import issc2 from '../public/issc/committee_meetings_page.png';
import issc3 from '../public/issc/committee_members_page.png';
import issc4 from '../public/issc/document_repository_page.png';
import issc5 from '../public/issc/add_meeting_page.png';
import issc6 from '../public/issc/view_document_modal.png';

// Competent Leaders Screenshots
import leader1 from '../public/competent_leaders/home.png';
import leader2 from '../public/competent_leaders/about_us.png';
import leader3 from '../public/competent_leaders/approach.png';
import leader4 from '../public/competent_leaders/services.png';

// Miltonstark Screenshots
import milton1 from '../public/miltonstark/miltonstark.png';

// ISPA Screenshots
import ispa1 from '../public/ispa/ISPA Dashboard.png';
import ispa2 from '../public/ispa/Pressure Analysis Main.png';
import ispa3 from '../public/ispa/Risk Appetite Main.png';
import ispa4 from '../public/ispa/Risk Assessment Main.png';
import ispa5 from '../public/ispa/Assessment History.png';
import ispa6 from '../public/ispa/Risk Appetite View Assessment.png';
import ispa7 from '../public/ispa/Security Pressure Analysis View Assessment.png';
import ispa8 from '../public/ispa/Security Risk Assessment View Assessment.png';
import ispa9 from '../public/ispa/Security Risk Take Assessment.png';




/* ───────────────────── DATA ───────────────────── */

interface NavLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string | null;
  screenshots: string[];
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
  // {
  //   title: 'Assessment Library',
  //   description: 'A centralized assessment platform that evaluates user security awareness and tracks learning progress across cybersecurity training modules.',
  //   tags: ['Django Rest Framework', 'Next.js', 'MUI', 'Postgres', 'Docker'],
  //   link: 'cytechint.io',
  //   image: null,
  //   screenshots: [

  //   ],
  // },
  // {
  //   title: 'Course Library',
  //   description: 'An educational course management system that delivers targeted cybersecurity training, focusing on identifying and mitigating phishing vulnerabilities.',
  //   tags: ['Django Rest Framework', 'Next.js', 'MUI', 'Postgres', 'Docker'],
  //   link: 'cytechint.io',
  //   image: null,
  //   screenshots: [

  //   ],
  // },
  // {
  //   title: 'Phishing Simulation',
  //   description: 'A sophisticated phishing simulation platform that sends realistic phishing emails to users, tracking engagement patterns and identifying vulnerability levels for targeted security training.',
  //   tags: ['Django Rest Framework', 'Next.js', 'MUI', 'Postgres', 'Docker'],
  //   link: 'cytechint.io',
  //   image: null,
  //   screenshots: [

  //   ],
  // },
  {
    title: 'Information Security Pressure Analysis (CyTech Module)',
    description: 'A comprehensive security vulnerability assessment platform that conducts three critical evaluations to identify and compute organizational security weaknesses, providing actionable insights for risk mitigation.',
    tags: ['Django Rest Framework', 'Next.js', 'MUI', 'Postgres', 'Docker'],
    link: 'cytechint.io',
    image: ispa1.src,
    screenshots: [
      ispa1.src,
      ispa4.src,
      ispa2.src,
      ispa3.src,
      ispa5.src,
      ispa6.src,
      ispa7.src,
      ispa8.src,
      ispa9.src
    ],
  },
  {
    title: 'Information Security Steering Committee (CyTech Module)',
    description: 'A comprehensive committee management platform that enables seamless meeting scheduling, member administration, and document collaboration for organized team workflows.',
    tags: ['Django Ninja', 'Next.js', 'MUI', 'Postgres', 'Docker', 'AWS'],
    link: 'cytechint.io',
    image: issc1.src,
    screenshots: [
      issc1.src,
      issc2.src,
      issc3.src,
      issc4.src,
      issc5.src,
      issc6.src
    ],
  },
  {
    title: 'Android Budget App',
    description: 'Manage your finances with a top-down "Envelope" system that lets you allocate your income into custom sub-budgets and track your remaining balance in real-time.',
    tags: ['Flutter', 'Firebase'],
    // link: '#',
    image: budget_icon.src,
    screenshots: [
      budget1.src,
      budget2.src,
      budget3.src,
      budget4.src,
      budget5.src
    ],
  },
  {
    title: 'Competent Leaders',
    description: 'A specialized executive recruitment platform that connects higher education institutions with top-tier leadership talent through expert industry consultancy.',
    tags: ['Next.js', 'CSS', 'JavaScript', 'TailwindCSS'],
    link: 'https://www.competent-leaders.com/',
    image: leader1.src,
    screenshots: [
      leader1.src,
      leader2.src,
      leader3.src,
      leader4.src
    ],
  },
  {
    title: 'Miltonstark',
    description: 'This project is an impact-driven professional platform centered on energy advocacy and strategic growth.',
    tags: ['Next.js', 'CSS', 'JavaScript', 'TailwindCSS'],
    link: 'https://www.miltonstark.com/',
    image: milton1.src,
    screenshots: [
      milton1.src
    ],
  }
];

const experiences: Experience[] = [

  {
    company: 'Cytech International, Inc.',
    role: 'Full-Stack Developer',
    period: 'March 2025 - April 2026',
    description: [
      'Built a committee management platform (ISSC) that digitized meeting workflows and document handling for 50+ members across each different clients.',
      'Architected scalable REST APIs using Django Ninja and Implemented Celery for background email tasks.',
      'Reduced page load times by ~40% through code splitting, lazy loading, and image optimization using Next.js best practices.',
      'Developed a scalable, real-time ETL pipeline for network telemetry, enabling efficient ingestion, transformation, and storage of scan data using Apache Kafka, MongoDB, and PostgreSQL',
    ],
    skills: ['React', 'Next.js', 'Python', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Postgres', 'MUI', 'AWS', 'Docker'],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    period: '2020 - 2023',
    description: [
      'Designing and developing high-performance web applications using modern frameworks like React and Next.js.',
      'Building scalable backend services and APIs with Python and cloud-native technologies.',
      'Focused on delivering exceptional user experiences through intuitive design and performance optimization.',
      'Continuous learning and experimentation with emerging technologies to stay at the forefront of web development.',
    ],
    skills: ['React', 'Python', 'TypeScript', 'TailwindCSS', 'Next.js'],
  }
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

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

/* ───────────── SCROLL ANIMATION HOOK ───────────── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => {
      observer.unobserve(node);
    };
  }, []);

  return ref;
}

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal();
  return (
    <Box
      ref={ref}
      className="scroll-reveal"
      sx={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Box>
  );
}

/* ───────────────────── SKILL ITEMS ───────────────────── */

const skillAreas = [
  { icon: <Code sx={{ fontSize: 28 }} />, label: 'Frontend', items: 'React, Next.js, TypeScript, MUI, TailwindCSS' },
  { icon: <Storage sx={{ fontSize: 28 }} />, label: 'Backend', items: 'Python, Django Rest Framework, Django Ninja, REST APIs, MongoDB, Postgres,Kafka, Redis, Celery' },
  { icon: <Cloud sx={{ fontSize: 28 }} />, label: 'Cloud & DevOps', items: 'AWS, Docker' },
  { icon: <Devices sx={{ fontSize: 28 }} />, label: 'Mobile', items: 'Flutter, Firebase, Cross-platform' },
];

/* ───────────────────── PAGE ───────────────────── */

export default function Home() {
  const { setResumeOpen } = useSampleWork();
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
              JEV
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
              <Button
                variant="contained"
                size="small"
                onClick={() => scrollToSection('contact')}
                sx={{
                  px: 2.5,
                  py: 0.8,
                  fontSize: '0.78rem',
                  borderRadius: '50px',
                  boxShadow: '0 4px 12px rgba(168, 85, 247, 0.25)',
                }}
              >
                Get in Touch
              </Button>
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
                    p: 5,
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
                I build <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>fast, scalable web applications</Box> that help businesses grow. From concept to deployment — full-stack, start to finish.
              </Typography>

              <Stack direction="row" spacing={3} alignItems="center" className="fade-up fade-up-delay-3">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => setResumeOpen(true)}
                  sx={{
                    px: 5,
                    py: 1.8,
                    fontSize: '1rem',
                    boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3)'
                  }}
                >
                  Resumé
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    px: 4,
                    py: 1.7,
                    fontSize: '1rem',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      bgcolor: 'rgba(168, 85, 247, 0.08)',
                    },
                  }}
                >
                  Let&apos;s Talk
                </Button>

                <Stack direction="row" spacing={2}>
                  {[
                    { icon: <LinkedIn />, href: 'https://www.linkedin.com/in/john-eric-valmores-393a63127/' },
                    { icon: <GitHub />, href: 'https://github.com/valmores' },
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

      {/* ── Available for Hire Banner ── */}
      {/* <Box
        sx={{
          py: 2.5,
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.02) 50%, rgba(168, 85, 247, 0.08) 100%)',
          borderBottom: '1px solid rgba(168, 85, 247, 0.15)',
          borderTop: '1px solid rgba(168, 85, 247, 0.15)',
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: '#22c55e',
                boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)',
                animation: `${pulse} 2s ease-in-out infinite`,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
              }}
            >
              <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>Open to new projects</Box>
              {' — Currently available for freelance & contract work.'}
            </Typography>
          </Stack>
        </Container>
      </Box> */}

      {/* ── Work Section ── */}
      <Box id="work" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Typography variant="h2" sx={{ mb: 8 }}>
              Things I&apos;ve Built
            </Typography>
          </ScrollReveal>
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
          <ScrollReveal>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
              Career Journey
            </Typography>
            <Typography variant="h2" sx={{ mb: 8 }}>
              Work Experience
            </Typography>
          </ScrollReveal>
          <Box sx={{ mt: 5 }}>
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <ExperienceItem {...exp} />
              </ScrollReveal>
            ))}
          </Box>
        </Container>
      </Box>

      <Divider sx={{ mx: 'auto', maxWidth: 'lg' }} />

      {/* ── About ── */}
      <Box id="about" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="md">
          <ScrollReveal>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
              About
            </Typography>
            <Typography variant="h2" sx={{ mb: 4 }}>
              A little about me
            </Typography>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
              I&apos;m a Computer Engineering graduate from Mindanao University of Science
              and Technology (2016) who specializes in <Box component="span" sx={{ color: 'text.primary', fontWeight: 500 }}>taking products from zero to production</Box>. I&apos;ve shipped 4+ projects in the past year alone — from internal enterprise tools to client-facing platforms.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, lineHeight: 1.8 }}>
              When I&apos;m not coding, you can find me exploring new tools, contributing to
              open-source projects, or working on personal experiments.
            </Typography>
          </ScrollReveal>

          {/* Skills Grid */}
          <ScrollReveal delay={0.2}>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3, fontSize: '0.75rem' }}>
              What I Bring
            </Typography>
            <Grid container spacing={2.5}>
              {skillAreas.map((skill) => (
                <Grid key={skill.label} size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      p: 3,
                      height: '130px',
                      borderRadius: 2,
                      border: '1px solid rgba(255,255,255,0.06)',
                      bgcolor: 'rgba(255,255,255,0.02)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(168, 85, 247, 0.3)',
                        bgcolor: 'rgba(168, 85, 247, 0.04)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1.5 }}>
                      <Box sx={{ color: 'primary.main' }}>{skill.icon}</Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {skill.label}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                      {skill.items}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </ScrollReveal>
        </Container>
      </Box>

      <Divider sx={{ mx: 'auto', maxWidth: 'lg' }} />

      {/* ── Contact ── */}
      <Box id="contact" sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="md">
          <ScrollReveal>
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
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
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
                href="https://www.linkedin.com/in/john-eric-valmores-393a63127/"
                variant="circle"
              />
            </Stack>
          </ScrollReveal>
        </Container>
      </Box>

      {/* ── Footer ── */}
      <Box
        sx={{
          py: 5,
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem', letterSpacing: '0.04em' }}>
              &copy; {new Date().getFullYear()} John Eric Valmores
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <SocialButton
                icon={<GitHub sx={{ fontSize: 18 }} />}
                href="https://github.com/valmores"
                variant="circle"
                sx={{ width: 36, height: 36 }}
              />
              <SocialButton
                icon={<LinkedIn sx={{ fontSize: 18 }} />}
                href="https://www.linkedin.com/in/john-eric-valmores-393a63127/"
                variant="circle"
                sx={{ width: 36, height: 36 }}
              />
              <IconButton
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                size="small"
                sx={{
                  width: 36,
                  height: 36,
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'text.secondary',
                  transition: 'all 0.3s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    bgcolor: 'rgba(168, 85, 247, 0.08)',
                  },
                }}
              >
                <KeyboardArrowUp sx={{ fontSize: 18 }} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <SampleWorkModal />
      <ResumeModal />
    </Box>
  );
}
