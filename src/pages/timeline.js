import { Box, Container, Typography, Chip, Paper, Divider } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import SkillChip from '@/components/skill_chip';
import { timeline, formatDate } from '@/data/timeline';

const typeIcons = {
  work: '💼',
  education: '🎓',
  break: '🌿',
  project: '🚀',
  travel: '✈️',
};

const typeColors = {
  work: '#22d3ee',
  education: '#8b5cf6',
  break: '#34d399',
  project: '#d946ef',
  travel: '#fbbf24',
};

function renderIcon({ entry, color, size = 40, fontSize = '1.25rem' }) {
  if (entry.image?.url) {
    return (
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${color}30, ${color}10)`,
          border: `1px solid ${color}50`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <img
          src={entry.image.url}
          alt={entry.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${color}30, ${color}10)`,
        border: `1px solid ${color}50`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize,
        flexShrink: 0,
      }}
    >
      {typeIcons[entry.type] || '📍'}
    </Box>
  );
}

export default function TimelinePage() {
  return (
    <>
      <Head>
        <title>Timeline — Preet Mistry</title>
        <meta name="description" content="Professional timeline and experience of Preet Mistry — software engineer, projects, education, and career journey." />
      </Head>
      <Container maxWidth={false} sx={{ px: { md: 6 }, py: 4 }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: '"Orbitron", sans-serif',
              fontSize: '2rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#e8eaf2',
              mb: 2,
            }}
          >
            Timeline
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
            A chronological journey through my career — roles, projects, education, and the spaces in between.
          </Typography>
        </Box>

        {/* Left-aligned timeline, centered on desktop */}
        <Box
          sx={{
            display: 'flex',
            // justifyContent: { xs: 'flex-start', md: 'flex-start' },
            width: '100%',
            
          }}
        >
          <Box
            sx={{
              // backgroundColor: 'red',
              position: 'relative',
              width: { xs: '100%', md: '100%' }, // 60px line + 820px card + 60px padding
              // Timeline line on the left
              '&::before': {
                content: '""',
                position: 'absolute',
                left: { xs: '24px', md: '60px' },
                top: 0,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(180deg, #22d3ee 0%, #d946ef 50%, #8b5cf6 100%)',
                borderRadius: 1,
              },
            }}
          >
          {timeline.map((entry, index) => (
            <TimelineEntry
              key={entry.id}
              entry={entry}
              index={index}
              isLast={index === timeline.length - 1}
            />
          ))}
        </Box>
        </Box>
      </Container>
    </>
  );
}

