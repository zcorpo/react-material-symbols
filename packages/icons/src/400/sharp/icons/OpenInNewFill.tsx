import type { SVGProps, JSX } from 'react'

export default function OpenInNewFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h339v60H180v600h600v-279h60v339H120Zm262-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z" />
    </svg>
  )
}
