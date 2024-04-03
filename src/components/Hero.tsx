import React from 'react';
import Paragraph from '@/components/Paragraph';

const Hero = () => {
    const paragraphText = `SHITO-RYU KARATE
    non, amet, nibh ullamcorper ex. laoreet amet, commodo fringilla leo. at, scelerisque tincidunt enim. facilisis amet, urna. odio odio non urna. nibh id eu nisi . Morbi odio nisl. nulla, vel dui. nisi sit orci quis efficitur. tincidunt quis nisl. sed Sed ex est. varius Nam quis eget lorem. id Donec libero, est. eget non .
    non, amet, nibh ullamcorper ex. laoreet amet, commodo fringilla leo. at, scelerisque tincidunt enim. facilisis amet, urna. odio odio non urna. nibh id eu nisi . Morbi odio nisl. nulla, vel dui. nisi sit orci quis efficitur. tincidunt quis nisl. sed Sed ex est. varius Nam quis eget lorem. id Donec libero, est. eget non .
    More Info` ;
      const maxLength = 400 ;
    return (
        <>
            <div className="course">
                <h1 className='uppercase text-primary font-extrabold font-2xl text-base'> Karate Course </h1>
                <div className="md:flex justify-center">
                   <div className="max-w-[403] h[260px]">
                          <img className="rounded-md" src="/profile.avif" alt="karate" />
                   </div>
                   <div className="max-w-[600px] h[260px] px-4">
                    <h1 className='uppercase text-primary font-extrabold '> Sito-ryu karate  </h1>
                    <div className=''>
                     <Paragraph text={paragraphText} maxLength={maxLength} />
                </div>
                 </div>
                </div>
            </div>
            
        </>
    );
};

export default Hero;