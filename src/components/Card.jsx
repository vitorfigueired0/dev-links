import React from "react";
import photo from '../images/photo.jpeg';
import { FaGithub, FaInstagram } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";

import { CardLink } from "./CardLink";

export const Card = () => {
  return (
    <div className='bg-slate-200 h-auto w-full max-w-md rounded-3xl flex flex-col pb-8 pt-10 px-10'>
      <div className='w-full'>
        <img src={photo} alt='me' className='h-[130px] rounded-full block mx-auto border-avatarBorder border-4 shadow-xl'/>
        <div className='text-center'>
          <h1 className='mt-6 mb-4 text-3xl'>Vitor Figueiredo</h1>
          <p className='mb-8'>Dev fullstack (React, NodeJS, Java)</p>
        </div>

        <CardLink
          icon={FaGithub}
          href='https://github.com/vitorfigueired0'
          text='Github'  
        />

        <CardLink
          icon={FaInstagram}
          href='https://www.instagram.com/vitor.figueired0/'
          text='Instagram'  
        />

        <CardLink
          icon={TbWorldWww}
          href='https://portifolio-vitorfigueiredo.vercel.app/'
          text='Portifólio'  
        />

        <CardLink
          icon={MdMailOutline}
          href='mailto:vittor.figueiredo17@gmail.com'
          text='E-mail'  
        />
      </div>
    </div>
  );
}
