import type { SVGProps } from 'react'

export default function CollapseAll({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m293.08-110.38-22-21.24L480-340.54l208.92 208.92-22 21.24L480-296.54 293.08-110.38ZM480-619.69 271.08-828.62l22-22L480-663.69l186.92-186.93 22 22L480-619.69Z" />
    </svg>
  )
}
