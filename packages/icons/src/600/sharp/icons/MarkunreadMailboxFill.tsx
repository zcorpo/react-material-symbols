import type { SVGProps, JSX } from 'react'

export default function MarkunreadMailboxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-65.87v-565.18H240V-894.7h306.22v168.48H300V-417h60v-214.22h534.7v565.35H65.87Z" />
    </svg>
  )
}
