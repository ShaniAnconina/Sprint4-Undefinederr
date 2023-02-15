import * as React from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

    function LinearProgressWithLabel(props) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        props.num,
                    )}`}</Typography>
                </Box>
            </Box>
        );
    }

    LinearProgressWithLabel.propTypes = {
        value: PropTypes.number.isRequired
    }

    export function LinearWithValueLabel({ progressValue, statNum }) {
        const [progress, setProgress] = React.useState(10)
        const [jobsNum, setJobsNum] = React.useState(0)

        React.useEffect(() => {
            setProgress(progressValue)
            setJobsNum(statNum)
        }, [progressValue])

        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={progress} num={jobsNum} />
            </Box>
        )
    }