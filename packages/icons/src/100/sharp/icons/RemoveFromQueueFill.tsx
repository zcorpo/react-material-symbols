import type { SVGProps, JSX } from 'react'

export default function RemoveFromQueueFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M346-510h268v-22H346v22Zm29 338v-80H132v-536h696v536H585v80H375Z" />
    </svg>
  )
}
