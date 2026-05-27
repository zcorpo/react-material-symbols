import type { SVGProps } from 'react'

export default function FilterArrowRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M368-160v-282L89-800h701L511-442v282H368Zm402-46-42-42 77-77H616v-60h189l-77-77 42-43 150 150-150 149ZM439-448l227-292H212l227 292Z" />
    </svg>
  )
}
