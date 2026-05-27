import type { SVGProps, JSX } from 'react'

export default function Speed12Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M265-277v-335h-83v-71h154v406h-71Zm131 0v-71h71v71h-71Zm131 0v-241h181v-94H527v-71h253v237H598v98h182v71H527Z" />
    </svg>
  )
}
