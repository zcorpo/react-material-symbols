import type { SVGProps } from 'react'

export default function ShortTextFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-391.92v-45.39h352.08v45.39H180Zm0-130.77v-45.39h600v45.39H180Z" />
    </svg>
  )
}
