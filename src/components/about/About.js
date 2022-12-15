import React from 'react';
import {info} from "../../info/Info";
import PagesBlock from "../pages/PagesBlock";
import uuid from 'react-uuid';
import {Box, Grid} from "@mui/material";


export default function About() {

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
                <Box>
                  <Grid container display={'flex'} justifyContent={'center'} padding={{xs:'1.5rem', md:'4rem'}}>
                      
                      <Grid item xs={12} md={6} key={uuid()}>
                          <PagesBlock link={info.CV_Link} name={info.CV_Name} desc={""} tags={""} cHeightSmall={'100%'} cHeightMed={'100vh'} cWidthSmall={'40vh'} cWidthMed={'90vh'} />
                      </Grid>
                                        
                  </Grid>
                </Box>  
        </Box>
    )
}