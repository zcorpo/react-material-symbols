import type { SVGProps, JSX } from 'react'

export default function StackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M259.76-386.22v66.46H73.78v-566.46h566.46v185.74h-66.46v-119.28H140.24v433.54h119.52Zm60 312.2v-566.46h566.46v566.46H319.76Z" />
    </svg>
  )
}
