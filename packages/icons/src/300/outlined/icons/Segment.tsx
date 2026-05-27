import type { SVGProps, JSX } from 'react'

export default function Segment({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M380-254.62V-300h440v45.38H380Zm0-202.69v-45.38h440v45.38H380ZM140-660v-45.38h680V-660H140Z" />
    </svg>
  )
}
