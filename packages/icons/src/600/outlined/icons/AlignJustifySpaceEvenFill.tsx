import type { SVGProps } from 'react'

export default function AlignJustifySpaceEvenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M814.91-65.87V-894.7h79.79v828.83h-79.79Zm-749.04 0V-894.7h79.22v828.83H65.87Zm494.52-214.52v-399.22h119.22v399.22H560.39Zm-280 0v-399.22h119.22v399.22H280.39Z" />
    </svg>
  )
}
