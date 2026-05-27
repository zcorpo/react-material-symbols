import type { SVGProps } from 'react'

export default function AlignJustifyFlexEnd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M811-55v-851h95v851h-95ZM553-273v-414h134v414H553Zm-240 0v-414h134v414H313Z" />
    </svg>
  )
}
