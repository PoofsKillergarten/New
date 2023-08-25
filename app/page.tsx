'use client';
import classes from './page.module.css';
import { Fragment, useEffect, useState } from 'react';
import Button from './components/UI/Button';
import ButtonsList from './components/UI/ButtonsList';
import Blackout from './components/UI/Blackout';
import Nevry from './components/Nevry/Nevry';
import Vid from './components/Elements/Vid';
import Hnc from './components/UI/Hnc';
import Card from './components/Nevry/Card';
import GameCard from './components/Nevry/GameCard';
import GameCardList from './components/Nevry/GameCardList';
import Image from './components/UI/Image';
import ImageStack from './components/UI/ImageStack';
import BodyWrapper from './components/Elements/BodyWrapper';
import { wrapper } from "./store";
import {Provider} from 'react-redux';
import Modal from './components/Nevry/Modal';


const Index = () => {

  const [modal,setModal] = useState<any>();
  const buttonList: JSX.Element[] = [];
  for(let i: number = 1; i <= 10; i++){
     buttonList.push(<div><Button title={i}/></div>);
   }
   const buttonList2: JSX.Element[] = [];
   for(let i: number = 1; i <= 5; i++){
      buttonList2.push(<div><Button title={i}/></div>);
    }
    const games = [
      {
        id: 1,
        title: `Poof's Killergarten`,
        picture: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dflruqb-584868cf-2326-4c77-bd0e-de6af9c0f39f.png/v1/fill/w_894,h_894/poof_s_killergarten_by_sronico_dflruqb-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGZscnVxYi01ODQ4NjhjZi0yMzI2LTRjNzctYmQwZS1kZTZhZjljMGYzOWYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xDWDWmsEPrBE2u9IpBueH-l-OnVy1SXUhnV99LMxkOc`,
        desc: 'RPG',
        platform: 'Windows',
        isNew: false
      },
      {
        id: 2,
        title: `Poof's Killergarten Divided Fate`,
        picture: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dfr5tnj-0d3dbabb-8f94-4367-a3c4-64e5c575b11e.png/v1/fit/w_828,h_1224/poof_s_killergarten_sonia_by_sronico_dfr5tnj-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM3NiIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGZyNXRuai0wZDNkYmFiYi04Zjk0LTQzNjctYTNjNC02NGU1YzU3NWIxMWUucG5nIiwid2lkdGgiOiI8PTkzMSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4Q_Wj1858MqU54Ym1F6DssliGATq6GwQOOT6rMd3P0g`,
        desc: 'RPG',
        platform: 'Windows',
        isNew: false
      },
      {
        id: 3,
        title: `Poof's Killergarten Next Time`,
        picture: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg2fqz7-4b44fe5b-7da4-49b0-aa3a-ba5cb7392539.png/v1/fill/w_858,h_932/poof_s_killergarten_grubiula_by_sronico_dg2fqz7-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM5MCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGcyZnF6Ny00YjQ0ZmU1Yi03ZGE0LTQ5YjAtYWEzYS1iYTVjYjczOTI1MzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.z6IAb7OP7WRp8sUuie_Oocv9ZHk3XqocjqAEIwsoJoY`,
        desc: 'RPG',
        platform: 'Windows',
        isNew: true
      },
      {
        id: 4,
        title: `World of Vampirim`,
        picture: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c08c2a5-dcbd-4fda-aa48-e0ee400a6c1f/dfarqkz-d418b0d2-0d0f-4bcf-aea8-a9ac021e4486.png/v1/fill/w_264,h_286/world_of_vampirim_bestiary_entry__005___wild_bear_by_worldofvampirim_dfarqkz-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjg2IiwicGF0aCI6IlwvZlwvOWMwOGMyYTUtZGNiZC00ZmRhLWFhNDgtZTBlZTQwMGE2YzFmXC9kZmFycWt6LWQ0MThiMGQyLTBkMGYtNGJjZi1hZWE4LWE5YWMwMjFlNDQ4Ni5wbmciLCJ3aWR0aCI6Ijw9MjY0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.z7ZVW1_AZzKuUkr7C2K4xUUPmh6_7AWOVnoGzr7_R9c`,
        desc: 'RPG',
        platform: 'Website',
        isNew: true
      }
    ];
    const images = [
      {
        id: 1,
        h: '400px',
        w:  '25%',
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dfn4nmk-2fff9f47-2161-4898-9bd0-4f67088d09fb.png/v1/fill/w_948,h_843/poof_s_killergarten_cubus_art_by_sronico_dfn4nmk-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzOCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGZuNG5tay0yZmZmOWY0Ny0yMTYxLTQ4OTgtOWJkMC00ZjY3MDg4ZDA5ZmIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._zCbDBAJ3fzQL291FtcC_0j9PgFoaugciLMGp1bH57c'
      },
      {
        id: 2,
        h: '400px',
        w:  '25%',
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg5yn56-646bbebb-cb04-45c4-b754-4459e5dc04b6.png/v1/fill/w_948,h_843/poof_s_killergarten_capcake_art_by_sronico_dg5yn56-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQzIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzV5bjU2LTY0NmJiZWJiLWNiMDQtNDVjNC1iNzU0LTQ0NTllNWRjMDRiNi5wbmciLCJ3aWR0aCI6Ijw9OTQ4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.72rGg_8vXzulP2Nhge5IobWdsj9tGq1g_ej-nX4RaiE'
      },
      {
      id: 3,
      h: '400px',
      w:  '25%',
      url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dflrsto-97dd78b4-4a7c-4921-bcd9-2b5f0b6c7393.png/v1/fill/w_894,h_894/poof_s_killergarten_by_sronico_dflrsto-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGZscnN0by05N2RkNzhiNC00YTdjLTQ5MjEtYmNkOS0yYjVmMGI2YzczOTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rrtV5fxodbI71xAIIvg7ALXd-LCtD0eQTiMj26Rf9oQ'
      },
      {
        id:4,
        h: '400px',
        w:  '25%',
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dflrcvo-9b40d414-b1e4-4eef-bd28-5af1d189f582.png/v1/fill/w_894,h_894/poof_s_killergarten_sonia_by_sronico_dflrcvo-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGZscmN2by05YjQwZDQxNC1iMWU0LTRlZWYtYmQyOC01YWYxZDE4OWY1ODIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.49uipNa0kc0cVmFtIj0_wNW27DA__zTZ-hlEur_TONQ'
      }
    ]
    const sub = [
      { clas: 'hnc2',
        text:'Brand new indie game website'},
      {clas: 'hnc3',
      text: 'Play secret games and explore'}
    ];
    const getChildren = (e: any) => {
      //  setModal(e.target);

      let child;
    
          if(e.element === 'video'){
         
            if (typeof window !== 'undefined') {
              // Perform localStorage action
             localStorage.setItem('stop','true');
            }
          
              if(e.isRemoved === true){
           
              }
              if(e.url === 'videos/wov_cinematic.webm'){
                child = <Vid muted={false} controls={true} url={'/videos/wov_cinematic_1.mp4'} t={2}/>
              }else{
                child = <Vid muted={false} controls={true} url={e.url} t={2}/>
              }
             
          }

  
      if(child != undefined){
          setModal(child);
      }
   
      console.log(e);
    }
    const closeModal = (e: any) => {
      // console.log(1);
      setModal(null);
    }
  return (
    <Fragment>
      <BodyWrapper overflow={modal && true}>
      {modal && <Modal transparent={true} click={closeModal} visible={modal && true}>{modal}</Modal>}
      <Nevry w={'95%'} h={'25rem'}>
    <Hnc subs={sub}>Welcome to NevryCards <s>Website</s> World</Hnc>

    </Nevry>
       <Nevry bck={1} w={'95%'} h={'30%'}>
        {/* <ButtonsList buttons={buttonList2}/> */}
        <ImageStack  images={images}/>

        {!modal && <Vid click={getChildren} url={'videos/lv_0_20230726201021.mp4'}/>}
        <Image posx={1400} image={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dfmbkd8-3d77b57d-a4b5-4da0-b0a8-ef05b260309f.png/v1/fill/w_948,h_843/poof_s_killergarten_fboy_art_by_sronico_dfmbkd8-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzOCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGZtYmtkOC0zZDc3YjU3ZC1hNGI1LTRkYTAtYjBhOC1lZjA1YjI2MDMwOWYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dymNXJxrkAsAFeWrXY-18F-jwu3VVUu1kOzhMK_zTnk'} w={'400px'} h={'25%'}/>
        </Nevry>
        {!modal ?
        <Fragment>
    <Nevry w={'95%'} h={'30%'}>
      {/* <ButtonsList buttons={buttonList2}/>
    <Card><ButtonsList buttons={buttonList2}/></Card> */}
     <Hnc subs={
      [{clas: 'hnc2',
        text: `Uncover What's hidden within`}]
     }>Play all available Games</Hnc>
    </Nevry>
 
    <Nevry bck={2} w={'95%'} h={'30rem'}>
    {/* <ButtonsList buttons={buttonList2}/> */}
   <Vid click={getChildren} url={'videos/wov_cinematic.webm'} w={'26%'} t={1}/>
          <GameCardList games={games}/>
        </Nevry></Fragment> :  <Nevry w={'95%'} h={'5rem'}></Nevry>}

  <Blackout/>
  </BodyWrapper>
    </Fragment>
  );
}

  export default Index;