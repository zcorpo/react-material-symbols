import type { SVGProps, JSX } from 'react'

export default function KeyboardBackspace({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M358-218 95-481l263-263 67 67-148 149h589v94H277l148 149-67 67Z" />
    </svg>
  )
}
