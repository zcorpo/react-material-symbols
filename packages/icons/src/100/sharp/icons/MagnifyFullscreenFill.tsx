import type { SVGProps, JSX } from 'react'

export default function MagnifyFullscreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm457-204h22v-93h93v-22h-93v-93h-22v93h-93v22h93v93Z" />
    </svg>
  )
}
