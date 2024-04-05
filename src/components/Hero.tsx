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
            <div className="ml-2 p-4">
                <h1 className='uppercase text-primary font-extrabold font-2xl text-base'> Karate Course </h1>
                <div className="md:flex justify-center">
                   <div className="w-1/2 h[200px] md:ml-5">
                          <img className="rounded-md" src="/profile.avif" alt="karate" />
                   </div>
                   <div className="h[260px] px-4">
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