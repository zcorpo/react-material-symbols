import type { SVGProps } from 'react'

export default function FlagFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M175-95v-731h389l19.33 86H826v421H523l-19-85H269v309h-94Z" />
    </svg>
  )
}
