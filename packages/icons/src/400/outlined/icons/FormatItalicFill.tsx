import type { SVGProps } from 'react'

export default function FormatItalicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M224-199v-80h134l139-409H338v-80h380v80H584L445-279h159v80H224Z" />
    </svg>
  )
}
