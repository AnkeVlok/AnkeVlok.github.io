import React from 'react';
import {Box, Grid, Typography, Paper} from "@mui/material";
import SocialIcon from '../home/SocialIcon';

function PagesBlock(props) {
   const {link, name, desc, github, cHeightSmall, cHeightMed, cWidthSmall, cWidthMed} = props;

   return (

      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>   
         {/* This is the PDF rendering Box */}
         <Box justifyContent={'center'} alignItems={'center'} display={'flex'} gap={'1.5rem'} fontSize={{xs: '2rem', md: '2.5rem'}}>  
            <Typography sx={{ typography: { sm: 'h5', xs: 'h6' } }}> {name} </Typography> 

            {github ?
               <SocialIcon key={name} link={github} icon={"fa fa-github"} label={""} />
               :
               <SocialIcon key={name} icon={""} label={""} />
            }
         </Box>
         <Box component={'iframe'} src={link} alt={'mockup'} className={'page'} height={{xs:cHeightSmall ? cHeightMed : '30vh', md: cHeightMed ? cHeightMed: '50vh'}} width={{xs: cWidthSmall? cWidthSmall: '100%', md: cWidthMed ? cWidthMed: '90%'}}/>
         <Grid container margin={{xs:"0 0 5vh 0"}} height={{xs: 'auto', md: '5vh'}} width={{xs: '100%', md: '90%'}}>
            {/* This should be the description box */}
            <Grid item xs={12}  s={12} md={12} marginTop={'1vh'}>
                 <Paper variant='outline' elevation={10}>  
                     <Typography variant='p' style={{fontSize:'.7rem'}}> {desc} </Typography> 
                 </Paper>            
            </Grid>
         </Grid>            
      </Box>
   );
}

export default PagesBlock;