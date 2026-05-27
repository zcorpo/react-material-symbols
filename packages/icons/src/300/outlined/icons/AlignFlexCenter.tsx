import type { SVGProps, JSX } from 'react'

export default function AlignFlexCenter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M468.46-100v-337.31H122.69v-85.38h345.77V-860h45.39v337.31h323.46v85.38H513.85V-100h-45.39Z" />
    </svg>
  )
}
