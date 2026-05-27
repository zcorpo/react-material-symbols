import type { SVGProps, JSX } from 'react'

export default function AnimatedImagesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m510-456 212-141-212-141v282ZM118-29 32-696l159-17v524h607l13 77-693 83Zm133-220v-672h673v672H251Z" />
    </svg>
  )
}
