import type { SVGProps, JSX } from 'react'

export default function PageFooter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-60h720v60H120Zm0-160v-560h720v560H120Zm60-60h600v-440H180v440Zm0 0v-440 440Z" />
    </svg>
  )
}
