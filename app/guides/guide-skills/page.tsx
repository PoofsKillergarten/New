
import classes from '../guides.module.scss';
import BodyWrapper from "../../components/Elements/BodyWrapper";
import Nevry from "../../components/Nevry/Nevry";
import ImageGallery from '../../components/Elements/ImageGallery';
import Modal from '../../components/Nevry/Modal';

import ColorRect from '../../components/UI/ColorRect';
import Iframe from '../../components/Nevry/Iframe';
import Blackout from '../../components/UI/Blackout';
import GuidesList from '../../components/Elements/GuidesList';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Miniguides from '@/app/components/Nevry/Miniguides';
import Minicharacters from '@/app/components/Nevry/Minicharacters';



const Index = (ref: any) => {
  // const [modal,setModal] = useState();
  let modal;
  const setModal = (e: any) =>{
    modal = e;
  }
  const character_skills = [
    {
      id: 6,
      name: 'Poof',
      original: [
        {title: 'Medicheeks',
         cost: {c: 'P', s:'p'},
         lv: '1',
         desc: `Poof regenerates 2% of his HP and 1% of MP
         every turn.`
        },
        {title: 'Hit or miss',
        cost: {c: '30', s:'mp'},
        lv: '1',
        desc: `Poof launches a rattle that deals damage
        stronger than base attack to random target.`
       },
       {title: 'Joy',
       cost: {c: '10', s:'tp'},
       lv: '2',
       desc: `Restores 20% of user's MP and HP by a cost of
       a few tech points.`
      },
      {title: 'Rattle Smash',
      cost: {c: '150', s:'mp'},
      lv: '15',
      desc: `Poof smashes strongly using his rattle,
      dealing 5 times greater damage than base.`
     },
     {title: 'Rattle Over Time',
      cost: {c: '650', s:'mp'},
      lv: '50',
      desc: `After using that power no other character can
      take an action this turn. Deals High damage.`
     },
     {title: 'Final Rumbling',
     cost: {c: '100', s:'tp'},
     lv: '60',
     desc: `Poof throws rattles around the world.
     Whose fate will be decided?? Try yourself.`
    }
      ],
      dividedFate: [
        {title: 'Rattle Slash',
         cost: {c: '3', s:'mp'},
         lv: '-'
        },
        {title: 'Cheeks of Diamond',
        cost: {c: 'P', s:'p'},
        lv: '-'
       },
       {title: 'Rattle Blow',
       cost: {c: '2', s:'mp'},
       lv: '-'
      },
      {title: 'KG Freedom',
      cost: {c: 'P', s:'p'},
      lv: '-'
     },
       {title: 'Final Rumbling',
       cost: {c: '5', s:'mp'},
       lv: '-'
      }
      
      ],
      nextTime: [
        {title: 'Rattle Roll',
        cost: {c: '10', s:'mp'},
        lv: '1'
       },
       {title: 'Power Biter',
       cost: {c: '33', s:'mp'},
       lv: '10'
      },
      {title: 'Cheek Crush',
      cost: {c: '200', s:'mp'},
      lv: '20'
     },
     {title: 'Life Inhale',
     cost: {c: 'P', s:'p'},
     lv: '35'
    },
    {title: 'Rattle Rampage',
     cost: {c: '160', s:'mp'},
     lv: '70'
    },
    {title: 'Rattle Ragnarok',
    cost: {c: 'P', s:'p'},
    lv: '100'
   }
      ],
    },
    {
      id: 1,
      name: 'Cubus',
      original: [
        {title: 'Power Burst',
         cost: {c: '10', s:'tp'},
         lv: '5',
         desc:`Deals damage slightly higher than basic.
         Adds: Green to combo pieces.`
        },
        {title: 'Workout',
        cost: {c: 'P', s:'p'},
        lv: '8',
        desc: `At the end of each turn Cubus gains additional
        + 5 techpoints. [Passive]`
       },
       {title: 'Mega Rushdown',
       cost: {c: '30', s:'tp'},
       lv: '10',
       desc: `Deals damage 6 times but slightly weaker than basic.
       Adds: Blue to combo pieces.`
      },
      {title: 'Adrenaline',
      cost: {c: 'P', s:'p'},
      lv: '12',
      desc: `Cubus gins + 10 techpoints after new combo
      piece is added. [Passive]`
     },
     {title: 'Omega Fist',
      cost: {c: '100', s:'tp'},
      lv: '15',
      desc: `Cubus deals massive damage.
      Adds: Yellow to combo pieces.`
     },
     {title: 'Vigor',
     cost: {c: 'P', s:'p'},
     lv: '35',
     desc: `At the end of each turn Cubus is at 100% HP.
     He releases power burst. [Passive]`
    }
      ],
      dividedFate: [
        {title: 'Muscle Training',
        cost: {c: '3', s:'mp'},
        lv: '-'
       },
       {title: 'Leg Day',
       cost: {c: '4', s:'mp'},
       lv: '-'
      },
      {title: 'Punching Bag',
      cost: {c: 'p', s:'p'},
      lv: '-'
     },
     {title: 'Last One Standing',
     cost: {c: 'P', s:'p'},
     lv: '-'
    },
      {title: 'Workout',
      cost: {c: 'P', s:'p'},
      lv: '-'
     }
      ],
      nextTime: [
        {title: 'Fast Fist',
        cost: {c: '20', s:'tp'},
        lv: '1'
       },
       {title: 'Sovereign Gauntlet',
       cost: {c: '60', s:'tp'},
       lv: '10',
       desc: ``
      },
      {title: `Brawn'n Brawns`,
      cost: {c: 'P', s:'p'},
      lv: '25'
     },
     {title: 'Punching Machine',
     cost: {c: '70', s:'tp'},
     lv: '50'
    },
    {title: 'Preemptive Strike',
     cost: {c: 'P', s:'p'},
     lv: '65'
    },
    {title: 'Gigas Blow',
    cost: {c: '100', s:'tp'},
    lv: '75'
   }
      ],
    },
    {
      id: 8,
      name: 'Sonia',
      original: [
        {title: 'Soul Curation',
         cost: {c: '50', s:'mp'},
         lv: '5',
         desc: `Heals an ally 10% of his health for each soul you
         posses. During the battle. Cost: 1 soul each use.`
        },
        {title: 'Soul Scythe',
        cost: {c: '70', s:'mp'},
        lv: '8',
        desc: `Deals high amount of damage. and gives
        +5 temporary souls.`
       },
       {title: 'Dark Magic',
       cost: {c: '0', s:'mp'},
       lv: '12',
       desc: `Takes life from herself for mana.`
      },
      {title: 'Monster from Overworld',
      cost: {c: '100', s:'tp'},
      lv: '20',
      desc: `Sonia Summons Monster from overworld to attack
      enemies. Once a battle. Lower cost each turn.`
     },
     {title: 'Dark Sacrifice',
      cost: {c: '666', s:'mp'},
      lv: '35',
      desc: `Deals damage equal to missing health of all
      allies to single enemy. Usable once a battle.`
     },
     {title: 'Doom Afterlife',
     cost: {c: '400', s:'mp'},
     lv: '55',
     desc: `Deals massive damage for a cost od 10 souls.
     To random target.`
    }
      ],
      dividedFate: [
        {title: 'Dark Magic',
        cost: {c: '0', s:'mp'},
        lv: '-'
       },
       {title: 'Curation',
       cost: {c: '2', s:'mp'},
       lv: '-'
      },
      {title: 'Artificial Heart',
      cost: {c: '8', s:'mp'},
      lv: '-'
     },
     {title: 'Leech',
     cost: {c: 'P', s:'p'},
     lv: '-'
    },
      {title: 'Conjure Demon',
      cost: {c: '10', s:'mp'},
      lv: '-'
     }
      ],
      nextTime: [
        {title: 'Soul Society',
        cost: {c: 'P', s:'p'},
        lv: '1'
       },
       {title: 'Reap Souls',
       cost: {c: '40', s:'mp'},
       lv: '5'
      },
      {title: 'Summon Hell Sergeant',
      cost: {c: '130', s:'mp'},
      lv: '10'
     },
     {title: 'Game of Life',
     cost: {c: '40', s:'mp'},
     lv: '30'
    },
    {title: 'Witch Miasma',
     cost: {c: '380', s:'mp'},
     lv: '45'
    },
    {title: 'Monster from Overworld',
    cost: {c: '666', s:'mp'},
    lv: '70'
   }
      ],
    },
    {
      id: 0,
      name: 'Capcake',
      original: [
        {title: 'Chunk Chance',
         cost: {c: 'P', s:'p'},
         lv: '1',
         desc: `At the start of the battle Capcake adds from 1-3 
         Yellow chunks to the items temporary. [Passive]`
        },
        {title: 'Play with Cars',
        cost: {c: '45', s:'mp'},
        lv: '10',
        desc: `Gives ally character boost to ATK and SPD
        and adds 2 cars to your inventory temporary`
       },
       {title: 'Timer Flip',
       cost: {c: '150', s:'mp'},
       lv: '20',
       desc: `Can apply stun effect to an enemy and
       resets music box to the start.`
      },
      {title: 'Tower of Chunks',
      cost: {c: 'P', s:'p'},
      lv: '25',
      desc: `After 3 toys are being used.
      Capcake releases Rain of Chunks. [Passive]`
     },
     {title: 'Play with Toys',
      cost: {c: '30', s:'tp'},
      lv: '38',
      desc: `Capcake uses all toys from your inventory on
      random targets.`
     },
     {title: 'Flop',
     cost: {c: '75', s:'tp'},
     lv: '60',
     desc: `Capacake calls his younger brother Flop who deals
     damage every time toy is used.`
    }
      ],
      dividedFate: [ 
        {title: 'Rain of Chunks',
      cost: {c: '2', s:'mp'},
      lv: '-'
     },
     {title: 'Chunk Chain',
     cost: {c: 'P', s:'p'},
     lv: '-'
    },
    {title: 'Timer Flip',
    cost: {c: '0', s:'mp'},
    lv: '-'
   },
   {title: 'Box of Toys',
   cost: {c: 'P', s:'p'},
   lv: '-'
  },
    {title: 'Flop',
    cost: {c: '8', s:'mp'},
    lv: '-'
   }],
      nextTime: [  {title: 'Cupcake Feast',
      cost: {c: '100', s:'mp'},
      lv: '20'
     },
     {title: 'Toy Toss',
     cost: {c: '200', s:'mp'},
     lv: '35'
    },
    {title: 'Chunkology',
    cost: {c: 'P', s:'p'},
    lv: '45'
   },
   {title: 'Chunk Championships',
   cost: {c: 'P', s:'p'},
   lv: '60'
  },
  {title: 'Whole Cake',
   cost: {c: '180', s:'mp'},
   lv: '80'
  },
  {title: 'Chunkapocalypse',
  cost: {c: '900', s:'mp'},
  lv: '100'
 }],
    },
    {
      id: 2,
      name: 'Fax',
      dividedFate: [ 
        {title: 'Pizza Pass',
      cost: {c: 'P', s:'p'},
      lv: '-'
     },
     {title: 'Furry Scratch',
     cost: {c: '1', s:'mp'},
     lv: '-'
    },
    {title: 'Social Experiment',
    cost: {c: '2', s:'mp'},
    lv: '-'
   },
   {title: 'Bloody Claws',
   cost: {c: 'P', s:'p'},
   lv: '-'
  },
    {title: 'Simping',
    cost: {c: 'P', s:'p'},
    lv: '-'
   }],
      nextTime: [
        {title: 'Nine tailed Fax',
        cost: {c: '75', s:'mp'},
        lv: '15'
       },
       {title: 'Fit Fat',
       cost: {c: 'P', s:'p'},
       lv: '20'
      },
      {title: `Secksclenstva`,
      cost: {c: '80', s:'mp'},
      lv: '25'
     },
     {title: 'Addiction',
     cost: {c: 'P', s:'p'},
     lv: '35'
    },
    {title: 'Furry Frenzy',
     cost: {c: '45', s:'mp'},
     lv: '45'
    },
    {title: 'Social Experiment',
    cost: {c: '200', s:'mp'},
    lv: '50'
   }
      ],
    },
    {
      id: 3,
      name: 'Hnia',
      dividedFate: [ 
        {title: 'Painted Nails',
      cost: {c: 'P', s:'p'},
      lv: '-'
     },
     {title: 'Perfume Acid',
     cost: {c: 'P', s:'p'},
     lv: '-'
    },
    {title: 'Lipstick Lash',
    cost: {c: 'P', s:'p'},
    lv: '-'
   },
   {title: 'Charm',
   cost: {c: 'P', s:'p'},
   lv: '-'
  },
    {title: 'Ultimate Shipping',
    cost: {c: 'P', s:'p'},
    lv: '-'
   }],
      nextTime: [
        {title: 'Lampflash',
        cost: {c: '20', s:'mp'},
        lv: '1'
       },
       {title: 'Bag Barrage',
       cost: {c: '190', s:'mp'},
       lv: '30'
      },
      {title: `Fanfic`,
      cost: {c: '340', s:'mp'},
      lv: '50'
     },
     {title: 'Heart Breaker',
     cost: {c: '290', s:'mp'},
     lv: '65'
    },
    {title: `Let's be Friends`,
     cost: {c: 'P', s:'p'},
     lv: '90'
    },
    {title: 'OTP',
    cost: {c: '120', s:'mp'},
    lv: '95'
   }
      ],
    },
    {
      id: 4,
      name: 'Kucyki',
      dividedFate: [ 
        {title: 'Power of Gloni',
      cost: {c: 'P', s:'p'},
      lv: '-'
     },
     {title: 'All in Corn',
     cost: {c: '3', s:'mp'},
     lv: '-'
    },
    {title: 'Acronical Excursion',
    cost: {c: '4', s:'mp'},
    lv: '-'
   },
   {title: 'Glony Endgame',
   cost: {c: '5', s:'mp'},
   lv: '-'
  },
    {title: 'MLG',
    cost: {c: '10', s:'mp'},
    lv: '-'
   }],
      nextTime: [
        {title: 'Bookworm bites',
        cost: {c: '105', s:'mp'},
        lv: '5'
       },
       {title: 'Study',
       cost: {c: '80', s:'mp'},
       lv: '30'
      },
      {title: `All-in-corn`,
      cost: {c: '180', s:'mp'},
      lv: '45'
     },
     {title: 'Chain Lightning',
     cost: {c: '200', s:'mp'},
     lv: '60'
    },
    {title: `Acronical Excursion`,
     cost: {c: '360', s:'mp'},
     lv: '85'
    },
    {title: 'MLG',
    cost: {c: '100', s:'tp'},
    lv: '100'
   }
      ],
    },
    {
      id: 5,
      name: 'Majones',
      dividedFate: [ 
        {title: 'Time is money',
      cost: {c: 'P', s:'p'},
      lv: '-'
     },
     {title: 'Invest on arms',
     cost: {c: 'P', s:'p'},
     lv: '-'
    },
    {title: `Imperium'o Mayonaise`,
    cost: {c: '3', s:'mp'},
    lv: '-'
   },
   {title: 'Big Bank attack',
   cost: {c: '5', s:'mp'},
   lv: '-'
  },
    {title: 'Pay to win',
    cost: {c: '0', s:'mp'},
    lv: '-'
   }],
      nextTime: [
        {title: 'Invest on arms',
      cost: {c: '120', s:'mp'},
      lv: '5'
     },
     {title: 'Bank Locate',
     cost: {c: '240', s:'mp'},
     lv: '15'
    },
    {title: 'Imperium of mayonaise',
    cost: {c: '100', s:'mp'},
    lv: '30'
   },
   {title: 'Dollar Slash',
   cost: {c: '300', s:'mp'},
   lv: '40'
  },
  {title: 'Coin Picking',
   cost: {c: 'P', s:'p'},
   lv: '50'
  },
  {title: 'Best Deal Ever',
  cost: {c: '300', s:'mp'},
  lv: '90'
 }
      ],
    },
    {
      id: 7,
      name: 'G. Poof',
      dividedFate: [ 
        {title: 'Golden Vitality',
      cost: {c: 'P', s:'p'},
      lv: '-'
     },
     {title: 'Golden Oportunity',
     cost: {c: 'P', s:'p'},
     lv: '-'
    },
    {title: `Golden Soul`,
    cost: {c: 'P', s:'p'},
    lv: '-'
   },
   {title: 'Golden Hunger',
   cost: {c: 'P', s:'p'},
   lv: '-'
  },
    {title: 'Final Rumbling',
    cost: {c: '5', s:'mp'},
    lv: '-'
   }],
      nextTime: [],
    },
    {
      id: 9,
      name: 'Tealena',
      original: [
        {title: 'Hyperspeed',
         cost: {c: '0', s:'mp'},
         lv: '5'
        }
      ],
      dividedFate: [
        {title: 'Bleeding Bless',
        cost: {c: 'P', s:'p'},
        lv: '-'
       },
       {title: 'Hyperspeed',
       cost: {c: '2', s:'mp'},
       lv: '-'
      },
      {title: 'Challange',
      cost: {c: 'P', s:'p'},
      lv: '-'
     },
     {title: 'Long Run',
     cost: {c: 'P', s:'p'},
     lv: '-'
    },
      {title: '360 No Scope',
      cost: {c: '4', s:'mp'},
      lv: '-'
     }
      ],
      nextTime: [
        {title: 'Spin',
        cost: {c: '15', s:'mp'},
        lv: '1'
       },
       {title: 'Shuriken barrage',
       cost: {c: '225', s:'mp'},
       lv: '35'
      },
      {title: `360 No Scope`,
      cost: {c: '200', s:'mp'},
      lv: '60'
     },
     {title: 'Highwind',
     cost: {c: 'P', s:'p'},
     lv: '85'
    },
    {title: `Slowdown Swing`,
     cost: {c: '50', s:'mp'},
     lv: '90'
    },
    {title: 'Fortune tealer',
    cost: {c: '400', s:'mp'},
    lv: '100'
   }
      ],
    },
  ];
  const fs = require('fs');
  // fs.access('public/pictures/items', fs.constants.R_OK, (err: any) => {
  //   console.log('\n> Checking Permission for reading the file');
  //   if (err)
  //     console.error('No Read access');
  //   else
  //     console.log('File can be read');
  // });
  const files = fs.readdirSync('./app/assets/characters');
  console.log(files);

  const miniguides: any = []; 
  for(let i = 0; i < files.length; i++){
    let r: any = -1;
    for(let j = 0; j < character_skills.length; j++){
      if(i === character_skills[j].id){
        r = character_skills[j];
      }
    }

    miniguides.push(
      <Minicharacters content={r} key={r && r.id} id={r && r.id} file={files[i]}/>
    );
   }

   const clickH = () => {
    if (typeof window !== 'undefined') {
    const audio = new Audio('/music/se/Cursor2.ogg');
    audio.play();
    }

   }
    return (
        <BodyWrapper overflow={true}>
              
         
            <Link href={'/guides'} className={classes.return} >‹Return</Link>
          <Nevry bck={3} w={"95%"} h={"90vh"}>
          <div className={classes.container1}>
            {miniguides}
          </div>
          </Nevry>

      <Blackout/>
        </BodyWrapper>
    );
    }
    
    export default Index;