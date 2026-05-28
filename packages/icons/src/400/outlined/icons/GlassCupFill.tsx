import type { SVGProps, JSX } from 'react'

export default function GlassCupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M262-80q-23 0-40.5-15T202-133l-82-747h720l-82 747q-2 23-19.5 38T698-80H262Zm-19-231h474l56-509H187l56 509Z" />
    </svg>
  )
}
