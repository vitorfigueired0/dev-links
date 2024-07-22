import React from "react";
import photo from '../images/photo.jpeg';
import { FaGithub, FaInstagram, FaReact, FaNodeJs, FaJava, FaDocker, FaLinux, FaLinkedin } from "react-icons/fa";
import { SiNestjs, SiSpring, SiMongodb, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { CardLink } from "./CardLink";

export const Card = () => {

  const techIconsSize = '2em'

  return (
    <div className='bg-slate-200 h-auto w-full max-w-md rounded-3xl flex flex-col pb-8 pt-10 px-10'>
      <div className='w-full'>
        <img src={photo} alt='me' className='h-[130px] rounded-full block mx-auto border-avatarBorder border-4 shadow-xl'/>
        <div className='text-center'>
          <h1 className='mt-6 mb-2 text-3xl'>Vitor Figueiredo</h1>
          <p className='mb-2'>Desenvolvedor Fullstack</p>

          <div className='flex gap-4 items-center mb-4'>
            <IoLogoJavascript size='2.2em' title='Javascript'/>
            <SiTypescript size={techIconsSize} title='Typescript'/>
            <FaNodeJs size={techIconsSize} title='Node.JS'/>
            <FaJava size={techIconsSize} title='Java'/>
            <FaReact size={techIconsSize} title='React'/>
            <SiNestjs size={techIconsSize} title='Nest.JS'/>
            <SiSpring size={techIconsSize} title='Spring boot'/>
            <FaDocker size={techIconsSize} title='Docker'/>
            <FaLinux size={techIconsSize} title='Linux'/>
            <SiMongodb size={techIconsSize} title='Mongo DB'/>
            <BiLogoPostgresql size={techIconsSize} title='Postgres SQL'/>
            <GrMysql size={techIconsSize} title='MySQL'/>
          </div>
        </div>

        <CardLink
          icon={FaGithub}
          href='https://github.com/vitorfigueired0'
          text='Github'  
        />

        <CardLink
          icon={FaLinkedin}
          href='https://www.linkedin.com/in/vitorfig/'
          text='LinkedIn'  
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
