import type { SVGProps, JSX } from 'react'

export default function CleaningServices({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-92v-391h228v-385h160v385h228v391H172Zm22-22h127v-161h22v161h126v-161h22v161h127v-161h22v161h126v-347H194v347Zm344-369v-363H422v363h116Zm0 0H422h116Z" />
    </svg>
  )
}
