import type { SVGProps, JSX } from 'react'

export default function ResponsiveLayoutFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M629.78-114.02v-517.2H371.57v-217.63h475.84v734.83H629.78Zm-258.21 0v-448.83h189.84v448.83H371.57Zm-258.98 0v-448.83h190.84v448.83H112.59Z" />
    </svg>
  )
}
