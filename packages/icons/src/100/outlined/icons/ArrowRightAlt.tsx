import type { SVGProps } from 'react'

export default function ArrowRightAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m544-277-16-15 178-178H212v-22h494L528-670l16-15 204 204-204 204Z" />
    </svg>
  )
}
