import { AppBar, Box, Link as MuiLink, Toolbar, Typography } from '@mui/material';

const navLinks = [
  { label: "Striver's A2Z DSA Sheet", href: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/' },
  { label: "Striver's SDE Sheet", href: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems' },
  { label: 'LeetCode Top SQL 50', href: 'https://leetcode.com/studyplan/top-sql-50/' },
];

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{
        left: 0,
        right: 0,
        top: 0,
        width: '100%',
        background: 'linear-gradient(90deg, #FF69B4 0%, #C2185B 100%)',
        color: '#fff',
        boxShadow: '0 4px 12px rgba(255, 105, 180, 0.18)',
        borderRadius: 0,
        zIndex: 1201,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          minHeight: 64,
          px: 4,
        }}
      >
        {/* Left side: Logo + Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <span style={{ fontSize: 28 }}>💖</span>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              fontSize: '1.3rem',
              color: '#fff',
              letterSpacing: 0.5,
            }}
          >
            Placement Prep Tracker
          </Typography>
        </Box>

        {/* Right side: Nav Links */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          {navLinks.map(link => (
            <MuiLink
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#ffffff',
                background: 'linear-gradient(to right, #f48fb1, #ce93d8)',
                px: 3,
                py: 1,
                borderRadius: 999,
                boxShadow: '0 3px 8px rgba(240, 98, 146, 0.3)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  background: 'linear-gradient(to right, #f06292, #ba68c8)',
                  color: '#fff5f8',
                  transform: 'scale(1.05)',
                  textDecoration: 'none',
                },
              }}
            >
              {link.label}
            </MuiLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
