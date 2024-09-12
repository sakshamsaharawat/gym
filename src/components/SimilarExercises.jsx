import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    console.log("-----target    ", targetMuscleExercises)
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant="h3" sx={{ mb: '20px' }}>Exercises that target the same muscle group</Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </Stack>

        </Box>
    )
}

export default SimilarExercises
