import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import ProjectCard from "@/components/project_card";
import SkillsSection from "@/components/skills_section";
import TimelineHighlight from "@/components/timeline_highlight";
import { projects } from "@/data/projects";
import { timeline } from "@/data/timeline";

const featured = projects.slice(0, 3);
const featuredTimeline = timeline.filter((entry) => entry.featured);

export default function Home() {
    return (
        <>
            <Head>
                <title>Preet Mistry — Engineer</title>
                <meta name="description" content="Engineering portfolio of Preet Mistry — Rust, computer graphics, deep learning, and systems programming." />
            </Head>
            <Container maxWidth={false} sx={{ px: { md: 6 }, py: 0 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        py: { md: 10, sm: 12 },
                        // gap: 1,
                        minHeight: '60vh',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <img
                        src="/images/gradphoto.jpg"
                        alt="Preet Mistry"
                        style={{
                            width: 230,
                            height: 230,
                            borderRadius: '50%',
                            // transform: 'scale(1.5)',
                            objectFit: 'cover',
                            border: '3px solid rgba(34, 211, 238, 0.4)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                            marginBottom: '20px',
                        }}
                    />
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            fontFamily: '"Orbitron", sans-serif',
                            fontSize: { md: '3rem', sm: '2rem' },
                            fontWeight: 800,
                            letterSpacing: '0.15em',
                            mb: 2,
                            lineHeight: 1.2,
                            background: 'linear-gradient(to right, #fff, #94a3b8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Preet Mistry
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { md: '1.125rem', sm: '1rem' },
                            color: '#94a3b8',
                            maxWidth: { md: 500, sm: '90%' },
                            mx: 'auto',
                            lineHeight: 1.7,
                            mb: 4,
                        }}
                    >
                        Engineer with diverse software experience including full-stack, microservices, web dev, machine learning, and graphics. Currently exploring Rust and agentic workflows.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                        {/* Row 1: Social icons */}
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Link
                                href="https://github.com/pmistry9597"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: 1.5,
                                    borderRadius: 2,
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                                aria-label="GitHub"
                            >
                                <img
                                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                    alt="GitHub"
                                    width={50}
                                    height={50}
                                    style={{ 
                                        filter: 'invert(1)',
                                        borderRadius: "50%",
                                    }}
                                />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/preet-mistry"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: 1.5,
                                    borderRadius: 2,
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                                aria-label="LinkedIn"
                            >
                                <img
                                    src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20140125013055"
                                    alt="LinkedIn"
                                    width={40}
                                    height={40}
                                    style={{ filter: 'grayscale(100%)' }}
                                />
                            </Link>
                        </Box>
                        {/* Row 2: CTA buttons */}
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Link href="/projects" passHref legacyBehavior>
                                <Typography
                                    sx={{
                                        border: '1px solid #22d3ee',
                                        color: '#22d3ee',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontFamily: '"Oswald", sans-serif',
                                        fontSize: '0.85rem',
                                        px: 5,
                                        py: 1.5,
                                        textAlign: 'center',
                                        borderRadius: 2,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            background: '#22d3ee',
                                            color: '#0a0e17',
                                        },
                                    }}
                                >
                                    View Projects
                                </Typography>
                            </Link>
                            <Link
                                href="/preet_mistry_resume.pdf"
                                target="_blank"
                                rel="noopener"
                                passHref
                                legacyBehavior
                            >
                                <Typography
                                    sx={{
                                        border: '1px solid rgba(148, 163, 184, 0.4)',
                                        color: '#e8eaf2',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontFamily: '"Oswald", sans-serif',
                                        fontSize: '0.85rem',
                                        px: 5,
                                        py: 1.5,
                                        textAlign: 'center',
                                        borderRadius: 2,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            borderColor: '#22d3ee',
                                            color: '#22d3ee',
                                        },
                                    }}
                                >
                                    Resume
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                </Box>

                {/* Featured Projects */}
                <Box sx={{ pt: 8, pb: 12, position: 'relative', zIndex: 1 }}>
                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                        <Typography
                            sx={{
                                fontFamily: '"Orbitron", sans-serif',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                color: '#e8eaf2',
                            }}
                        >
                            Featured Projects
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {featured.map((project) => (
                            <Grid key={project.slug} item xs={12} sm={6} md={4}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ mt: 6, textAlign: 'center' }}>
                        <Link href="/projects" passHref legacyBehavior>
                            <Typography
                                sx={{
                                    border: '1px solid rgba(34, 211, 238, 0.4)',
                                    color: '#22d3ee',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontFamily: '"Oswald", sans-serif',
                                    fontSize: '0.85rem',
                                    px: 4,
                                    py: 1.5,
                                    textAlign: 'center',
                                    borderRadius: 2,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        background: 'rgba(34, 211, 238, 0.1)',
                                        borderColor: '#22d3ee',
                                    },
                                }}
                            >
                                See All Projects
                            </Typography>
                        </Link>
                    </Box>
                </Box>

                {/* Timeline Highlights */}
                <Box sx={{ pt: 8, pb: 12, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography
                      sx={{
                        fontFamily: '"Orbitron", sans-serif',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#e8eaf2',
                      }}
                    >
                      Experience Highlights
                    </Typography>
                    <Typography
                      sx={{
                        color: '#94a3b8',
                        fontSize: '1rem',
                        maxWidth: 600,
                        mx: 'auto',
                        lineHeight: 1.7,
                      }}
                    >
                      Selected highlights from my professional journey.
                    </Typography>
                  </Box>
                  {featuredTimeline.map((entry) => (
                    <TimelineHighlight key={entry.id} entry={entry} />
                  ))}
                  <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Link href="/timeline" passHref legacyBehavior>
                      <Typography
                        sx={{
                          border: '1px solid rgba(34, 211, 238, 0.4)',
                          color: '#22d3ee',
                          textTransform: 'none',
                          fontWeight: 600,
                          fontFamily: '"Oswald", sans-serif',
                          fontSize: '0.85rem',
                          px: 4,
                          py: 1.5,
                          textAlign: 'center',
                          borderRadius: 2,
                          cursor: 'pointer',
                          '&:hover': {
                            background: 'rgba(34, 211, 238, 0.1)',
                            borderColor: '#22d3ee',
                          },
                        }}
                      >
                        View Full Timeline
                      </Typography>
                    </Link>
                  </Box>
                </Box>

                {/* Skills Section */}
                <SkillsSection />

            </Container>
        </>
    );
}