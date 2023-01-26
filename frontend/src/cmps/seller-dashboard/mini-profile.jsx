//TODO dynamic month
//TODO dynamic Member since

import * as React from 'react';
import Box from '@mui/material/Box';

import { utilService } from '../../services/util.service.js';
import { useState, useEffect } from 'react';

import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';


export function MiniProfile({ loggedinUser, onSellerProfile }) {




    function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
            </Box>
        );
    }

    function LinearWithValueLabel() {
        const [progress, setProgress] = React.useState(10);

        useEffect(() => { //INTERVAL
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
            }, 800);
            return () => {
                clearInterval(timer);
            };
        }, []);

        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={progress} />
            </Box>
        );
    }


    return <section className="mini-profile">
        <div className="profile-username flex space-around">
            <img src={loggedinUser.imgUrl} />
            <div className='flex column'>
                <h4>{loggedinUser.fullname}</h4>
                <h6>Member since: {loggedinUser.memberSince}</h6></div>
        </div>
        {onSellerProfile && <section> <div className="performance-stats flex column">
            <div className="stat flex space-between">
                Inbox response rate
                <LinearWithValueLabel />
            </div>
            <div className="stat flex space-between">
                Inbox response time
                <LinearWithValueLabel />
            </div>
            <div className="stat flex space-between">
                Order response rate
                <LinearWithValueLabel />
            </div>
            <div className="stat flex space-between">
                Delivered on time
                <LinearWithValueLabel />
            </div>
            <div className="stat flex space-between">
                Order completion
                <LinearWithValueLabel />
            </div>
        </div>
            <div className="finance stat flex space-between">

                <p>Jobs Done in January:</p>
                <p>{utilService.getRandomIntInclusive(5, 30)} jobs</p>
            </div>

            <div className="finance stat flex space-between">
                Earned in January
                <p>US${utilService.getRandomIntInclusive(500, 3000)}</p>
            </div>
        </section>
        }
    </section>
} 