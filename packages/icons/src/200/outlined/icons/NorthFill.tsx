import type { SVGProps, JSX } from 'react'

export default function NorthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M464.62-120v-663.69l-217.24 218-21.23-21.23L480-840.77l253.85 253.85-21.23 21.23-217.24-217.23V-120h-30.76Z" />
    </svg>
  )
}
