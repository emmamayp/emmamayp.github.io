import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";
const Footer = () => {
    return (<
    div className="footer">
        <div className='socialMedia'>
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/emma-may-p-5638a710a/')} />
            <GitHubIcon onClick={() => window.open('https://github.com/emmamayp')} />
        </div>
        <p> &copy; 2023 emmamayportfolio.co.uk</p>
    </div>)
}
export default Footer;