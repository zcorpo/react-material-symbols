import type { SVGProps, JSX } from 'react'

export default function ProcessChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M121.91-221.5 61.5-252.33 308.33-738.5l60.17 30.59L121.91-221.5Zm264 0-60.41-30.83L572.33-738.5l60.17 30.59L385.91-221.5Zm264 0-60.41-30.83L836.33-738.5l60.17 30.59L649.91-221.5Z" />
    </svg>
  )
}
