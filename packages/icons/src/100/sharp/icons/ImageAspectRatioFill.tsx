import type { SVGProps } from 'react'

export default function ImageAspectRatioFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-486h54v-54h-54v54Zm153 0h54v-54h-54v54Zm153 155h54v-54h-54v54Zm0-155h54v-54h-54v54ZM132-212v-536h696v536H132Z" />
    </svg>
  )
}
