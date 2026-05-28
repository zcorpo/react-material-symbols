import type { SVGProps, JSX } from 'react'

export default function WineBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-80v-94h153v-166q-112-18-172.5-92.5T200-600v-281h561v281q0 93-61 167.5T527-340v166h154v94H280Zm14-567h372v-139H294v139Z" />
    </svg>
  )
}
