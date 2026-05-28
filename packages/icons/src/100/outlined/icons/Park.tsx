import type { SVGProps, JSX } from 'react'

export default function Park({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M502-132h-44v-157H218l169-250h-83l176-251 176 251h-82l168 250H502v157ZM260-311h169-81 264-80 169-441Zm0 0h441L532-561h80L480-749 348-561h81L260-311Z" />
    </svg>
  )
}
