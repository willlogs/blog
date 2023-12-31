"use client"

import React, {useRef, useEffect} from 'react';

export const LoginBox:React.FC<{closeWindow: React.MouseEventHandler<HTMLDivElement>}> = ({closeWindow}) => {
    const loginBoxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log(event.target);
            if (loginBoxRef.current && !loginBoxRef.current.contains(event.target as Node)) {
                closeWindow(event as any);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeWindow]);

    return (
        <div className="mx-auto w-full h-full fixed left-0 top-0 p-8 flex items-center justify-center">
            <div className="max-w-md w-full mx-auto" ref={loginBoxRef}>
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl p-2 flex flex-col items-center justify-center">
                    <button className='bg-primary p-2 m-2 w-[80%] rounded-full'>Test</button>
                    <button className='bg-primary p-2 m-2 w-[80%] rounded-full'>Test</button>
                    <button className='bg-primary p-2 m-2 w-[80%] rounded-full'>Test</button>
                </div>
            </div>
        </div>
    );
};