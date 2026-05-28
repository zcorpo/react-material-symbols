import type { SVGProps, JSX } from 'react'

export default function LiveTv({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m401.46-381.54 217-138.46-217-138.46v276.92ZM364.62-160v-80H120v-560h720v560H595.38v80H364.62ZM150.77-270.77h658.46v-498.46H150.77v498.46Zm0 0v-498.46 498.46Z" />
    </svg>
  )
}
