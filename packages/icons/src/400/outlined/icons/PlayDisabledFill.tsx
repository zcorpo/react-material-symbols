import type { SVGProps } from 'react'

export default function PlayDisabledFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M635-396 332-692v-71l440 280-137 87ZM793-69 532-330 332-203v-327L70-793l42-42 724 724-43 42Z" />
    </svg>
  )
}
