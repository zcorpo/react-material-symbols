import type { SVGProps } from 'react'

export default function KeyboardOptionKey({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m591.35-190.39-277-500H105.87v-79.22h253.78l277 500H854.7v79.22H591.35Zm9.04-500v-79.22H854.7v79.22H600.39Z" />
    </svg>
  )
}
