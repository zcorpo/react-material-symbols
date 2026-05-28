import type { SVGProps, JSX } from 'react'

export default function Crop32({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-260v-440h680v440H140Zm45.39-45.39h589.22v-349.22H185.39v349.22Zm0 0v-349.22 349.22Z" />
    </svg>
  )
}
