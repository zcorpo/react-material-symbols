import type { SVGProps, JSX } from 'react'

export default function AddCommentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M464.62-420h30.76v-124.62H620v-30.76H495.38V-700h-30.76v124.62H340v30.76h124.62V-420ZM120-156.92V-840h720v560H243.08L120-156.92Z" />
    </svg>
  )
}
