"use client"

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const BusinessHours = ({
    bgColor = "bg-white",
    currentDayTextColor = "text-green-400",
    regularTextColor = "text-gray-700",
    headerBgColor = "bg-gray-100",
    openBadgeBgColor = "bg-green-100",
    openBadgeTextColor = "text-green-800",
    closedDayTextColor = "text-red-500",
    closedBadgeBgColor = "bg-red-100",
    closedBadgeTextColor = "text-red-800"
}) => {
    const t = useTranslations('BusinessHours');  // Utilisation de useTranslations pour charger les traductions

    const [currentDay, setCurrentDay] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    // Définir les heures d'ouverture en ordre chronologique
    const hours = [
        { day: 'Monday', hours: '10 am–7 pm' },
        { day: 'Tuesday', hours: 'Closed' },
        { day: 'Wednesday', hours: '10 am–7 pm' },
        { day: 'Thursday', hours: '10 am–4 pm' },
        { day: 'Friday', hours: '10 am–6 pm' },
        { day: 'Saturday', hours: '9 am–3 pm' },
        { day: 'Sunday', hours: 'Closed' }
    ];

    // Fonction pour vérifier si le magasin est ouvert
    const checkIfOpen = (day, time) => {
        const dayInfo = hours.find(h => h.day === day);
        if (!dayInfo || dayInfo.hours === 'Closed') return false;

        const [openTime, closeTime] = dayInfo.hours.split('–');

        // Convertir en minutes depuis minuit pour comparaison facile
        const timeToMinutes = (timeStr) => {
            const [hourStr, minuteStr] = timeStr.split(':');
            let hour = parseInt(hourStr);
            const isPM = timeStr.toLowerCase().includes('pm') && hour < 12;
            const isAM = timeStr.toLowerCase().includes('am') && hour === 12;

            if (isPM) hour += 12;
            if (isAM) hour = 0;

            const minute = minuteStr ? parseInt(minuteStr) : 0;
            return hour * 60 + minute;
        };

        // Extraction d'heures et conversion
        const extractTime = (timeStr) => {
            const trimmed = timeStr.trim().toLowerCase();
            const hour = parseInt(trimmed);
            const isPM = trimmed.includes('pm');

            return `${isPM && hour !== 12 ? hour + 12 : (hour === 12 && !isPM ? 0 : hour)}:00`;
        };

        const openMinutes = timeToMinutes(extractTime(openTime));
        const closeMinutes = timeToMinutes(extractTime(closeTime));

        // Convertir le temps actuel en minutes
        const [currentHour, currentMinute] = time.split(':').map(Number);
        const currentMinutes = currentHour * 60 + currentMinute;

        return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
    };

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = days[now.getDay()];

            // Format time as HH:MM
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}`;

            setCurrentDay(day);
            setCurrentTime(timeString);
            setIsOpen(checkIfOpen(day, timeString));
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`w-full mx-auto ${bgColor} overflow-hidden text-sm font-josefin-sans`}>
            <div className={`${headerBgColor}`}>
                <h2 className={`text-lg font-semibold text-gray-800 ${regularTextColor}`}>
                    {t('businessHoursTitle')}  {/* Remplacer par la clé de traduction */}
                </h2>
            </div>
            <div className={`${headerBgColor}`}>
                {hours.map((item) => {
                    const isCurrentDay = item.day === currentDay;
                    const dayIsOpen = isCurrentDay && isOpen;

                    // Seulement le jour actuel change de couleur selon l'état ouvert/fermé
                    let textColor = regularTextColor;
                    if (isCurrentDay) {
                        textColor = dayIsOpen ? currentDayTextColor : closedDayTextColor;
                    }

                    return (
                        <div
                            key={item.day}
                            className="grid grid-cols-3 py-1"
                        >
                            <div className={`font-medium ${textColor}`}>
                                {t(item.day)}  {/* Utilisation de la clé pour chaque jour */}
                            </div>
                            <div className={`${textColor}`}>
                                {item.hours === 'Closed' ? t('closed') : item.hours}  {/* Traduction de "Closed" */}
                            </div>
                            <div className="text-center">
                                {isCurrentDay && (
                                    <span className={`px-2 py-1 text-xs rounded-full ${dayIsOpen ? openBadgeBgColor : closedBadgeBgColor} ${dayIsOpen ? openBadgeTextColor : closedBadgeTextColor}`}>
                                        {dayIsOpen ? t('open') : t('closed')}  {/* Traduction de l'état */}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BusinessHours;
