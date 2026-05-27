import type { SVGProps } from 'react'

export default function Looks3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M358.78-277h242.44v-406H358.78v66.22H535V-512h-93.22v60H535v108.78H358.78V-277ZM105.87-105.87V-854.7H854.7v748.83H105.87Zm79.22-79.22h589.82v-589.82H185.09v589.82Zm0 0v-589.82 589.82Z" />
    </svg>
  )
}
