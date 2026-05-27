import type { SVGProps } from 'react'

export default function AutoReadPauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M396.92-420h30.77v-280h-30.77v280Zm135.39 0h30.77v-280h-30.77v280ZM120-156.92V-840h720v560H243.08L120-156.92Z" />
    </svg>
  )
}
