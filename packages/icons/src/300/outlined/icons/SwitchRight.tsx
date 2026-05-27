import type { SVGProps } from 'react'

export default function SwitchRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-230.39 150.39-480 400-729.61v499.22Zm160 0v-499.22L809.61-480 560-230.39Zm44.23-106.07L747.38-480 604.23-623.54v287.08Z" />
    </svg>
  )
}
