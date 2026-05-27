import type { SVGProps } from 'react'

export default function Inventory2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-120v-513.85h-40V-840h720v206.15h-40V-120H160Zm-9.23-544.62h658.46v-144.61H150.77v144.61Zm224.61 210h209.24V-480H375.38v25.38Z" />
    </svg>
  )
}
