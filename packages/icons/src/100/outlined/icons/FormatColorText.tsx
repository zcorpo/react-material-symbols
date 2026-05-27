import type { SVGProps, JSX } from 'react'

export default function FormatColorText({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132 0v-132h696V0H132Zm126-280 215-508h14l215 508h-28l-62-148H343l-61 148h-24Zm94-169h252L482-745h-6L352-449Z" />
    </svg>
  )
}
