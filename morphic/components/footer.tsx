import React from 'react'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiX } from 'react-icons/si'
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
          <Link href="https://discord.gg/zRxaseCuGq" target="_blank">
            <SiDiscord size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50 mx-2" 
        >
          <Link href="https://x.com/patooworld" target="_blank">
            <SiX size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://github.com/patooworld" target="_blank">
            <SiGithub size={18} />
          </Link>
        </Button>
      </div>
      <div className="text-xs text-muted-foreground mt-2"> 
        {/* Added a new div for the copyright information */}
        GEMINI 1.5 PRO and 2.0 POWERED. 
        <Link href="https://linkedin.com/company/patooworld" target="_blank">
          <a className="hover:text-primary">LINKEDIN</a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
