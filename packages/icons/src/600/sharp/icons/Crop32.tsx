import type { SVGProps, JSX } from 'react'

export default function Crop32({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-225.87V-734.7H854.7v508.83H105.87Zm79.22-79.22h589.82v-349.82H185.09v349.82Zm0 0v-349.82 349.82Z" />
    </svg>
  )
}
