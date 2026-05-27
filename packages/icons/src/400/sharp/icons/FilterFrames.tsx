import type { SVGProps } from 'react'

export default function FilterFrames({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-720h240l160-160 160 160h240v720H80Zm60-60h680v-600H140v600Zm100-100v-400h480v400H240Zm60-60h360v-280H300v280Zm180-139Z" />
    </svg>
  )
}
