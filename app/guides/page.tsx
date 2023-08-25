
import classes from './guides.module.scss';
import BodyWrapper from "../components/Elements/BodyWrapper";
import Nevry from "../components/Nevry/Nevry";
import ImageGallery from '../components/Elements/ImageGallery';
import Modal from '../components/Nevry/Modal';

import ColorRect from '../components/UI/ColorRect';
import Iframe from '../components/Nevry/Iframe';
import Blackout from '../components/UI/Blackout';
import GuidesList from '../components/Elements/GuidesList';


const Index = (ref: any) => {

   const guides = [
      {
        title: 'Divided Fate Items',
        pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4x5so-af048b49-1d67-4ab6-a9ac-f375dfc2b54b.jpg/v1/fill/w_1192,h_670,q_70,strp/poof_s_killergarten_by_sronico_dg4x5so-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzR4NXNvLWFmMDQ4YjQ5LTFkNjctNGFiNi1hOWFjLWYzNzVkZmMyYjU0Yi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FDeLq94ATimllRZOLhAGm2xTBM5hm07FcY51jBlznMw',
        link: 'guide-items'

      },
      {
        title: 'Character Skills',
        pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4x5qm-b4deb6d6-48d1-4deb-ace5-a75d29b04aa0.jpg/v1/fill/w_1192,h_670,q_70,strp/poof_s_killergarten_by_sronico_dg4x5qm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzR4NXFtLWI0ZGViNmQ2LTQ4ZDEtNGRlYi1hY2U1LWE3NWQyOWIwNGFhMC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.frtoqxOP1vbfz8OQ1Kepjc6ZfbkSRC92u-TSpfuiSyA',
        link: 'guide-skills'
      },
      {
        title: 'Defeating Playroom',
        pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4x5sp-11fc8983-fc6f-49a9-8644-dcf1c8a063e4.jpg/v1/fill/w_1191,h_671,q_70,strp/poof_s_killergarten_by_sronico_dg4x5sp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzR4NXNwLTExZmM4OTgzLWZjNmYtNDlhOS04NjQ0LWRjZjFjOGEwNjNlNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lCdqJgOhtD4ItdQIqKIVYiQTEvxu9aSUxnn2itQceXE',
        link: 'guide-playroom'
        
      },
      {
        title: 'Secret Bosses',
        pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4x5t6-3f0ea946-12de-449e-973f-b0d2c7a0415c.jpg/v1/fill/w_1192,h_670,q_70,strp/poof_s_killergarten_by_sronico_dg4x5t6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzR4NXQ2LTNmMGVhOTQ2LTEyZGUtNDQ5ZS05NzNmLWIwZDJjN2EwNDE1Yy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1VK8ZCgkknz7_8Q7XYphW5AyIhZA_6gP-ua4oONWiKY',
        link: 'guide-bosses'
      }
   ];
    return (
        <BodyWrapper overflow={true}>
            
          <Nevry bck={2} w={"95%"} h={"90vh"}>
          <div className={classes.title}>
          <ColorRect
              w={'30'}
              h={"4"}
              r={"250"}
              g={"150"}
              b={"255"}
              font={"2.5rem"}
            
            >
           Let me Guide you
            </ColorRect>
            </div>
         <GuidesList locked={3} guides={guides} />
      </Nevry>
      <Blackout/>
        </BodyWrapper>
    );
    }
    
    export default Index;