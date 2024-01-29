/**
 * Component that checks if the first <p> element's text overflows its container.
 * In case of overflow the tooltip is displayed on text hover.
 * @component
 * @example
 * <TextOverflowChecker>
 *   <p>This is a long text that may or may not overflow the container.</p>
 * </TextOverflowChecker>
 */

import { useEffect, useRef, useState, ReactNode } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import styles from './TextOverflowChecker.module.css'

interface TextOverflowCheckerProps {
  children?: ReactNode
}

const TextOverflowChecker = ({ children }: TextOverflowCheckerProps) => {
  const [isOverflowing, setIsOverflowing] = useState(false)
  const textRef = useRef<any>(null)

  useEffect(() => {
    const element = textRef.current
    if (element) {
        if (element) {
          element.style.overflow = 'hidden'
          element.style.textOverflow = 'ellipsis'
            setIsOverflowing(element.scrollHeight > element.clientHeight)
        }
    }
  }, []);

  if (isOverflowing) {
    return (
    <div className={styles.TextOverflowChecker}>
      <TooltipProvider>
          <Tooltip open={undefined}>
          <TooltipTrigger asChild>
              <p className="text-sm lg:text-base lg:h-[72px] line-clamp-3 mb-3">{children}</p>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={0} className='TooltipContent'>
              <p>{children}</p>
          </TooltipContent>
          </Tooltip>
      </TooltipProvider>
    </div>
    )
  }

  return (
    <>
      <p ref={textRef} className="text-sm lg:text-base lg:h-[72px] line-clamp-3 mb-3">{children}</p>
    </>
  )
}

export default TextOverflowChecker