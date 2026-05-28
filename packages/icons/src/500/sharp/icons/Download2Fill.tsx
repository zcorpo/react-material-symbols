import type { SVGProps, JSX } from 'react'

export default function Download2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-74.02v-68.13h652.2v68.13h-652.2ZM479-242.15 185.85-616.98h165.02v-269.24h256.5v269.24h166.02L479-242.15Z" />
    </svg>
  )
}
