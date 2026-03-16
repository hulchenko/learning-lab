"use client";

import { useEffect } from 'react';

export default function MainAppWrapper({children}){
    useEffect(() => console.log('Global app mounted'), []);
    return children;
}