"use client"
import CheckInProvider from '@/context/CheckInProvider';

const Providers = ({children}) => {
    return (
        <CheckInProvider>
                {children}
        </CheckInProvider>
    );
};

export default Providers;