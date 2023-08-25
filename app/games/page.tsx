"use client";
import { Fragment, useEffect, useState } from "react";
import BodyWrapper from "../components/Elements/BodyWrapper";
import Nevry from "../components/Nevry/Nevry";
import Button from "../components/UI/Button";
import GameIconsList from "../components/UI/GameIconList";
import classes from "./games.module.scss";
import GameIcon from "../components/UI/GameIcon";
import ColorRect from "../components/UI/ColorRect";
import Background from "../components/Elements/Background";
import Image from "../components/UI/Image";
import Card from "../components/Nevry/Card";
import DiffBar from "../components/Elements/DiffBar";
import Slider from "../components/Elements/Slider";
import SliderDesc from "../components/Elements/SliderDesc";
import Vid from "../components/Elements/Vid";
import Modal from "../components/Nevry/Modal";
let game = 1;
const Index = () => {
  let first: any = 1;
  if (typeof window !== 'undefined') {
  first = localStorage.getItem('token') ? localStorage.getItem('token') : 1;
  }
  const [modal,setModal] = useState<any>();
  const [starting, setStarting] = useState<any>([]);
  const [changer, setChanger] = useState(parseInt(first));
  const [elm, setElm] = useState<any>({ title: "", images: [] });
  const [video,setVideo] = useState(false);

  const games = [
    {
      id: 1,
      n: "poof_logo2",
      on: true,
      title: `Poof's Killergarten`,
      char: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dflrsto-97dd78b4-4a7c-4921-bcd9-2b5f0b6c7393.png/v1/fill/w_894,h_894/poof_s_killergarten_by_sronico_dflrsto-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGZscnN0by05N2RkNzhiNC00YTdjLTQ5MjEtYmNkOS0yYjVmMGI2YzczOTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rrtV5fxodbI71xAIIvg7ALXd-LCtD0eQTiMj26Rf9oQ",
      bck: "aa_pkgnt_playroom",
      desc: `Killergarten is a place where children
      can have fun?? What fun is being observed 24/h by security
      cameras and restricted by radical rules. Definitely not Poof's.. Just wait
      for him as he'll change this place into something amazing today!!`,
      gen: 'RPG',
      diff: 2,
      images: [
        `KG/Anniversary/poof_pic1.png`,
        `KG/Anniversary/poof_pic2.png`,
        `KG/Anniversary/poof_pic3.png`,
        `KG/Anniversary/poof_pic4.png`,
        `KG/Anniversary/poof_pic5.png`,
        `KG/Anniversary/poof_pic6.png`,
        `KG/Anniversary/poof_pic7.png`
      ],
      text: [
        `
        Killergarten is very well
        accomodated place with a 
        very simple and strightforward
        goal. To make it's children safe.
        
 
       Well, things haven't worked as planned
       and the security systems are overprotective
       and sometimes dangerous.

      So the best way to deal with a
      problematic system is to engage
      it in a combat.
         
    `,
     `
     Killergarten toys live their
     own life, but you can cut it in 
     exchange for some experience.
      
 
      You can encounter toys in almost
      every room and decide rather
      to fight them or leave alone.
       

     Across different places enemies
     will grew in strength so don't forget
     you can do the same and dominate them all.
       
   `,
   `
   Each party member awaits in
   different place inside the
   facility and has their own
   demands toward the main character
   in order to join him.
    

   While first couple of
   encounters are manageable
   for one character to succeed in.
   Battles are going to be harder
   over time, so more party members equal
   more power.
     

   Each one has different
   weapon to equip and skillset
   suitable for different playstyles
   and roles.
      
 `,
    `
    There are 65+ achievable
    skills in the whole game.
    
     

   No matter if active or passive,
   each skill feels unique and you're
   the one to make the good use of 
   them.
    

   Over time party members will
   learn new exciting powers, so the 
   playstyle strategies would change
   as well.
    
     
`,
 `
 Of course in RPG game There are 
 bosses and this one is no exception.  


Prepare your party and deal with them
in massive combats full of epickness
and emotional drama.
Or just watch how massive damage obliterate
them if you grind too much. 


Aside from that there are a few really powerfull
optional bosses who need a lot of good turn flow,
strategy and sometimes many attempts or just overgrinding
to defeat.
`,
` 
Every time you're at the edge of the end
there might be some more hidden parts that
might or might not matter.
The only one to look after those is you.
`,
`
And the ending that one gets is based
on how much you struggle to get it.

 No matter which result you'll stay on, just
 be proud of it and... nevermind...

 You won't be able to achieve the proper solution,
 i swear...
`
      ],
      vid: 'lv_0_20230726201021',
      com: 'DOWNLOAD',
      download: 'FNAP_KG'
    
    },
    {
      id: 2,
      n: "poofbf_logo",
      on: false,
      title: `Poof's Killergarten Divided Fate`,
      char: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dflrcvo-9b40d414-b1e4-4eef-bd28-5af1d189f582.png/v1/fill/w_894,h_894/poof_s_killergarten_sonia_by_sronico_dflrcvo-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGZscmN2by05YjQwZDQxNC1iMWU0LTRlZWYtYmQyOC01YWYxZDE4OWY1ODIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.49uipNa0kc0cVmFtIj0_wNW27DA__zTZ-hlEur_TONQ",
      bck: "aa_pkgnt_void2",
      desc: `Killergarten is a place full of fate.. But what happens
      when fate once binded divides?? Definitely nothing good. Join Sonia, Poof, Capcake and Cubus in the
      journey through worlds to finally resolve their fate.`,
      gen: 'ROGUELIKE',
      diff: 4,
      images: [
        `DF/poofdf_1.png`,
        `DF/poofdf_2.png`,
        `DF/poofdf_3.png`,
        `DF/poofdf_4.png`,
        `DF/poofdf_5.png`,
        `DF/poofdf_6.png`,
        `DF/poofdf_7.png`
      
      ],
      text: [
        ` 
                     
        Revisit or meet the place of
        invigilation for few children.
        It's very uncertain what is the goal
        of this place now.
        
    
      Hell, it's better for poof to
      make the place suitable to his
      schemes, but the question is..
      Will he succeed?
        
   
     The rooms aren't physically
     aligned with each other and the
     space is messy.
         
     `,
     `
     As in Roguelike game, you need to move in order
     to be in good position to hit enemies and
     dodge their attacks.
         
    
        HP is displayed in hearts
        instead of bars and most of the time
        taking damage will take half of one.
          
    
       Map displays your position and
       plenty of rooms, either discovered or 
       unrevealed on the floor.   
      `,
      `
      There are 42+ items in the game,
      active or passive, every of them
      have an ability, some have better, some 
      weaker.
       

      Items are commonly located in special
      rooms on a floor or appear after the bossfight
        
   
      Those are very important and really 
      enhance the progress.
         
     `,
     `
     Floors have a bunch of collectible pick up
     items, chests, shops and guarded rooms.
     Some rooms containing boulders and spikes on
     the floor.
     

 Through the journey, difficulty raises.

   Be aware of the dangers awaiting every
   room.
  `,
  `
  Of course in Roguelike game There are 
  bosses and this one is no exception.  

Prepare your skills, nerves and gunpowder 
to deal with powerfull bosses each floor.

Outside of casual floor bosses there are final ones
which after defeating give mysterious animated ending
to experience.
 `,
    `
    Each character have their respective
    set of attributes and skills making
    them stand out in terms of playability.

   Defeating lore bosses with characters makes
   their progres sheets closer to completion.
 `,
 `
 Are you prepared to face it...?

  Are you strong enough to make through it...?

  If not, so live unaware in the present discarding
  the future.
`
      ],
      vid: 'df_ending6',
      com: 'DOWNLOAD',
      download: 'TBOP_KG'
    },
    {
      id: 3,
      n: "logo_nt",
      on: false,
      title: `Poof's Killergarten 2 Next Time`,
      char: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg2fqz7-4b44fe5b-7da4-49b0-aa3a-ba5cb7392539.png/v1/fill/w_858,h_932/poof_s_killergarten_grubiula_by_sronico_dg2fqz7-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM5MCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGcyZnF6Ny00YjQ0ZmU1Yi03ZGE0LTQ5YjAtYWEzYS1iYTVjYjczOTI1MzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.z6IAb7OP7WRp8sUuie_Oocv9ZHk3XqocjqAEIwsoJoY",
      bck: "aa_pkgnt_rurico15",
      desc: `Killergarten is a place that's going to be soon abandoned by Poof and gang as
      their never-ending pursuit of freedom continues.. Afterall they deserve some
      vacations from this cursed place... But soon they will be involved into something bigger Next Time.`,
      gen: 'RPG',
      diff: 3,
      images: [
        `NT/nt_pic1.png`,
        `NT/nt_pic2.png`,
        `NT/nt_pic3.png`,
        `NT/nt_pic4.png`,
        `NT/nt_pic5.png`,
        `NT/nt_pic6.png`,
        `NT/nt_pic7.png`
      ],
      text: [
        `
        No matter if you're visiting it
        for first time or returning
        here after longer or shorter break,
        it's environment will warmly welcome you.
  
    As the facility lies unconcious under
    Poof's glorious toes, he need
    to acknowledge new situations
    and events accuring there.
        
  
     You will meet plenty of
     interesting characters for
     first, second or third
     time. Each having something
     funny to say.
      `,
      `
      Killergarten toys and personel aren't everything
      to worry about. There are multiple new
      enemies you can face, with more
      or less difficulty.
       
  
       Fighting enemies isn't senseless.
       They drop a bunch of useful items,
       exp and tokens you can use to
       win more fights and develop your party.
        
    
     Backgrounds during the battles are
     the most fabulous that poof's killergarten ever
     had. Increasing the battle experience.
        
    `,
    `
    The main four characters of
    the game are returning in
    all their fashion with
    brand new recruitment
    conditions.
     

   Each of the playable characters has
   it's own set of classes and
   abilities that can use
   to play different role in
   the party.

    Aside from that there are
    even more teammates you
    can use, try different
    compositions and strategies
    yourself.
       
   `,
   `
   There are 180+ achievable
   skills in the whole game.
   
    

  No matter if active or passive,
  each skill feels unique and you're
  the one to make the good use of 
  them.
   

  Over time party members will
  learn new exciting powers, so the 
  playstyle strategies would change
  as well.
   
    
`,
`
Bossfights are crucial part of any RPG game,
and this one isn't exception.

Fight challenging bosses using
the best strategies and
strength of your party members
in order to discover new things
about the plot.

There are a lot bossfights in the game,
including secret mega bosses which
are very hard to defeat and
lead to unlocking the forbidden.
 `,
 `
 The story is very important part
 of this game so alongside with new
 chapters, characters are progressing
 to new and unknown locations which are
 waiting to be explored.

Remember that some of them are
only lasting temporary and after
exiting them, you won't be able
to return next time...
`,
`
There is only one true ending...

 The world can't have different paths of development..
 Conclusion is needed.. Is required..
 So which one of them..

 The answer is.. The one you'll end
 up getting as the last one.. No
 matter the previous efforts.
`
      ],
      vid: 'mega_trailer',
      com: 'DOWNLOAD',
      download: 'PKG_NT'
    },
    {
      id: 4,
      n: "Wov_logo2",
      on: false,
      title: `World of Vampirim`,
      char: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c08c2a5-dcbd-4fda-aa48-e0ee400a6c1f/dfetrs9-ea23b1be-ef8a-4cb4-9a5c-076abbf00d2d.png/v1/fill/w_247,h_273/world_of_vampirim_bestiary_entry__48___hungryplant_by_worldofvampirim_dfetrs9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjczIiwicGF0aCI6IlwvZlwvOWMwOGMyYTUtZGNiZC00ZmRhLWFhNDgtZTBlZTQwMGE2YzFmXC9kZmV0cnM5LWVhMjNiMWJlLWVmOGEtNGNiNC05YTVjLTA3NmFiYmYwMGQyZC5wbmciLCJ3aWR0aCI6Ijw9MjQ3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ic3rkuko4BcKokuJ9mxzZm80k3dgkPTmiMV_RMGoBLU",
      bck: "wov_meadow",
      desc: `Land of Vampirim is an ancient place, full of lore, adventures, monsters,
      armies and magic. But such chaotic landscape can't last long right??
      That's why someone need to take a role of a hero!! Is that going to be you??
      There's only one person who can eradicate all the evil and save the day.`,
      gen: 'RPG',
      diff: 3,
      images: [
        `WOV/wov1.png`,
        `WOV/wov2.png`,
        `WOV/wov3.png`,
        `WOV/wov4.png`,
        `WOV/wov5.png`,
        `WOV/wov6.png`
      
      ],
      text: [
        `Start your adventure visiting brand new strange world.
        Explore various landscapes and mysterious locations
        in chaotic World of Vampirim.
        It's up to you what path you'll end up going.`,
        `As the great Hero of Vampirim you'll face multiple
        opponents on your way of completing the grand
        prophecy. From small sever rat to monstrous flamebreathing
        dragon, ending on blood and virgin lusting vampires.
        There are thousands of enemies and each of them is
        unique in battle.`,
        `The most important attribute of a Hero, isn't
        his hammer or equipment he wields but the class.
        There are plenty of classes with amazing abilities
        and playstyles. Chose one that fits you the best.
        Let it be Paladin.. Please.`,
        `Land of Vampirim is full of epic treasure including
        the rarest of the rare, most mythical of mythics
        and legendariest of legendary??
        The point is that everyone will find something
        valuable, especially if they do looting expedition
        to a dungeon.
        Don't let thief goblin rob you.`,
        `Oh, good old bossfights. The best part of each RPG game.
        There are plenty of them to face in Vampirim.
        Each one is spectacular and full of drama and suspense.
        Bosses require lots of powerful skills, gear and strategy
        to be taken down and have their own special battle
        mechanics.`,
        `Find Me.. Please.. Only I can stop the Angel Age.`
      ],
      vid: 'wov_cinematic_1',
      com: 'PLAY'
    },
  ];

  const func = (e: any) => {
    setChanger(e);
    // setStarting(e);
  };
  const getChildren = (e: any) => {
    //  setModal(e.target);
    let child;
  
        if(e.element === 'video'){
            if(e.isRemoved === true){
            setVideo(false);
            }
            if (typeof window !== 'undefined') {
            localStorage.setItem('stop','true');
            }
            child = <Vid controls={true} muted={e.muted} url={e.url} t={2}/>
        }
        if(e.element === 'slider'){

            child = <div style={{width: '100%', height: '100%', display: 'flex', alignItems:'center', left:'50%', position:'relative',transform: 'translate(-50%) scale(1.4)'}}><SliderDesc text={e.text} images={e.images} amnt={e.amnt} /></div>
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
  useEffect(() => {
    const e = games.map((val) => {
      if (val.id === changer) {
        setElm(val);
        setVideo(false);
      }
      return { ...val, on: changer === val.id ? true : false };
    });
    
 
    // setStarting()
    setStarting(e);
    game = 0;
  }, [changer]);
  const watchVid = () => {
    setVideo(!video);
    if(video === false){
      if (typeof window !== 'undefined') {
      localStorage.setItem('stop','true');
      }
     
    }else{
      if (typeof window !== 'undefined') {
      localStorage.removeItem('stop');
      }
   
    }

  }

  function download(fileUrl: string, fileName: string) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
  }
  const downloadGame = (e: any) => {
    download(`/downloadable/${e}.ZIP`,`${e}.ZIP`);
  }
  return (
    <BodyWrapper overflow={true}>
        {modal && <Modal transparent={true} click={closeModal} visible={modal && true}>{modal}</Modal>}
      <Nevry bck={1} w={"95%"} h={"90vh"}>
        <GameIconsList games={starting} func={func} />
        <div className={classes.container1}>
          {/*             
            <ColorRect w={'20'} h={'5'}
            r={'255'} g={'0'} b={'0'} font={'3rem'}>Play game</ColorRect>
            <ColorRect w={'20'} h={'5'}
            r={'200'} g={'0'} b={'0'} font={'3rem'}>Play game</ColorRect>
            <ColorRect w={'20'} h={'5'}
            r={'255'} g={'200'} b={'50'} font={'3rem'} radius={'20px'}>Play game</ColorRect>
             <ColorRect w={'10'} h={'10'}
            r={'155'} g={'255'} b={'50'} font={'10rem'} radius={'100%'}>*</ColorRect> */}
          <div
            style={{
              position: "absolute",
              top: "-3%",
              left: "50%",
              transform: "translate(-50%)",
              margin: 0,
              zIndex: 1,
            }}
          >
            <ColorRect
              w={elm.title.length * 2 + 3}
              h={"5"}
              r={"255"}
              g={"0"}
              b={"0"}
              font={"3rem"}
            >
              {elm.title}
            </ColorRect>
          </div>
          <div className={classes['inf-mov']}
          >
              <div className={`${classes.logo}  ${video && classes['logo--logo']}`} style={{
                backgroundImage: `url(/pictures/icons/${elm.n}.png)`
            }}></div>
          { !video && <Fragment>
          
            <Card shadow={true}>
            
            <div className={classes.information}>
              <h1 className={classes['desc-h1']}>{elm.gen}</h1>
              <p className={classes['desc-p']}>{elm.desc}</p>
              <DiffBar amnt={elm.diff}/>
        
              <Button click={watchVid} title={'Watch ►'}/>
            </div>
            
            
          </Card>
          </Fragment>  }
           
           
            {video && 
            <Fragment>
                <div style={{
                    display: 'flex',
                    flexDirection:'column',
                    alignItems:'center'
                }}>
            <Vid click={getChildren} muted={false} url={`videos/${elm.vid}.mp4`}/>
            <Button click={watchVid} title={'Close x'}/>
            </div>
            </Fragment>}
          </div>
          <Image posx={-45} posy={250} image={elm.char} w={"450px"} h={"70%"} />
          <Background w={"95%"} h={"95%"} radius={"5px"} img={elm.bck} />
        </div>
        <div className={classes.container2}>
            <SliderDesc click={getChildren} text={elm.text} images={elm.images} amnt={elm.images.length} />
        <ColorRect
              w={'25'}
              h={"5"}
              r={"155"}
              g={"255"}
              b={"0"}
              font={"3rem"}
              link={elm.com === 'PLAY' ? './games/world_of_v' : undefined}
              click={downloadGame}
              download={elm.com != 'DOWNLOAD' ? false : elm.download}
            >
              {elm.com}
            </ColorRect>
        </div>
      </Nevry>
    </BodyWrapper>
  );
};

export default Index;
