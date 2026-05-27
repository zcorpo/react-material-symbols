import type { SVGProps, JSX } from 'react'

export default function FloorLampFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M434-201v-319H167l121-390h387l120 390H528v319h-94ZM314-46v-95h334v95H314Z" />
    </svg>
  )
}
