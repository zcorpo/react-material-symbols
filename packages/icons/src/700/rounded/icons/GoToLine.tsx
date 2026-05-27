import type { SVGProps, JSX } from 'react'

export default function GoToLine({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M432.5-702.62q-19.5-19.62-19.5-47.5t19.62-47.38q19.62-19.5 47.5-19.5t47.38 19.62q19.5 19.62 19.5 47.5t-19.62 47.38q-19.62 19.5-47.5 19.5t-47.38-19.62Zm0 540q-19.5-19.62-19.5-47.5t19.62-47.38q19.62-19.5 47.5-19.5t47.38 19.62q19.5 19.62 19.5 47.5t-19.62 47.38q-19.62 19.5-47.5 19.5t-47.38-19.62Z" />
    </svg>
  )
}
