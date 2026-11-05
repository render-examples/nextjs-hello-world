import { Box, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import SkillChip from "./skill_chip";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '34, 211, 238';
}

export default function ProjectCard({ project }) {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                border: '1px solid rgba(35, 48, 74, 0.6)',
                background: 'rgba(26, 35, 53, 0.6)',
                color: '#e8eaf2',
                transition: 'all 0.3s ease',
                '&:hover': {
                    borderColor: 'rgba(34, 211, 238, 0.5)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: '"Orbitron", sans-serif',
                            fontSize: '1.1rem',
                            letterSpacing: '0.05em',
                            color: '#22d3ee',
                            flexShrink: 0,
                        }}
                    >
                        {project.title}
                    </Typography>
                    {project.status && (
                        <Box
                            sx={{
                                background: Array.isArray(project.status) ? `rgba(${hexToRgb(project.status[1])}, 0.1)` : 'rgba(34, 211, 238, 0.1)',
                                color: Array.isArray(project.status) ? project.status[1] : '#22d3ee',
                                border: `1px solid ${Array.isArray(project.status) ? hexToRgb(project.status[1]) + '50' : 'rgba(34, 211, 238, 0.3)'}`,
                                borderRadius: 2,
                                px: 1,
                                py: 0.25,
                                fontSize: '0.65rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                ml: 'auto',
                            }}
                        >
                            {Array.isArray(project.status) ? project.status[0] : project.status}
                        </Box>
                    )}
                </Box>
                <Typography
                    sx={{
                        mt: 1,
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                    }}
                >
                    {project.summary}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1, flexGrow: 1 }}>
                    {project.tech.map((skill, i) => (
                        <SkillChip key={i} item={skill} />
                    ))}
                </Box>
            </CardContent>
            <Box sx={{ p: 3, borderTop: '1px solid rgba(35, 48, 74, 0.4)' }}>
                <Link href={`/projects/${project.slug}`} passHref legacyBehavior>
                    <Typography
                        sx={{
                            width: '100%',
                            border: '1px solid rgba(34, 211, 238, 0.4)',
                            color: '#22d3ee',
                            textTransform: 'none',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            fontFamily: '"Oswald", sans-serif',
                            textAlign: 'center',
                            borderRadius: 2,
                            px: 3,
                            py: 1.5,
                            cursor: 'pointer',
                            '&:hover': {
                                background: 'rgba(34, 211, 238, 0.1)',
                                borderColor: '#22d3ee',
                            },
                        }}
                    >
                        Open Project
                    </Typography>
                </Link>
                
                <Box sx={{ mt: 1.5, minHeight: "3em", }}>
                    {project.links.repo && (
                        <Link
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                color: '#1976d2',
                                textDecoration: 'none',
                                fontSize: '0.8rem',
                                fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                '&:hover': {
                                    color: '#d946ef',
                                    textDecoration: 'none',
                                },
                            }}
                        >
                            ↗ REPO
                        </Link>
                    )}
                </Box>
            </Box>
        </Card>
    );
}