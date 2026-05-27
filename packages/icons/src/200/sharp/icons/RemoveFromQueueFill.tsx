import type { SVGProps, JSX } from 'react'

export default function RemoveFromQueueFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M340-506.08h280v-30.77H340v30.77ZM364.62-160v-80H120v-560h720v560H595.38v80H364.62Z" />
    </svg>
  )
}
