import type { SVGProps, JSX } from 'react'

export default function AlignStretch({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M273-553v-258H55v-95h851v95H687v258H273ZM55-55v-94h218v-258h414v258h219v94H55Z" />
    </svg>
  )
}
