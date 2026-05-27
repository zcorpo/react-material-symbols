import type { SVGProps } from 'react'

export default function TextFieldsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M277-147v-553H67v-113h533v113H390v553H277Zm373 0v-340H520v-113h373v113H763v340H650Z" />
    </svg>
  )
}
