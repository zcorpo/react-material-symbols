import type { SVGProps, JSX } from 'react'

export default function Speed05Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M321-305v-22h22v22h-22Zm94 0v-22h131q13 0 22.5-9.5T578-359v-79q0-13-9.5-22.5T546-470H415v-185h185v22H437v141h109q22 0 38 15.5t16 38.5v79q0 23-16 38.5T546-305H415Z" />
    </svg>
  )
}
