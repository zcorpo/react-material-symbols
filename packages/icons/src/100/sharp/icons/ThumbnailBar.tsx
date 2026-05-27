import type { SVGProps, JSX } from 'react'

export default function ThumbnailBar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm216-22h458v-492H348v492Zm-22 0v-492H154v492h172Zm-172 0v-492 492Zm172 0h22-22Zm0-492h22-22Z" />
    </svg>
  )
}
