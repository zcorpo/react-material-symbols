import type { SVGProps } from 'react'

export default function TurnSlightLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M533.78-145.87v-306.48l-227-226.43v127h-79.22V-814.7h262.35v79.79h-127L613-484.26v338.39h-79.22Z" />
    </svg>
  )
}
