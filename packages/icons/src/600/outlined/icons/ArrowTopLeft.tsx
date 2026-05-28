import type { SVGProps, JSX } from 'react'

export default function ArrowTopLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M694.91-145.87v-419.52H297.18l152.39 152.96-57.14 56.56L145.87-603 394-854.7l56.57 56.57-152.39 153.52H774.7v498.74h-79.79Z" />
    </svg>
  )
}
