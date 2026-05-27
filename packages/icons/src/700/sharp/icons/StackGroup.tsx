import type { SVGProps } from 'react'

export default function StackGroup({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M319-55v-264H54v-587h587v264h265v587H319Zm87-87h413v-413H554v-264H141v413h265v264Zm74-338Z" />
    </svg>
  )
}
