'use client';
import classes from './stories.module.scss';
import BodyWrapper from "../components/Elements/BodyWrapper";
import Nevry from "../components/Nevry/Nevry";
import ImageGallery from '../components/Elements/ImageGallery';
import Modal from '../components/Nevry/Modal';
import { useState } from 'react';
import ColorRect from '../components/UI/ColorRect';
import Iframe from '../components/Nevry/Iframe';
import Blackout from '../components/UI/Blackout';


const Index = (ref: any) => {
   
    return (
        <BodyWrapper overflow={true}>
            
          <Nevry bck={2} w={"95%"} h={"90vh"}>
          <div style={{
          position: 'absolute',
          top: '13%',
          zIndex: 999
        }}>
        <ColorRect
              w={'35'}
              h={"4"}
              r={"250"}
              g={"150"}
              b={"0"}
              font={"2.5rem"}
            
            >
             Answer Questionnaire
            </ColorRect>
        </div>
          <Iframe w={'47%'} h={'70%'} src={'https://forms.office.com/pages/responsepage.aspx?id=SmTtt7PRRkmF-TCjOAwmGG5rRdSvjPBCl6Rq6AFuoFtUQkNaUVJKNVhaSlFIVVpDVk5ZOUFVVE9aWC4u'}/>
          <div style={{
          position: 'absolute',
          bottom: '0%',
          zIndex: 999
        }}>
        <ColorRect
              w={'35'}
              h={"4"}
              r={"250"}
              g={"150"}
              b={"0"}
              font={"2.5rem"}
            
            >
             Elevate this world
            </ColorRect>
        </div>
      </Nevry>
      <Blackout/>
        </BodyWrapper>
    );
    }
    
    export default Index;