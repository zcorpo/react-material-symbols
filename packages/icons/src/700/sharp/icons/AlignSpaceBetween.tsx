import type { SVGProps, JSX } from 'react'

export default function AlignSpaceBetween({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M273-677v-134H55v-95h851v95H687v134H273ZM55-55v-94h218v-135h414v135h219v94H55Z" />
    </svg>
  )
}
