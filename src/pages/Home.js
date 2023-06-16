
import image from "../assets/profile-img.jpg";
import "../styles/Home.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SkillsGrid from "../components/SkillsGrid";

const Home = () => {
    return (
    <div className="home">
        <div className="about">
            <div className="heading-container">
                <h2>Hi, My Name is Emma</h2>
            </div>
            <div className="prompt">
                <p>A software developer with a passion for learning frontend technologies, and looking for a frontend developer role using React.js!</p>
                <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/emma-may-p-5638a710a/')} />
                <GitHubIcon onClick={() => window.open('https://github.com/emmamayp')} />                
                <div className="image-container">
                    <img src={image} className="image"/>
                </div>
            </div>
        </div>            
        <div className="skills">
            <h2>Skills & Frameworks</h2>                     
        </div>
        <SkillsGrid />        
    </div>
    )
}
export default Home;