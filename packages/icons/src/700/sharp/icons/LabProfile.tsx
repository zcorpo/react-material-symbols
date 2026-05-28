import type { SVGProps, JSX } from 'react'

export default function LabProfile({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-490v-60h320v60H320Zm0-160v-60h320v60H320Zm-91 243h359l143 186v-590H229v404Zm0 258h438L542-313H229v164Zm597 94H135v-851h691v851Zm-597-94v-662 662Zm0-164v-94 94Z" />
    </svg>
  )
}
