import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SkillsList } from "../helpers/SkillsList";
import "../styles/SkillsGrid.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SkillsGrid = () => {
  return (
    <Box m={7} pt={0} sx={{ flexGrow: 1 }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} >
      {SkillsList.map((skill) => {
            return (
                <Grid item xs={12} sm={6} md={3} className="grid-item">
                    <Item sx={{ backgroundColor: "transparent", boxShadow: 0}}>
                      <div className="hoverE">                        
                        <img src={skill.logo} alt="skills" className='logo' />                                                  
                        <br />
                        <p className="skills-txt">{skill.label}</p>
                      </div>
                    </Item>
                </Grid>
            )
        })}                
      </Grid>
    </Box>
  );
}
 export default SkillsGrid;