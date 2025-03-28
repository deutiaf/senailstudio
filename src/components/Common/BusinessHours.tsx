"use client"

import React, { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';

type BusinessHour = {
    day: string;
    hours: string;
};

type BusinessHoursProps = {
    bgColor?: string;
    currentDayTextColor?: string;
    regularTextColor?: string;
    headerBgColor?: string;
    openBadgeBgColor?: string;
    openBadgeTextColor?: string;
    closedDayTextColor?: string;
    closedBadgeBgColor?: string;
    closedBadgeTextColor?: string;
};

const BusinessHours: React.FC<BusinessHoursProps> = ({
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
    const t = useTranslations('BusinessHours');

    const [currentDay, setCurrentDay] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Mémorisation du tableau des horaires d'ouverture
    const hours: BusinessHour[] = useMemo(() => [
        { day: 'Monday', hours: '10 am–7 pm' },
        { day: 'Tuesday', hours: 'Closed' },
        { day: 'Wednesday', hours: '10 am–7 pm' },
        { day: 'Thursday', hours: '10 am–4 pm' },
        { day: 'Friday', hours: '10 am–6 pm' },
        { day: 'Saturday', hours: '9 am–3 pm' },
        { day: 'Sunday', hours: 'Closed' }
    ], []); // Le tableau est mémorisé et ne sera recalculé que si ses dépendances changent

    // Fonction pour convertir l'heure en minutes
    const timeToMinutes = (timeStr: string): number => {
        const [hourStr, minuteStr] = timeStr.split(':');
        let hour = parseInt(hourStr);
        const isPM = timeStr.toLowerCase().includes('pm') && hour < 12;
        const isAM = timeStr.toLowerCase().includes('am') && hour === 12;

        if (isPM) hour += 12;
        if (isAM) hour = 0;

        const minute = minuteStr ? parseInt(minuteStr) : 0;
        return hour * 60 + minute;
    };

    // Fonction pour extraire l'heure au format HH:MM
    const extractTime = (timeStr: string): string => {
        const trimmed = timeStr.trim().toLowerCase();
        const hour = parseInt(trimmed);
        const isPM = trimmed.includes('pm');

        return `${isPM && hour !== 12 ? hour + 12 : (hour === 12 && !isPM ? 0 : hour)}:00`;
    };


    useEffect(() => {


        // Fonction pour vérifier si l'établissement est ouvert
        const checkIfOpen = (day: string, time: string): boolean => {
            const dayInfo = hours.find(h => h.day === day);
            if (!dayInfo || dayInfo.hours === 'Closed') return false;

            const [openTime, closeTime] = dayInfo.hours.split('–');

            const openMinutes = timeToMinutes(extractTime(openTime));
            const closeMinutes = timeToMinutes(extractTime(closeTime));

            const [currentHour, currentMinute] = time.split(':').map(Number);
            const currentMinutes = currentHour * 60 + currentMinute;

            return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
        };

        // Fonction pour mettre à jour le jour actuel et l'état d'ouverture
        const updateDateTime = () => {
            const now = new Date();
            const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = days[now.getDay()];

            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}`;

            setCurrentDay(day);
            setIsOpen(checkIfOpen(day, timeString));
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 60000); // Mise à jour chaque minute

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                updateDateTime();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            clearInterval(interval);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [hours]); // Ajout de 'hours' dans le tableau des dépendances

    return (
        <div className={`w-full mx-auto ${bgColor} overflow-hidden text-sm font-josefin-sans`}>
            <div className={`${headerBgColor}`}>
                <h2 className={`text-lg font-semibold text-gray-800 ${regularTextColor}`}>
                    {t('businessHoursTitle')}
                </h2>
            </div>
            <div className={`${headerBgColor}`}>
                {hours.map((item: BusinessHour) => {
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
                                {t(item.day)}
                            </div>
                            <div className={`${textColor}`}>
                                {item.hours === 'Closed' ? t('closed') : item.hours}
                            </div>
                            <div className="text-center">
                                {isCurrentDay && (
                                    <span className={`px-2 py-1 text-xs rounded-full ${dayIsOpen ? openBadgeBgColor : closedBadgeBgColor} ${dayIsOpen ? openBadgeTextColor : closedBadgeTextColor}`}>
                                        {dayIsOpen ? t('open') : t('closed')}
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
