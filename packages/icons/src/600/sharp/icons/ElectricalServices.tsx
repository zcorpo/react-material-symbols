import type { SVGProps, JSX } from 'react'

export default function ElectricalServices({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M724.61-360v-66.22h138.57V-360H724.61Zm0 166.22V-260h138.57v66.22H724.61Zm-243.09 43.39v-80h-96.13v-159.22h96.13v-80h213.09v319.22H481.52Zm-390.91-120v-329.22h295v-130.78h-255v-79.22h334.78v289.22h-295v170.78h185v79.22H90.61Z" />
    </svg>
  )
}
