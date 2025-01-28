import React from 'react'
import Link from 'next/link'
import { SiGithub, SiYoutube } from 'react-icons/si'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end items-center"> 
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://www.youtube.com/@PATOOWORLD" target="_blank">
            <SiYoutube size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50 mx-2" 
        >
          <Link href="https://github.com/patooworld" target="_blank">
            <SiGithub size={18} />
          </Link>
        </Button>
      </div>
      <div className="text-xs text-muted-foreground mt-2"> 
        GEMINI 1.5 Pro and 2.0 POWERED. 
        <Link href="https://www.linkedin.com/company/patooworld/" target="_blank">
          <a className="flex items-center hover:text-primary">
            <FaLinkedin className="mr-1" /> 
            LinkedIn
          </a>
        </Link>
        <Link href="https://www.facebook.com/patooworld/" target="_blank">
          <a className="flex items-center ml-2 hover:text-primary"> 
            <FaFacebook className="mr-1" /> 
            Facebook
          </a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
