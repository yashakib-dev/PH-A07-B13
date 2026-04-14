"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyLinks = ({href, children}) => {
    const pathname = usePathname();
    // console.log(pathname);
    
    return (
        <Link href={href}
        className={`${pathname === href ? "bg-[#244D3F] rounded-md text-white font-semibold" : " "}text-black`}
        >{children}</Link>
    );
};

export default MyLinks;