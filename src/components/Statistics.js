import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
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
        <div className='mx-auto'>
            <ResponsiveContainer className={'mx-auto container'}
                min-width={300}
                height={250}>
                <LineChart className='mx-auto mt-28'
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
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;