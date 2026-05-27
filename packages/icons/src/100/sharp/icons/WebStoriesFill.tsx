import type { SVGProps, JSX } from 'react'

export default function WebStoriesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M692-175v-611h42v611h-42Zm-502 55v-720h468v720H190Zm578-109v-502h22v502h-22Z" />
    </svg>
  )
}
