import type { SVGProps, JSX } from 'react'

export default function YakitoriFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M868-27 695-200 548-52 357-242l59-60-62-62-59 59-190-189 59-60L40-679l86-91L20-875l67-66 105 106 91-86 125 124 58-59 192 191-60 58 62 62 59-58 191 190-148 147L934-92l-66 65Z" />
    </svg>
  )
}
