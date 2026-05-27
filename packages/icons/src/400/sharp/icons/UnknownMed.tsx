import type { SVGProps } from 'react'

export default function UnknownMed({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-450v-100h360v100H80Zm440 0v-100h360v100H520Z" />
    </svg>
  )
}
