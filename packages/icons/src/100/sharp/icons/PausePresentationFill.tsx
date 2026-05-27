import type { SVGProps } from 'react'

export default function PausePresentationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M406-346h22v-268h-22v268Zm126 0h22v-268h-22v268ZM132-212v-536h696v536H132Z" />
    </svg>
  )
}
