'use client';

import {
  Box,
  Button,
  Checkbox,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { puzzleCategories } from './data/puzzles';

export default function Home() {
  const [categories, setCategories] = useState(puzzleCategories);
  const [progress, setProgress] = useState(0);

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('puzzleProgress');
    if (savedProgress) {
      setCategories(JSON.parse(savedProgress));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('puzzleProgress', JSON.stringify(categories));
    calculateProgress();
  }, [categories]);

  const calculateProgress = () => {
    const totalPuzzles = categories.reduce((acc, category) => acc + category.puzzles.length, 0);
    const completedPuzzles = categories.reduce(
      (acc, category) => acc + category.puzzles.filter(puzzle => puzzle.completed).length,
      0
    );
    setProgress((completedPuzzles / totalPuzzles) * 100);
  };

  const togglePuzzle = (categoryIndex: number, puzzleIndex: number) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].puzzles[puzzleIndex].completed = 
      !newCategories[categoryIndex].puzzles[puzzleIndex].completed;
    setCategories(newCategories);
  };

  const resetProgress = () => {
    localStorage.removeItem('puzzleProgress');
    setCategories(puzzleCategories);
    setProgress(0);
  };

  return (
    <Box sx={{ minHeight: '100vh', p: 4, bgcolor: 'background.default' }}>
      <Box component="header" sx={{ maxWidth: 'md', mx: 'auto', mb: 4 }}>
        <Typography variant="h1" sx={{ mb: 2, color: 'primary.main' }}>
          Puzzle Tracker
        </Typography>
        <Paper sx={{ p: 2, mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>Progress</Typography>
            <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              {progress.toFixed(1)}%
            </Typography>
          </Box>
          <LinearProgress variant="determinate" value={progress} sx={{
            height: 8,
            borderRadius: 5,
            bgcolor: 'grey.300',
            '& .MuiLinearProgress-bar': {
              bgcolor: 'primary.main',
            },
          }} />
          <Button 
            onClick={resetProgress}
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
              color: 'white',
            }}
          >
            Reset Progress
          </Button>
        </Paper>
      </Box>

      <Box component="main" sx={{ maxWidth: 'md', mx: 'auto' }}>
        {categories.map((category, categoryIndex) => (
          <Box key={category.name} sx={{ mb: 4 }}>
            <Typography variant="h2" sx={{ mb: 2, color: 'primary.main' }}>
              {category.name}
            </Typography>
            <Paper>
              <List>
                {category.puzzles.map((puzzle, puzzleIndex) => (
                  <ListItem
                    key={puzzle.id}
                    dense
                    sx={{
                      bgcolor: 'background.paper',
                      mb: 1,
                      borderRadius: '8px',
                      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.03)',
                      '&:hover': {
                        bgcolor: 'secondary.light',
                      },
                    }}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={puzzle.completed}
                        onChange={() => togglePuzzle(categoryIndex, puzzleIndex)}
                        sx={{
                          color: 'secondary.main',
                          '&.Mui-checked': {
                            color: 'primary.main',
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <a
                        href={puzzle.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: puzzle.completed ? 'line-through' : 'none',
                          color: puzzle.completed ? '#B0B0B0' : '#4A4A4A',
                        }}
                      >
                        {puzzle.title}
                      </a>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
