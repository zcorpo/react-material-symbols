import type { SVGProps, JSX } from 'react'

export default function HorizontalRule({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M223-469q-4.68 0-7.84-3.23t-3.16-8q0-4.77 3.16-7.77t7.84-3h514q4.67 0 7.84 3.23 3.16 3.23 3.16 8t-3.16 7.77q-3.17 3-7.84 3H223Z" />
    </svg>
  )
}
