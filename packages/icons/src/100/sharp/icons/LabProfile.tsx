import type { SVGProps, JSX } from 'react'

export default function LabProfile({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M346-509v-22h268v22H346Zm0-160v-22h268v22H346ZM234-371h351l141 184v-619H234v435Zm0 217h489L575-349H234v195Zm514 22H212v-696h536v696Zm-514-22v-652 652Zm0-195v-22 22Z" />
    </svg>
  )
}
