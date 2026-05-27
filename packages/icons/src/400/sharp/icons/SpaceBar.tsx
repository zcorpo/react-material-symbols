import type { SVGProps } from 'react'

export default function SpaceBar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-360v-240h60v180h520v-180h60v240H160Z" />
    </svg>
  )
}
