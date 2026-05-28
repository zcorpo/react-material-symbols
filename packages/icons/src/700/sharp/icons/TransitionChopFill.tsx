import type { SVGProps, JSX } from 'react'

export default function TransitionChopFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm212-94h544v-502H631l99 383-463 119Z" />
    </svg>
  )
}
