import type { SVGProps, JSX } from 'react'

export default function Equal({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-307.31v-85.38h600v85.38H180Zm0-260v-85.38h600v85.38H180Z" />
    </svg>
  )
}
