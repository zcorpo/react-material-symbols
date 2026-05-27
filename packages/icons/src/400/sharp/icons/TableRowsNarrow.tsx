import type { SVGProps } from 'react'

export default function TableRowsNarrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-345h600v-105H180v105Zm0-165h600v-105H180v105Zm0-165h600v-105H180v105Zm-60 555v-720h720v720H120Zm60-60h600v-105H180v105Z" />
    </svg>
  )
}
