import type { SVGProps, JSX } from 'react'

export default function ArrowBackIosNew({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M651.15-93.85 265-480l386.15-386.15 45.62 46.61L357.23-480l339.54 339.54-45.62 46.61Z" />
    </svg>
  )
}
