//TODO dynamic month
//TODO dynamic Member since

import * as React from 'react';
import Box from '@mui/material/Box';

import { utilService } from '../../services/util.service.js';
import { useState, useEffect } from 'react';

import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


export function MiniProfile({ user, userType }) {


const sellerLevels =["Top Rated Seller"]

    function LinearProgressWithLabel(props) {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" {...props}  />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                props.value,
              )}%`}</Typography>
            </Box>
          </Box>
        );
      }

      LinearProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate and buffer variants.
         * Value between 0 and 100.
         */
        value: PropTypes.number.isRequired,
      };
      

      function LinearWithValueLabel({progressValue}) {
        const [progress, setProgress] = React.useState(10);
      
        React.useEffect(() => {
            setProgress(progressValue)
        }, [progressValue]);
      
        return (
          <Box sx={{ width: '100%'}}>
            <LinearProgressWithLabel value={progress}  />
          </Box>
        );
      }


    return <section className="mini-profile">
        <div className={userType==='seller'? "profile-username flex space-around" : "profile-username flex column align-center"}>
            <img src={user.imgUrl} />
            <div className='flex column'>
                <h4>{user.fullname}</h4>
                {userType==='seller'}
                <h6>Member since <br/>{utilService.getRandomIntInclusive(1,12)}/{utilService.getRandomIntInclusive(2008,2019)}</h6></div>
        </div>
        {userType==='seller' && <section> <div className="performance-stats flex column">
            <div className="stat flex space-between">
                Inbox response rate
                <LinearWithValueLabel progressValue={utilService.getRandomIntInclusive(60,100)} />
            </div>
            <div className="stat flex space-between">
                Inbox response time
                <LinearWithValueLabel progressValue={utilService.getRandomIntInclusive(60,100)}/>
            </div>
            <div className="stat flex space-between">
                Order response rate
                <LinearWithValueLabel progressValue={utilService.getRandomIntInclusive(60,100)}/>
            </div>
            <div className="stat flex space-between">
                Delivered on time
                <LinearWithValueLabel progressValue={utilService.getRandomIntInclusive(60,100)}/>
            </div>
            <div className="stat flex space-between">
                Order completion
                <LinearWithValueLabel progressValue={utilService.getRandomIntInclusive(60,100)}/>
            </div>
        </div>
            <div className="finance stat flex space-between">
                <p>Jobs Pending:</p>
                <p>{utilService.getRandomIntInclusive(5, 20)} jobs</p>
            </div>
            <div className="finance stat flex space-between">
                <p>Jobs in process:</p>
                <p>{utilService.getRandomIntInclusive(5, 20)} jobs</p>
            </div>
            <div className="finance stat flex space-between">
                <p>Jobs completed:</p>
                <p>{utilService.getRandomIntInclusive(5, 20)} jobs</p>
            </div>

            <div className="finance stat flex space-between">
                Total Earnings:
                <p>US${utilService.getRandomIntInclusive(500, 3000)}</p>
            </div>
        </section>
        }
    </section>
} 