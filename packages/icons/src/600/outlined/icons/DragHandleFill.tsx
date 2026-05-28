import type { SVGProps, JSX } from 'react'

export default function DragHandleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-370.78V-450H814.7v79.22H145.87Zm0-139.22v-79.78H814.7V-510H145.87Z" />
    </svg>
  )
}
