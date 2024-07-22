import React from "react";

export const CardLink = ({ icon: Icon, href, text }) => {
  return (
    <a href={href} className='block w-full' target='_blank' rel='noopener noreferrer'>
      <div className='border-blue-950 border-2 py-2 px-4 mb-3 flex items-center h-[40px] md:h-[50px] shadow-lg'>
        <Icon size={'2em'} className='mr-4 md:mr-8'/>
        <span className='block text-lg md:text-xl w-full'>{text}</span>
      </div>
    </a>
  );
}
