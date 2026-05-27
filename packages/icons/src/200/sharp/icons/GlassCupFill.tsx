import type { SVGProps, JSX } from 'react'

export default function GlassCupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M241.08-120 160-840h640l-80.31 720H241.08Zm11.15-175.62h456.46l56.62-513.61H193.92l58.31 513.61Z" />
    </svg>
  )
}
