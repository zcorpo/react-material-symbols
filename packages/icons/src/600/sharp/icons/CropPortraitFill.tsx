import type { SVGProps } from 'react'

export default function CropPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-65.87V-894.7H814.7v828.83H145.87Z" />
    </svg>
  )
}
