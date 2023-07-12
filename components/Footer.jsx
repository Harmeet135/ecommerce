import React from 'react';
import { MdDomain} from 'react-icons/md';
import { BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="text-center mt-20 py-8 font-bold flex flex-col items-center gap-2 justify-center">
    <p>All rights reserved</p>

    <p className="flex gap-2">
      <a href="https://github.com/Harmeet135/Electronic-mart" target="_blank" rel="noopener noreferrer">
        <BsGithub className="text-3xl" />
      </a>
      <a href="https://github.com/Harmeet135/Electronic-mart" target="_blank" rel="noopener noreferrer">
        <MdDomain className="text-3xl" />
      </a>
    </p>
  </div>
  )
}

export default Footer