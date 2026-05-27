import type { SVGProps } from 'react'

export default function Speed17xFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M226-277v-71h72v71h-72Zm-133 0v-335H10v-71h154v406H93Zm518-3 111-208-104-192h91l64 120 62-120h91L823-488l112 208h-90l-73-135-71 135h-90Zm-228 2 92-334H312v-71h244v66l-92 339h-81Z" />
    </svg>
  )
}
