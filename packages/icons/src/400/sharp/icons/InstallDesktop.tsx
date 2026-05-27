import type { SVGProps } from 'react'

export default function InstallDesktop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M330-120v-80H80v-640h420v60H140v520h680v-140h60v200H630v80H330Zm350-294L494-600l42-42 114 114v-312h60v312l114-114 42 42-186 186Z" />
    </svg>
  )
}
