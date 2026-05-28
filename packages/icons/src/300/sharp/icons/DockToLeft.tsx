import type { SVGProps, JSX } from 'react'

export default function DockToLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M634.92-185.39h139.69v-589.22H634.92v589.22Zm-449.53 0h404.15v-589.22H185.39v589.22Zm449.53 0h139.69-139.69ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
