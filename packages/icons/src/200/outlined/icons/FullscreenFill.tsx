import type { SVGProps, JSX } from 'react'

export default function FullscreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-173.77h30.77v143h143V-160H160Zm467 0v-30.77h143v-143h30.77V-160H627ZM160-626.23V-800h173.77v30.77h-143v143H160Zm610 0v-143H627V-800h173.77v173.77H770Z" />
    </svg>
  )
}
