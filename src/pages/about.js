import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Head>
                <title>About — Preet Mistry</title>
            </Head>
            <Container maxWidth={false} sx={{ px: { md: 6 }, py: 0 }}>
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography
                        sx={{
                            fontFamily: '"Orbitron", sans-serif',
                            fontSize: '2rem',
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            color: '#e8eaf2',
                            mb: 1,
                        }}
                    >
                        About
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} lg={9}>
                        <Paper
                            sx={{
                                borderRadius: '12px',
                                border: '1px solid rgba(35, 48, 74, 0.6)',
                                background: 'rgba(26, 35, 53, 0.6)',
                                p: 5,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: '"Orbitron", sans-serif',
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: '#22d3ee',
                                    mb: 2,
                                    textTransform: 'uppercase',
                                }}
                            >
                                Background
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#e8eaf2',
                                    lineHeight: 1.8,
                                    fontSize: '0.95rem',
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                Computer engineering graduate from the University of Toronto (2024).
                                I have diverse software experience in many areas such as full-stack, microservices, web dev, machine learning, and graphics. Currently exploring Rust and agentic AI.
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#e8eaf2',
                                    lineHeight: 1.8,
                                    fontSize: '0.95rem',
                                    whiteSpace: 'pre-line',
                                    mt: 1,
                                }}
                            >
                                This portfolio is built with Next.js + MUI — designed to be
                                lightweight, fast, and easy to maintain. Cline + OpenRouter LLMs were used to help with this current overhaul.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Paper
                            sx={{
                                borderRadius: '12px',
                                border: '1px solid rgba(35, 48, 74, 0.6)',
                                background: 'rgba(26, 35, 53, 0.6)',
                                p: 3,
                                textAlign: 'center',
                                // mr: 7,
                                // ml: 7,
                                // gap: 2,
                            }}
                        >
                            {/* Profile photo */}
                            <Box sx={{ textAlign: 'center', mb: 3 }}>
                                <img
                                    src="/images/gradphoto.jpg"
                                    alt="Preet Mistry"
                                    style={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '3px solid rgba(34, 211, 238, 0.4)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                                    }}
                                />
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily: '"Orbitron", sans-serif',
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: '#22d3ee',
                                    mb: 2,
                                    textTransform: 'uppercase',
                                }}
                            >
                                Connect
                            </Typography>
                            {/* Social icons row */}
                            {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}> */}
                        {/* Row 1: Social icons */}
                        <Box sx={{ display: 'flex', gap: 3, alignItems: "center", justifyContent: "center" }}>
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
                            {/* Resume link */}
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mt={3}
                            >
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
                                            width: "60%",
                                        }}
                                    >
                                        Resume
                                    </Typography>
                                </Link>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}