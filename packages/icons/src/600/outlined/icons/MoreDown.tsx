import type { SVGProps } from 'react'

export default function MoreDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M187-187v-459.22h79.22v380h380V-187H187Zm206.78-206.78V-853H473v380h380v79.22H393.78Z" />
    </svg>
  )
}
