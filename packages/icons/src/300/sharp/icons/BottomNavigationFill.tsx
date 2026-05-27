import type { SVGProps } from 'react'

export default function BottomNavigationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-680h680v680H140Zm45.39-197.69h589.22v-436.92H185.39v436.92Z" />
    </svg>
  )
}
