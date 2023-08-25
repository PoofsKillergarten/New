
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



const Index = (ref: any) => {
  // const [modal,setModal] = useState();
  let modal;
  const setModal = (e: any) =>{
    modal = e;
  }
  const fs = require('fs');
  // fs.access('public/pictures/items', fs.constants.R_OK, (err: any) => {
  //   console.log('\n> Checking Permission for reading the file');
  //   if (err)
  //     console.error('No Read access');
  //   else
  //     console.log('File can be read');
  // });
  const files = fs.readdirSync('./app/assets/items');
  const desc = [
    'Increases Attack by 1.',
    'Increases Range by 1.',
    'Active Item, Restores 1 HP for cost of 2 MP.',
    'Gives you 3 Bombs and Increases Bomb damage by 1.',
    `When you receive damage, there's 25% chance to negate it.`,
    'Active Item, Gives you 1-3 tokens for 1 MP.',
    'Increases Range by 1. Increases Luck by 1.',
    'Increases Hit Rate by 2. Each attack can make you bleed.',
    'Chose one Attribute out of 3 to increase.',
    'Increases Hit Rate by 1. Each key pickup restores 2HP',
    'Increases Hit Rate by 1.',
    'Increases Hit Rate by 1.',
    'Increases Hit Rate by 1. Increases Attack by 1. Decreases HP by 1.',
    `You're immune to fear.`,
    `Active Item, Increases Hit Rate by 1 for cost of 5 MP.`,
    `Active Item, Gives you empty HP container for cost of 8 MP.`,
    `Aftere getting to new Floor restore 1HP`,
    `Increase HP by 2. Increases Hit Rate by 1. Decreases Speed by 1.`,
    `Active Item, Clears you from all negative effects for cost of 1 MP.`,
    `Increases Luck by 1. Restore 2 HP.`,
    `Opening locked objects has 50% chance to save a key.`,
    `Poof Exclusive Item. Deals area damage around on interaction.`,
    `Increases Luck by 1.`,
    `Capcake Exclusive Item. Shoots chunk in a straight line, can grow stronger, always turns to the player.`,
    `Sonia Exclusive Item. Follows and damages enemies.`,
    `Cubus Exclusive Item. After getting attacked by you rushes straight and deals
    area damage at the end.`,
    `Dream Room Item. After you eat 5 pizzas increase 1 random attribute by 1.`,
    `Dream Room Item. After taking damage, deal damage to all enemies in the room`,
    `Dream Room Item. Items in shops are 50% cheaper.`,
    `Dream Room Item. Damaging enemies makes them move away.`,
    `Dream Room Item. Increase Attack by 1, your attacks have chance to deal x2 damage.`,
    `Dream Room Item. Beds always spawn at least once on each floor.`,
    `Dream Room Item. Taking pickup items gives you double the amount.`,
    `Increase HP by 1.`,
    `Dream Room Item. Active Item. Shows location of Floor Pass for the cost of 1 MP.`,
    `Dream Room Item. If you manage to clear a room without taking damage, give you random items.`,
    `Dream Room Item. Hidden rooms in the walls are visible.`,
    `After picking up, choose 3 special passive abilities to have.`,
    `Appears in the starting room and Floor Pass location, teleports to random room after interaction.`,
    `Taking damage from projectles has a chance of restoring 1MP.`,
    `After each couple of seconds, deals damage to all enemies in a room.`,
    `Active Item. Teleport to a random unvisited location for the cost of 2 MP.`,
    `Your attacks have increased radius and damage.`,
    `Active Item. After use, open a portable shop where items are slightly more expensive.`,
    `Gain 5 Birthday Presents. They clear all negative effects after use.`,
    `Gain 3 chocolate bars. They give you immunity for couple of seconds.`,
    `Increase HP by 1. Gain 1 token for each pickup item left on the previous floor.`,
    `Increase HP by 1. Using pizzas has 50% to restore 1 MP.`,
    `Increases Hit Rate by 1. Your hit Rate is even higher if you stay still.`,
    `Gain 2 Tea Weeds. They increase Attack for couple of seconds.`,
    `You can deal area damage around your character at random.`,
    `After attacking, deal damage to random enemy.`,
    `Your bombs leave mayonaise after exploding which damages enemies on contact.`,
    `Gain 100 EXP after entering new floor.`,
    `Taking pickup items has a chance to give you 1 Cola. Using colas has 50% chance of restoring 1 more MP.`,
    `Gain 2 Revive Cakes. Revive cake ressurects you with 2 HP after dying.`,
    `Increase Luck by 1. Increase Hit Rate by 1.`,
    `Increase Range by 1. Locations of Item Room and Shop are visible to you.`,
    `Increases Attack by 1. Your Attack is even higher if you stay still.`,
    `Active Item. You have a chance to gain 3 pizzas or poison yourself for the cost of 3 MP.`,
    `Your attacks have chance to Stop enemy for some time.`,
    `Increase Luck by 1. Tokens spent on shopping give you equal amount of EXP.`,
    `Your projectles have chance to move randomly.`,
    `Your bombs poison enemies.`,
    `Active Item. Gain random Skill Card for the cost of 5 MP.`,
    `First time taking damage in a room is negated.`,
    `Increase HP by 1. Using pizzas have 50% chance of restoring 2 HP instead of 1.`,
    `Slaying enemies has a chance of restoring 1 MP.`,
    `Increase HP by 3. Decrease other Attributes by 1.`,
    `Bombs trigger twice.`,
    `Take 10% of Boss's Health at the start of battle.`,
    `You're immune to bomb damage. Gain 1 bomb at the start of each new floor.`,
    `Slaying enemies has chance to activate 4-directional wave of attacks that damages everything it reaches.`,
    `Active Item. Restore 2 HP for the cost of 3 MP.`,
    `Increases ALL Attributes by 1.`,
    `Appears at the left of the map and shots 3 projectles straight.`,
    `After you complete floor in 5 minutes or less gain random items.`,
    `You move above obstacles, spikes, goo, etc..`,
    `Active Item. Gives you 1 MP for the cost of EXP, cost increases each use.`,
    `Summons copy of your character that damages enemy on contact and returns after some time. Moves the same as you.`,
    `Active Item. Increase random attribute by 1 for the cost of 5 MP.`,
    `Increase Speed by 1.`


  ];

  const miniguides: any = []; 
  for(let i = 0; i < files.length; i++){
    miniguides.push(
      <Miniguides description={desc[i]} file={files[i]}/>
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
          <Nevry w={"95%"} h={"90vh"}>
            <div className={classes['guide-container']}>
              {miniguides}
            </div>
          </Nevry>

      <Blackout/>
        </BodyWrapper>
    );
    }
    
    export default Index;