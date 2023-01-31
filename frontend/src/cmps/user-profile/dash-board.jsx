import { useNavigate, useOutletContext } from "react-router-dom"
import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export function DashBoard() {
    const [setStatusModal, statusModal, viewType, user] = useOutletContext()
    const navigate = useNavigate()
    useEffect(() => {
        if(viewType !== 'seller')
        navigate(`/user/${user._id}/order`) 
    }, [])
    const chartsDataOrderStatus = user.orders.reduce(
        (acc, order) => {
            const status = order.status
            acc[status] = acc[status] ? ++acc[status] : 1
            return acc
        }, {})

    const chartsDataPackages = user.orders.reduce(
        (acc, order) => {
            const status = order.gig.package
            acc[status] = acc[status] ? ++acc[status] : 1
            return acc
        }, {})

    const chartsDataBackBuyers = { 'returningCustomer': 0, 'newCustomer': 0 }
    const chartsDataBackBuyersMap = user.orders.reduce(
        (acc, order) => {
            const buyerId = order.buyer._id
            acc[buyerId] = acc[buyerId] ? ++acc[buyerId] : 1
            return acc
        }, {})

    for (const customer in chartsDataBackBuyersMap) {
        if (chartsDataBackBuyersMap[customer] > 1) chartsDataBackBuyers.returningCustomer++
        else {
            chartsDataBackBuyers.newCustomer++
        }
    }

    ChartJS.register(ArcElement, Tooltip)

    const OrderStatus = {
        labels: Object.keys(chartsDataOrderStatus),
        datasets: [
            {
                label: 'Gigs',
                data: Object.values(chartsDataOrderStatus),
                backgroundColor: [
                    'rgba(98, 100, 106, 0.2)', 
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(98, 100, 106, 1)', 
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)', 
                ],
                borderWidth: 1,
            },
        ],
    }

    const Packages = {
        labels: Object.keys(chartsDataPackages),
        datasets: [
            {
                label: 'Orders',
                data: Object.values(chartsDataPackages),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(98, 100, 106, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(98, 100, 106, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const BackBuyers = {
        labels: Object.keys(chartsDataBackBuyers),
        datasets: [
            {
                label: 'Orders',
                data: Object.values(chartsDataBackBuyers),
                backgroundColor: [
                    'rgba(98, 100, 106, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(98, 100, 106, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
            },
        ],
    }

    return <section className="dash-board">
        <h2>Dashboard</h2>

        <div className="doughnut-container">
            <div>
                <p>Orders</p>
                <Doughnut data={OrderStatus} />
            </div>
            <div>
                <p>Packages</p>
                <Doughnut data={Packages} />
            </div>
            <div>
                <p>Customers</p>
                <Doughnut data={BackBuyers} />
            </div>
        </div>
    </section>
}

