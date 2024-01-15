"use client"
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60); // 24 jam dalam detik

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);

        return () => {
        clearInterval(intervalId);
        };
    }, []);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div>
        <p className='text-red-500 text-[30px] font-bold'>{formatTime(timeRemaining)}</p>
        </div>
    );
};

export default CountdownTimer;
