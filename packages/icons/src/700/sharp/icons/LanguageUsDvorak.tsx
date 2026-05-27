import type { SVGProps } from 'react'

export default function LanguageUsDvorak({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M229-375h108v-211H229v211Zm-94 95v-400h243l54 50v300l-54 50H135Zm486 0L490-680h95l92 287 96-288h94L732-280H621Z" />
    </svg>
  )
}
