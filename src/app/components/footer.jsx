import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
function Footer() {
    return (
        <div className="footer">
            <h3>Powered by <a target="_blank" href="https://www.themoviedb.org">TMDB</a> API</h3>
            <h3 className='developer'>Developed by Mukul
                <a target="_blank" href="https://github.com/Mk-debugger11">
                    <img src={github} alt="" className='develop'/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/mukul-kumar-a09527314/">
                    <img src={linkedin} alt="" className='develop'/>
                </a>
            </h3>
        </div>
    )
}
export default Footer;