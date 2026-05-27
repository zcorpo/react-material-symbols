import type { SVGProps, JSX } from 'react'

export default function ViewDay({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-184.62V-230h680v45.38H140Zm0-163.3v-264.16h680v264.16H140Zm45.39-45.39h589.22v-173.38H185.39v173.38ZM140-730v-45.38h680V-730H140Zm45.39 336.69v-173.38 173.38Z" />
    </svg>
  )
}
