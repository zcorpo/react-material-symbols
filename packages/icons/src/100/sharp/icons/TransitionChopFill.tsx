import type { SVGProps } from 'react'

export default function TransitionChopFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm14-22h660v-492H595l91 350-540 142Z" />
    </svg>
  )
}
