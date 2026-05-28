import type { SVGProps, JSX } from 'react'

export default function BarcodeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M17-187v-588h89v588H17Zm126 0v-588h84v588h-84Zm127 0v-588h42v588h-42Zm126 0v-588h84v588h-84Zm126 0v-588h126v588H522Zm169 0v-588h42v588h-42Zm126 0v-588h126v588H817Z" />
    </svg>
  )
}
