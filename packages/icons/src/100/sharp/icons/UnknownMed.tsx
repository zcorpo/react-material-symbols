import type { SVGProps } from 'react'

export default function UnknownMed({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-469v-62h308v62H132Zm387 0v-62h308v62H519Z" />
    </svg>
  )
}
