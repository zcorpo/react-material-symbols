import type { SVGProps, JSX } from 'react'

export default function ScreenshotFrame2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M822-572v-130H692v-84h214v214h-84Zm-767 0v-214h213v84H138v130H55Zm637 397v-83h130v-130h84v213H692Zm-637 0v-213h83v130h130v83H55Z" />
    </svg>
  )
}
