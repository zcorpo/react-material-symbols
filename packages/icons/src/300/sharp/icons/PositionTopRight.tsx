import type { SVGProps, JSX } from 'react'

export default function PositionTopRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M375-593h340v-78.08H375V-593ZM140-140v-680h680v680H140Zm45.39-45.39h589.22v-589.22H185.39v589.22Zm0-589.22v589.22-589.22Z" />
    </svg>
  )
}
