//TODO dynamic month
//TODO dynamic Member since

import * as React from 'react';

import { utilService } from '../../services/util.service.js';
import { useState, useEffect } from 'react';

import {LinearWithValueLabel} from './LinearProgressWithLabel'
 


export function MiniProfile({ user, userType }) {

// const [financeStats, setFinanceStats] = useState({})

    const sellerLevels = ["Top Rated Seller"]

    useEffect(() => { //FOR DEV ONLY
        console.log('user: ', user)
        // setFinanceStats(statsCalculate(user.orders))
    }, [])

    function statsCalculate(orders) {
        // console.log("receive to calculate: ", orders)
        const stats = {}
        // stats.pending = orders.reduce((acc, order)=> {if(order.status == 'pending') return acc= acc+1},0)
        let calculatedPending = orders.filter((order) => order.status=='pending')
        stats.pending = calculatedPending.length
        let calculatedInProcess = orders.filter((order) => order.status=='in-process')
        stats.inProcess = calculatedInProcess.length
        let calculatedCompleted = orders.filter((order) => order.status=='completed')
        stats.completed = calculatedCompleted.length
        stats.totalEarnings = calculatedCompleted.reduce((acc,order) => acc +=order.gig.price ,0)
        let calculatedRejected = orders.filter((order) => order.status=='rejected')
        stats.rejected = calculatedRejected.length

        stats.totalJobs = orders.length
        // console.log("calculated stats: ", stats)


        return stats
    }

    const stats = statsCalculate(user.orders)


    return <section className="mini-profile">
        {/* <div className={userType === 'seller' ? "profile-username flex space-around" : "profile-username flex column align-center"}> */}
        <div className="profile-username flex column align-center">
            <img src={user.imgUrl} />
            <div className='flex column'>
                <h4>{user.fullname.charAt(0).toUpperCase() + user.fullname.slice(1)}</h4>
                {userType === 'seller' && <h5>Top Rated Seller</h5>}
            </div>
        </div>
        {userType === 'seller' && <section> <div className="performance-stats flex column">
            <div className="stat flex space-between">
                Pending
                <LinearWithValueLabel statNum={stats.pending} progressValue={utilService.getPercentage(stats.pending,stats.totalJobs)} />
            </div>
            <div className="stat flex space-between">
                In Process
                <LinearWithValueLabel statNum={stats.inProcess} progressValue={utilService.getPercentage(stats.inProcess,stats.totalJobs)} />
            </div>
            <div className="stat flex space-between">
                Completed
                <LinearWithValueLabel statNum={stats.completed} progressValue={utilService.getPercentage(stats.completed,stats.totalJobs)} />
            </div>
            <div className="stat flex space-between">
                Rejected
                <LinearWithValueLabel statNum={stats.rejected} progressValue={utilService.getPercentage(stats.rejected,stats.totalJobs)} />
            </div>
        </div>
            <div className="finance stat flex space-between">
                <p>Jobs Total</p>
                <p>{stats.totalJobs} jobs</p>
            </div>
            <div className="total-earnings finance stat flex space-between">
                Total Earnings
                <p>US${stats.totalEarnings}</p>
            </div>
        </section>
        }
    </section>
} 