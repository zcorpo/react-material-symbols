import type { SVGProps, JSX } from 'react'

export default function Gif({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M471.85-366.15v-227.7H511v227.7h-39.15Zm-261.08 0v-227.7h182v38.77H249.54v150.16h104.08v-72h39.15v110.77h-182Zm376.46 0v-227.7h162v38.77H626.38v63.85H707v39.15h-80.62v85.93h-39.15Z" />
    </svg>
  )
}
