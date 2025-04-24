import '../globals.css'
import InputBox from './searchBar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function Navbar(){
    const pathname = usePathname()
    return(
        <div className="nav">
            <div className="logo">
                <Link href="/"><img src="/images/newLogo.png" alt=""/>CINESCOPE</Link>
            </div>
            <div className="menuPoints">
                <ul className='nav-links'>
                    <li><Link style={pathname === "/bollywood" ? {color:'red',transition:'all 0.2s ease-in-out'} : {}} href="/bollywood">Bollywood</Link></li>
                    <li><Link style={pathname === "/tvshows" ? {color:'red',transition:'all 0.2s ease-in-out'} : {}} href="/tvshows">Tv shows</Link></li>
                    <li><Link style={pathname === "/watchlist" ? {color:'red',transition:'all 0.2s ease-in-out'} : {}} href="/watchlist">My Watchlist</Link></li>
                </ul>
            </div>
            <div className="inputBox">
                <InputBox/>
            </div>
        </div>
    )
}
export default Navbar;