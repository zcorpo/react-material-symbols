import type { SVGProps, JSX } from 'react'

export default function StarRateFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m208-82 102-335L37-613h335.6L480-966l107 353h337L649.74-417.23 753.44-82 481.22-289.34 208-82Z" />
    </svg>
  )
}
