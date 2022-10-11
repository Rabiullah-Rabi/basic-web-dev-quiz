import { tablePaginationClasses } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Statistics = () => {
    const loadedData = useLoaderData();
    const topics = loadedData.data;
    const data = topics.map(topic => (
        {
            name: topic.name,
            total_question: topic.total
        }
    ));
    return (
        <div className='container mx-auto'>
            <LineChart className='mx-auto mt-28'
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="total_question"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </div>
    );
};

export default Statistics;