import type { SVGProps } from 'react'

export default function SubdirectoryArrowLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M395.54-140 180-357.77l214.92-214.92 32.62 32.61-161.23 160.85h428.3V-780H740v446.15H267.31l160.84 161.23L395.54-140Z" />
    </svg>
  )
}
