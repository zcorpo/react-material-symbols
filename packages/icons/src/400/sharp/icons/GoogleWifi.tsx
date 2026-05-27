import type { SVGProps, JSX } from 'react'

export default function GoogleWifi({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M164-540h632l-12-200H176l-12 200Zm-4 60-15 230h670l-15-230H160Zm38 320-11-30H81l39-610h720l39 610H773l-11 30H198Z" />
    </svg>
  )
}
