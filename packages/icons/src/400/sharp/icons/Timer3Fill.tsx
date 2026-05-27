import type { SVGProps } from 'react'

export default function Timer3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M330-200v-80h261v-160H372v-80h219v-160H330v-80h341v240l-40 42 40 38v240H330Z" />
    </svg>
  )
}
