"use client";
import { Fragment, useEffect, useState } from "react";
import BodyWrapper from "@/app/components/Elements/BodyWrapper";
import Nevry from "@/app/components/Nevry/Nevry";
import Iframe from "@/app/components/Nevry/Iframe";
import ColorRect from "@/app/components/UI/ColorRect";
import Blackout from "@/app/components/UI/Blackout";



const Index = () => {


  
  return (
    <BodyWrapper overflow={true}>
      <Nevry w={"95%"} h={"90vh"}>
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
             World of Vampirim
            </ColorRect>
        </div>
      <Iframe w={'47%'} h={'70%'} src={'http://localhost:3000/www/index.html'}/>

      </Nevry>
      <Blackout/>
    </BodyWrapper>
  );
};

export default Index;
