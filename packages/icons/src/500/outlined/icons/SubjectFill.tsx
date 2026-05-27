import type { SVGProps } from 'react'

export default function SubjectFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-186.85v-66.45H551.5v66.45H154.02Zm0-172.98v-66.45h652.2v66.45h-652.2Zm0-172.21v-66.46h652.2v66.46h-652.2Zm0-172.98v-68.37h652.2v68.37h-652.2Z" />
    </svg>
  )
}