function TimelineEntry({ entry, index, isLast }) {
  const color = typeColors[entry.type] || '#22d3ee';

  return (
    <Box
      sx={{
        // backgroundColor: 'green',
        width: "100%",
        position: 'relative',
        display: 'flex',
        // All entries aligned to the right of the timeline line
        paddingLeft: { xs: '56px', md: '96px' },
        mb: 6,
      }}
    >
      {/* Timeline dot on the line */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '17px', md: '53px' },
          top: 8,
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: color,
          border: '3px solid #0a0e17',
          boxShadow: `0 0 0 2px ${color}`,
          zIndex: 2,
        }}
      />

      {/* Connector line to sub-items */}
      {entry.subItems && entry.subItems.length > 0 && (
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '24px', md: '60px' },
            top: 24,
            bottom: isLast ? 0 : -32,
            width: 1,
            borderLeft: `2px dashed ${color}40`,
          }}
        />
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'green',
          width: "100%",
        }}
      >

      {/* Main entry card */}
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: 'none', md: '900px' },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Paper
          sx={{
            background: 'rgba(18, 24, 38, 0.7)',
            backdropFilter: 'blur(12px)',
            border: `1px solid ${color}40`,
            borderRadius: 3,
            p: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: color,
              boxShadow: `0 8px 32px ${color}20`,
            },
          }}
          elevation={0}
        >
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
            {renderIcon({ entry, color })}
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                <Typography
                  sx={{
                    fontFamily: '"Orbitron", sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                </Typography>
                {entry.subtitle && (
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {entry.subtitle}
                  </Typography>
                )}
              </Box>
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#e8eaf2',
                  mb: 0.5,
                  lineHeight: 1.3,
                }}
              >
                {entry.title}
              </Typography>
              {entry.company && (
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    mb: 0.5,
                  }}
                >
                  {entry.company} {entry.location && `· ${entry.location}`}
                </Typography>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '0.75rem', color: '#64748b' }}>
                <span>{formatDate(entry.startDate)} — {entry.endDate === 'Present' ? 'Present' : formatDate(entry.endDate)}</span>
              </Box>
            </Box>
          </Box>

          {/* Description */}
          {entry.description && (
            <Typography
              sx={{
                color: '#cbd5e1',
                lineHeight: 1.7,
                fontSize: '0.9rem',
                mb: 2,
              }}
            >
              {entry.description.split('***').map((part, index) => {
                if (index % 2 === 1) {
                  return (
                    <Typography
                      key={index}
                      component="span"
                      sx={{ fontStyle: 'italic', color: '#94a3b8', fontSize: '0.85rem' }}
                    >
                      {part}
                    </Typography>
                  );
                }
                return part;
              })}
            </Typography>
          )}

          {/* Highlights */}
          {entry.highlights && entry.highlights.length > 0 && (
            <Box sx={{ mb: 2 }}>
              {entry.highlights.map((highlight, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.75 }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: color,
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  />
                  <Typography sx={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {highlight.split('***').map((part, index) => {
                      if (index % 2 === 1) {
                        return (
                          <Typography
                            key={index}
                            component="span"
                            sx={{ fontStyle: 'italic', color: '#94a3b8', fontSize: '0.8rem' }}
                          >
                            {part}
                          </Typography>
                        );
                      }
                      return part;
                    })}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}

          {/* Tech chips */}
          {entry.tech && entry.tech.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
              {entry.tech.map((tech, i) => (
                <SkillChip key={i} name={tech} color={color} />
              ))}
            </Box>
          )}

          {/* Links */}
          {entry.links && entry.links.length > 0 && (
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {entry.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: color,
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    fontFamily: '"Oswald", sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    '&:hover': {
                      color: '#fff',
                      textDecoration: 'none',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          )}

          {/* Sub-items */}
          {entry.subItems && entry.subItems.length > 0 && (
            <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${color}20` }}>
              <Typography
                sx={{
                  fontFamily: '"Orbitron", sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: color,
                  mb: 2,
                  textTransform: 'uppercase',
                }}
              >
                Related
              </Typography>
              {entry.subItems.map((sub, i) => (
                <SubItemCard key={sub.id || i} sub={sub} parentColor={color} index={i} />
              ))}
            </Box>
          )}
        </Paper>
      </Box>
      </Box>
    </Box>
  );
}

function SubItemCard({ sub, parentColor, index }) {
  const color = typeColors[sub.type] || parentColor;

  return (
    <Paper
      key={sub.id || index}
      sx={{
        background: 'rgba(18, 24, 38, 0.5)',
        backdropFilter: 'blur(8px)',
        border: `1px solid ${color}30`,
        borderRadius: 2,
        p: 2,
        mb: 1.5,
        ml: { xs: '16px', md: '24px' },
        borderLeft: `3px solid ${color}`,
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: color,
          background: 'rgba(18, 24, 38, 0.7)',
        },
      }}
      elevation={0}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1 }}>
        {renderIcon({ entry: sub, color, size: 28, fontSize: '0.85rem' })}
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
            <Typography
              sx={{
                fontFamily: '"Orbitron", sans-serif',
                fontSize: '0.65rem',
                fontWeight: 700,
                color: color,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {sub.type.charAt(0).toUpperCase() + sub.type.slice(1)}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#e8eaf2',
              mb: 0.5,
              lineHeight: 1.3,
            }}
          >
            {sub.title}
          </Typography>
        </Box>
      </Box>

      {sub.description && (
        <Typography
          sx={{
            color: '#94a3b8',
            lineHeight: 1.6,
            fontSize: '0.8rem',
            mb: 1,
            ml: { xs: '44px', md: '52px' },
          }}
        >
          {sub.description}
        </Typography>
      )}

      {sub.highlights && sub.highlights.length > 0 && (
        <Box sx={{ ml: { xs: '44px', md: '52px' }, mb: 1 }}>
          {sub.highlights.map((highlight, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.75, mb: 0.5 }}>
              <Box
                sx={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: color,
                  flexShrink: 0,
                  mt: 0.4,
                }}
              />
              <Typography sx={{ color: '#94a3b8', fontSize: '0.75rem', lineHeight: 1.5 }}>
                {highlight}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {sub.tech && sub.tech.length > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, ml: { xs: '44px', md: '52px' }, mb: 1 }}>
          {sub.tech.map((tech, i) => (
            <SkillChip key={i} name={tech} color={color} />
          ))}
        </Box>
      )}

      {sub.links && sub.links.length > 0 && (
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', ml: { xs: '44px', md: '52px' } }}>
          {sub.links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                color: color,
                textDecoration: 'none',
                fontSize: '0.7rem',
                fontWeight: 600,
                fontFamily: '"Oswald", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                '&:hover': {
                  color: '#fff',
                  textDecoration: 'none',
                },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      )}

      <Box
        sx={{
          width: "8em",
          ml: { xs: '44px', md: '52px' },
          mt: 2,
        }}
      >
        {sub.projectLink !== null ? <Link 
        href={sub.projectLink} 
        passHref legacyBehavior>
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
                    px: 0.5,
                    py: 1,
                    cursor: 'pointer',
                    '&:hover': {
                        background: 'rgba(34, 211, 238, 0.1)',
                        borderColor: '#22d3ee',
                    },
                }}
            >
                Open Project
            </Typography>
          </Link> : <></>}
      </Box>
    </Paper>
  );
}