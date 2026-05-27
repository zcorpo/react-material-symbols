import type { SVGProps } from 'react'

export default function MarkunreadMailboxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-55v-580.7h185V-906h311v175H300v314h60v-219h546v581H55Z" />
    </svg>
  )
}
