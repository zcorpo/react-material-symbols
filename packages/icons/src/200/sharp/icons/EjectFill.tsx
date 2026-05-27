import type { SVGProps, JSX } from 'react'

export default function EjectFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M246.15-226.15v-27.7h467.7v27.7h-467.7Zm4.39-144.31L480-713.85l230.23 343.39H250.54Z" />
    </svg>
  )
}
