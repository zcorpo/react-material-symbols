import type { SVGProps, JSX } from 'react'

export default function WysiwygFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-680h680v680H140Zm45.39-45.39h589.22v-509.22H185.39v509.22ZM280-497.31v-45.38h392.69v45.38H280Zm0 160v-45.38h232.69v45.38H280Z" />
    </svg>
  )
}
