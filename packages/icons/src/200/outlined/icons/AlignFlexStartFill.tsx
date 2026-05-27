import type { SVGProps } from 'react'

export default function AlignFlexStartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-809.23V-840h720v30.77H120Zm324.62 658.46v-524.61h70.76v524.61h-70.76Z" />
    </svg>
  )
}
