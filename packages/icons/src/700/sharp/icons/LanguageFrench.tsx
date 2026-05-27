import type { SVGProps } from 'react'

export default function LanguageFrench({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-280v-400h304v94H229v94h170v87H229v125h-94Zm369 0v-400h268l54 50v151l-54 49h-31l97 150H725l-85-140h-42v140h-94Zm94-212h138v-94H598v94Z" />
    </svg>
  )
}
