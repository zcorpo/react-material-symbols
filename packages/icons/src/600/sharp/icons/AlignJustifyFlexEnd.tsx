import type { SVGProps } from 'react'

export default function AlignJustifyFlexEnd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M814.91-65.87V-894.7h79.79v828.83h-79.79ZM560.39-280.39v-399.22h119.22v399.22H560.39Zm-240 0v-399.22h119.22v399.22H320.39Z" />
    </svg>
  )
}
