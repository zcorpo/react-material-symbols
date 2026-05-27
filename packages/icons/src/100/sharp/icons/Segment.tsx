import type { SVGProps } from 'react'

export default function Segment({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M412-278v-22h376v22H412Zm0-191v-22h376v22H412ZM172-660v-22h616v22H172Z" />
    </svg>
  )
}
