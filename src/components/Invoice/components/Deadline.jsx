"use client"
import React, { useState, useEffect } from 'react';

const DeadlineCounter = () => {
  const [deadline, setDeadline] = useState(null);

  useEffect(() => {
    // Menghitung deadline satu hari ke depan
    const currentDate = new Date();
    const nextDay = currentDate.getDate() + 1;
    const nextDate = new Date(currentDate.setDate(nextDay));

    // Format tanggal dan waktu sesuai kebutuhan
    const formattedDeadline = nextDate.toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Asia/Jakarta', // Sesuaikan dengan zona waktu lokal Anda
        });

        setDeadline(formattedDeadline);
    }, []); // Komponen ini hanya dipasang satu kali saat dimuat

    return (
        <div className='flex flex-col justify-center'>
        <h2 className='text-center text-[20px] font-light'>Batas Akhir Pembayaran</h2>
        {deadline ? (
            <p className='text-[30px] font-medium'> {deadline} </p>
        ) : (
            <p>Menghitung deadline...</p>
        )}
        </div>
    );
    };

export default DeadlineCounter;
