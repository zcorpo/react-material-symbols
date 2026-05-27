import type { SVGProps } from 'react'

export default function MarkunreadMailboxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-74.02v-553.54H240v-258.66h302.63v163.59H300V-417h60v-210.63h526.22v553.61H74.02Z" />
    </svg>
  )
}
