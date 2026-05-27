import type { SVGProps } from 'react'

export default function StylusPencil({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m212-172 18-47q6-15 18-24t29-9h406q17 0 29 9t18 24l18 47H212Zm78-186 170-430h39l171 430H290Zm32-22h315L480-777 322-380Zm0 0h315-315Z" />
    </svg>
  )
}
