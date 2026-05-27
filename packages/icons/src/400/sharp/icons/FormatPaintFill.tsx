import type { SVGProps } from 'react'

export default function FormatPaintFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M377-80v-260H160v-363q0-55 39.66-96 39.65-41 95.34-41h505v500H583v260H377ZM220-554h520v-226h-56v171h-60v-171h-71v85h-60v-85H295q-32 0-53.5 23T220-703v149Z" />
    </svg>
  )
}
