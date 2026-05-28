import type { SVGProps, JSX } from 'react'

export default function IflFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M690-270q17-17 17-42t-17-42q-17-17-42-17t-42 17q-17 17-17 42t17 42q17 17 42 17t42-17ZM520-440q17-17 17-42t-17-42q-17-17-42-17t-42 17q-17 17-17 42t17 42q17 17 42 17t42-17ZM354-606q17-17 17-42t-17-42q-17-17-42-17t-42 17q-17 17-17 42t17 42q17 17 42 17t42-17ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
