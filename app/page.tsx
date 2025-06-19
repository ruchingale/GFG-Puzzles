'use client';

import {
  Box,
  Button,
  Checkbox,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { puzzleCategories } from './data/puzzles';
import Navbar from './Navbar';

export default function Home() {
  const [categories, setCategories] = useState(puzzleCategories);
  const [progress, setProgress] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('puzzleProgress');
    const merged = puzzleCategories.map(cat => ({
      ...cat,
      puzzles: cat.puzzles.map(p => ({
        ...p,
        completed: saved ? !!JSON.parse(saved)[p.id] : false,
      })),
    }));
    setCategories(merged);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const obj: Record<string, boolean> = {};
    categories.forEach(cat =>
      cat.puzzles.forEach(p => (obj[p.id] = p.completed))
    );
    localStorage.setItem('puzzleProgress', JSON.stringify(obj));
    const total = categories.reduce((a, c) => a + c.puzzles.length, 0);
    const done = categories.reduce(
      (a, c) => a + c.puzzles.filter(p => p.completed).length,
      0
    );
    setProgress((done / total) * 100);
  }, [categories, hydrated]);

  const togglePuzzle = (ci: number, pi: number) => {
    setCategories(prev =>
      prev.map((c, i) =>
        i === ci
          ? {
              ...c,
              puzzles: c.puzzles.map((p, j) =>
                j === pi ? { ...p, completed: !p.completed } : p
              ),
            }
          : c
      )
    );
  };

  const resetProgress = () => {
    localStorage.removeItem('puzzleProgress');
    setCategories(
      puzzleCategories.map(cat => ({
        ...cat,
        puzzles: cat.puzzles.map(p => ({ ...p, completed: false })),
      }))
    );
    setProgress(0);
  };

  const navLinks = [
    { label: "Striver's A2Z DSA Sheet", href: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/' },
    { label: "Striver's SDE Sheet", href: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems' },
    { label: 'LeetCode Top SQL 50', href: 'https://leetcode.com/studyplan/top-sql-50/' },
  ];

  if (!hydrated) return null;

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          display: 'flex',
          justifyContent: 'center',
          px: 2,
          py: 6,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 960 }}>
          <Box sx={{ height: 100 }} />

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: '#FF69B4', mb: 3, mt: { xs: 4, sm: 6 }, textAlign: 'center' }}
          >
            Puzzle Tracker
          </Typography>

          <Paper
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 4,
              backgroundColor: '#FFE4EC',
              boxShadow: '0 4px 10px rgba(255,105,180,0.10)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 500, color: '#C2185B' }}>Progress</Typography>
              <Typography variant="body1" sx={{ fontWeight: 700, color: '#FF69B4' }}>
                {progress.toFixed(1)}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 10,
                borderRadius: 5,
                bgcolor: '#F8EAFB',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#FF69B4',
                },
              }}
            />
            <Button
              onClick={resetProgress}
              variant="contained"
              sx={{
                mt: 2,
                borderRadius: 3,
                textTransform: 'none',
                background: 'linear-gradient(90deg, #FF69B4 0%, #C2185B 100%)',
                fontWeight: 600,
                color: '#fff',
                boxShadow: '0 2px 8px 0 #FF69B4',
                '&:hover': { background: 'linear-gradient(90deg, #C2185B 0%, #FF69B4 100%)' },
              }}
            >
              Reset Progress
            </Button>
          </Paper>

          {categories.map((category, ci) => (
            <Box key={category.name} sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#FF69B4', mb: 1.5 }}>
                {category.name}
              </Typography>
              <Paper elevation={2} sx={{ p: 2.5, borderRadius: 3, backgroundColor: '#F8EAFB' }}>
                <List>
                  {category.puzzles.map((p, pi) => (
                    <ListItem
                      key={p.id}
                      dense
                      sx={{
                        bgcolor: p.completed ? '#FFB6C1' : '#FFE4EC',
                        mb: 1,
                        borderRadius: '12px',
                        px: 2,
                        py: 1.5,
                        boxShadow: '0px 3px 6px rgba(255,105,180,0.06)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: '#FFD1E3',
                          transform: 'scale(1.01)',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: '36px' }}>
                        <Checkbox
                          edge="start"
                          checked={p.completed}
                          onChange={() => togglePuzzle(ci, pi)}
                          sx={{
                            color: '#FF69B4',
                            '&.Mui-checked': { color: '#C2185B' },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              textDecoration: p.completed ? 'line-through' : 'none',
                              color: p.completed ? '#B39DDB' : '#8D1457',
                              fontWeight: p.completed ? 400 : 500,
                              transition: 'color 0.2s',
                            }}
                            onMouseOver={e => (e.currentTarget.style.color = '#FF69B4')}
                            onMouseOut={e => (e.currentTarget.style.color = p.completed ? '#B39DDB' : '#8D1457')}
                          >
                            {p.title}
                          </a>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
              {ci < categories.length - 1 && (
                <Divider sx={{ my: 4, bgcolor: '#FFD1E3', height: 2, borderRadius: 1 }} />
              )}
            </Box>
          ))}

          <Typography
            variant="subtitle2"
            sx={{ textAlign: 'center', color: '#FF69B4', mt: 2 }}
          >
            "Slay one puzzle at a time, darling 💖"
          </Typography>

          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              position: 'fixed',
              bottom: 32,
              right: 32,
              bgcolor: '#FF69B4',
              color: '#fff',
              borderRadius: '50%',
              minWidth: 0,
              width: 56,
              height: 56,
              boxShadow: '0 4px 16px rgba(255, 105, 180, 0.18)',
              fontSize: 32,
              zIndex: 1000,
              '&:hover': { bgcolor: '#C2185B' },
            }}
          >
            ↑
          </Button>
        </Box>
      </Box>
    </>
  );
}
