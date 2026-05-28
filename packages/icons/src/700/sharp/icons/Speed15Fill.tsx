import type { SVGProps, JSX } from 'react'

export default function Speed15Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M265-277v-335h-83v-71h154v406h-71Zm131 0v-71h71v71h-71Zm131 0v-71h181v-98H527v-237h253v71H598v94h182v241H527Z" />
    </svg>
  )
}
