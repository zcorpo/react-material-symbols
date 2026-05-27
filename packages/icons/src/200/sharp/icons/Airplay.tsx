import type { SVGProps, JSX } from 'react'

export default function Airplay({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M312.23-160 480-327.54 647.54-160H312.23ZM120-240v-560h720v560H689.23v-30.77h120v-498.46H150.77v498.46h119.77V-240H120Zm360-264.62Z" />
    </svg>
  )
}
