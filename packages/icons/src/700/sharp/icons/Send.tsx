import type { SVGProps, JSX } from 'react'

export default function Send({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M97-136v-688l813 344L97-136Zm83-128 516-216-516-219v146l253 73-253 71v145Zm0 0v-435 435Z" />
    </svg>
  )
}
