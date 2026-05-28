import type { SVGProps, JSX } from 'react'

export default function RectangleAddFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440.39-326.61h79.22v-113.78h113.78v-79.22H519.61v-113.78h-79.22v113.78H326.61v79.22h113.78v113.78ZM65.87-145.87V-814.7H894.7v668.83H65.87Z" />
    </svg>
  )
}
