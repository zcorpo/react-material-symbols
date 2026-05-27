import type { SVGProps } from 'react'

export default function TransitionChop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm60-116 495-129-86-335H140v464Zm23 56h657v-520H611l98 379-546 141Zm-23-520Z" />
    </svg>
  )
}
