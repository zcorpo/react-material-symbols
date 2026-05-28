import type { SVGProps, JSX } from 'react'

export default function VideoTemplateFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-40v-145h720v145H120ZM80-245v-470h800v470H80Zm329-132 173-103-173-104v207ZM120-775v-145h720v145H120Z" />
    </svg>
  )
}
