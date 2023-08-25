'use client';
import classes from './gallery.module.scss';
import BodyWrapper from "../components/Elements/BodyWrapper";
import Nevry from "../components/Nevry/Nevry";
import ImageGallery from '../components/Elements/ImageGallery';
import Modal from '../components/Nevry/Modal';
import { useState } from 'react';
import ColorRect from '../components/UI/ColorRect';


const Index = (ref: any) => {
    const [modal,setModal] = useState<any>();
    const imgs: string[] = [
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg54gqu-ccd91b6d-41c2-4f29-b878-95e9d498f7ad.png/v1/fill/w_444,h_250/poof_s_killergarten_binded_fate_logo_by_sronico_dg54gqu-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzU0Z3F1LWNjZDkxYjZkLTQxYzItNGYyOS1iODc4LTk1ZTlkNDk4ZjdhZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.UZQ1Rj4zVpcKMiNrZo99lQwCv4HMKEaApaUeWApZiAE',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4xa14-573b7118-065d-4122-a115-50895b23aee2.png/v1/fit/w_375,h_333/poof_s_killergarten_fboy_art_by_sronico_dg4xa14-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzOCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGc0eGExNC01NzNiNzExOC0wNjVkLTQxMjItYTExNS01MDg5NWIyM2FlZTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Hz2beQQk1pG5KXJlvxS0MtPMmN2ZuHCOZ9AYLvqN0Y0',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4x9fu-4e1d81af-4fa5-46d5-bec9-34fc3601828b.png/v1/fill/w_622,h_350,q_70,strp/poof_s_killergarten_by_sronico_dg4x9fu-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzR4OWZ1LTRlMWQ4MWFmLTRmYTUtNDZkNS1iZWM5LTM0ZmMzNjAxODI4Yi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QU84xtb_oKCJrRcd1PP2eWdUbxq7YiqNYcvvbQPJg_I',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4o85t-df04b74c-b1dc-41c9-937f-e01c8334bb61.png/v1/fit/w_300,h_636,q_70,strp/poof_s_killergarten_sonia_art_by_sronico_dg4o85t-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM2IiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzRvODV0LWRmMDRiNzRjLWIxZGMtNDFjOS05MzdmLWUwMWM4MzM0YmI2MS5wbmciLCJ3aWR0aCI6Ijw9NjQ5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.rUEORARgHQQTRrUaiY5wzncWIm6soa22Yp0f6yacCMo',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4o6c6-e8020c9d-f445-4982-9778-00d58ff2be33.png/v1/fill/w_617,h_350,q_70,strp/poof_s_killergarten_art_by_sronico_dg4o6c6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgxIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzRvNmM2LWU4MDIwYzlkLWY0NDUtNDk4Mi05Nzc4LTAwZDU4ZmYyYmUzMy5wbmciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PcgF3SRMTxwpky1zY5q6FEQTNsTdQucmrXhVVe3QP5Y',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg3eone-ee24bcbd-e4a4-424c-a301-c7cba77fbec2.png/v1/fit/w_375,h_281,q_70,strp/poof_s_killergarten_by_sronico_dg3eone-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTI1IiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzNlb25lLWVlMjRiY2JkLWU0YTQtNDI0Yy1hMzAxLWM3Y2JhNzdmYmVjMi5wbmciLCJ3aWR0aCI6Ijw9NzAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1QwsEq7o2BhGlra4TymizZQu2c5Apur8J9ffyXKhJ8o',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dfxi38n-1799f2e3-2109-4323-a614-cef9b1e48f44.png/v1/fit/w_375,h_281/poof_s_killergarten_by_sronico_dfxi38n-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZnhpMzhuLTE3OTlmMmUzLTIxMDktNDMyMy1hNjE0LWNlZjliMWU0OGY0NC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZtHZ1GuZVouDSNKOhKn4Ma4CJRCrwMCJhtS5FNmigSY',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg54gqu-ccd91b6d-41c2-4f29-b878-95e9d498f7ad.png/v1/fill/w_444,h_250/poof_s_killergarten_binded_fate_logo_by_sronico_dg54gqu-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzU0Z3F1LWNjZDkxYjZkLTQxYzItNGYyOS1iODc4LTk1ZTlkNDk4ZjdhZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.UZQ1Rj4zVpcKMiNrZo99lQwCv4HMKEaApaUeWApZiAE',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4xa14-573b7118-065d-4122-a115-50895b23aee2.png/v1/fit/w_375,h_333/poof_s_killergarten_fboy_art_by_sronico_dg4xa14-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzOCIsInBhdGgiOiJcL2ZcL2Y1MDRkZDI3LTU0ZDUtNDhjOC1iNjFlLTM2YTc4NTBhMDc1N1wvZGc0eGExNC01NzNiNzExOC0wNjVkLTQxMjItYTExNS01MDg5NWIyM2FlZTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Hz2beQQk1pG5KXJlvxS0MtPMmN2ZuHCOZ9AYLvqN0Y0',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4x9fu-4e1d81af-4fa5-46d5-bec9-34fc3601828b.png/v1/fill/w_622,h_350,q_70,strp/poof_s_killergarten_by_sronico_dg4x9fu-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzR4OWZ1LTRlMWQ4MWFmLTRmYTUtNDZkNS1iZWM5LTM0ZmMzNjAxODI4Yi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QU84xtb_oKCJrRcd1PP2eWdUbxq7YiqNYcvvbQPJg_I',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4o85t-df04b74c-b1dc-41c9-937f-e01c8334bb61.png/v1/fit/w_300,h_636,q_70,strp/poof_s_killergarten_sonia_art_by_sronico_dg4o85t-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM2IiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzRvODV0LWRmMDRiNzRjLWIxZGMtNDFjOS05MzdmLWUwMWM4MzM0YmI2MS5wbmciLCJ3aWR0aCI6Ijw9NjQ5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.rUEORARgHQQTRrUaiY5wzncWIm6soa22Yp0f6yacCMo',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg4o6c6-e8020c9d-f445-4982-9778-00d58ff2be33.png/v1/fill/w_617,h_350,q_70,strp/poof_s_killergarten_art_by_sronico_dg4o6c6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgxIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzRvNmM2LWU4MDIwYzlkLWY0NDUtNDk4Mi05Nzc4LTAwZDU4ZmYyYmUzMy5wbmciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PcgF3SRMTxwpky1zY5q6FEQTNsTdQucmrXhVVe3QP5Y',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dg3eone-ee24bcbd-e4a4-424c-a301-c7cba77fbec2.png/v1/fit/w_375,h_281,q_70,strp/poof_s_killergarten_by_sronico_dg3eone-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTI1IiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZzNlb25lLWVlMjRiY2JkLWU0YTQtNDI0Yy1hMzAxLWM3Y2JhNzdmYmVjMi5wbmciLCJ3aWR0aCI6Ijw9NzAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1QwsEq7o2BhGlra4TymizZQu2c5Apur8J9ffyXKhJ8o',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f504dd27-54d5-48c8-b61e-36a7850a0757/dfxi38n-1799f2e3-2109-4323-a614-cef9b1e48f44.png/v1/fit/w_375,h_281/poof_s_killergarten_by_sronico_dfxi38n-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvZjUwNGRkMjctNTRkNS00OGM4LWI2MWUtMzZhNzg1MGEwNzU3XC9kZnhpMzhuLTE3OTlmMmUzLTIxMDktNDMyMy1hNjE0LWNlZjliMWU0OGY0NC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZtHZ1GuZVouDSNKOhKn4Ma4CJRCrwMCJhtS5FNmigSY'
    ];
    const closeModal = (e: any) => {
        // console.log(1);
        setModal(null);
      }
      const getChildren = (e: any) => {
        //  setModal(e.target);
        let child;
      
            if(e.element === 'image'){
    
                child = <img style={{
                    transform: 'scale(1.5)',
                    border: '2px solid black',
                    boxShadow: '0 0 2px 2px white'
                }} src={e.img} />;
            }   
    
        if(child != undefined){
            setModal(child);
        }
     
        console.log(e);
      }
    return (
        <BodyWrapper overflow={true}>
            {modal && <Modal transparent={true} click={closeModal} visible={modal && true}>{modal}</Modal>}
          <Nevry bck={3} w={"95%"} h={"90vh"}>
        <div className={classes.container1}>
            <div>
            <ColorRect
              w={'25'}
              h={"4"}
              r={"50"}
              g={"200"}
              b={"255"}
              font={"2.5rem"}
            
            >
             Watch This!!
            </ColorRect>
            <div className={classes.link}>
                <a href='https://www.youtube.com/watch?v=fmQWMqSQb7Y&list=PL7hIGKQ90_vovhA4dltqknhIN2Ha20ZfQ' target='_blank'>
                    Poof's Killergarten Next Time</a>
            </div>
            <div className={classes.link}>
                <a href='https://www.youtube.com/watch?v=-bPkyF5KUIc&list=PLcAXQSQengx52ua67w1RiEFTwA0CiCKId' target='_blank'>
                    Poof's Killergarten Divided Fate</a>
            </div>
            <div className={classes.link}>
                <a href='https://www.youtube.com/watch?v=y7lifUOvm48&list=PL7hIGKQ90_vrGguUddjmw6rn7dSFFtvNH' target='_blank'>
                    Poof's Killergarten</a>
                    
            </div>
            <div className={classes.link}>
                <a href='https://www.youtube.com/watch?v=_sezx6djfAg' target='_blank'>
                   World of Vampirim</a>
                    
            </div>
            <br/>
            <ColorRect
              w={'30'}
              h={"4"}
              r={"50"}
              g={"200"}
              b={"255"}
              font={"2.5rem"}
            
            >
             Visit Social Media
            </ColorRect>
            <div className={classes.link}>
                <a href='https://www.youtube.com/@poofskillergarten' target='_blank'>
                   Youtube</a>
            </div>
            <div className={classes.link}>
                <a href='https://discord.com/invite/BkFsXxauc4' target='_blank'>
                   Discord</a>
            </div>

            <div className={`${classes.link}  ${classes['link--spec']}`}>
                <a href='https://www.patreon.com/user/membership?u=70891251' target='_blank'>
                   Become Patron!!</a>
            </div>

           
            </div>
       
        </div>
        <div className={classes.container2}>
        <ImageGallery click={getChildren} amnt={imgs.length} images={imgs}/>
        </div>

      </Nevry>
        </BodyWrapper>
    );
    }
    
    export default Index;