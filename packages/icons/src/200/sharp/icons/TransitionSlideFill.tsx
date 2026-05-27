import type { SVGProps } from 'react'

export default function TransitionSlideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-200v-560h201.54v560H80Zm296.92 0v-560H880v560H376.92Z" />
    </svg>
  )
}
