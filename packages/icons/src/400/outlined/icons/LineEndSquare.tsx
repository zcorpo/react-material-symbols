import type { SVGProps } from 'react'

export default function LineEndSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M500-320h320v-320H500v320Zm-60 60v-190H80v-60h360v-190h440v440H440Zm220-220Z" />
    </svg>
  )
}
