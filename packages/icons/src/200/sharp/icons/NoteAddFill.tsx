import type { SVGProps } from 'react'

export default function NoteAddFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M464.62-257.08h30.76v-124.38H620v-30.77H495.38v-124.62h-30.76v124.62H340v30.77h124.62v124.38ZM200-120v-720h389.46L760-669.46V-120H200Zm374.08-535.54h155.15L574.08-809.23v153.69Z" />
    </svg>
  )
}
