import type { SVGProps, JSX } from 'react'

export default function WebStories({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M692-175v-611h42v611h-42Zm-502 55v-720h468v720H190Zm578-109v-502h22v502h-22Zm-556 87h424v-676H212v676Zm0-676v676-676Z" />
    </svg>
  )
}
