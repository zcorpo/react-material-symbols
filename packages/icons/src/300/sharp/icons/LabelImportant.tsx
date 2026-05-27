import type { SVGProps } from 'react'

export default function LabelImportant({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m100-180 232.23-300L100-780.38h527L860-480 628-180H100Zm90.77-45.39h414.31L803.46-480 605.08-735H190.77l198 255-198 254.61Zm306.84-254.99Z" />
    </svg>
  )
}
