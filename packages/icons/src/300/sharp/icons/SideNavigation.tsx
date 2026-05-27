import type { SVGProps, JSX } from 'react'

export default function SideNavigation({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-680h680v680H140Zm340-45.39h294.61v-589.22H480v589.22Z" />
    </svg>
  )
}
