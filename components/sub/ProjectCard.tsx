import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  slug: string;
}

const ProjectCard = ({ src, title, description, slug }: Props) => {
  return (
    <Link 
      href={`/projects/${slug}`}
      className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-30 cursor-pointer block hover:border-[#7042f8]/70 hover:shadow-[0_0_20px_rgba(112,66,248,0.15)] transition-all duration-300 hover:scale-[1.01]'
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
      />

      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
