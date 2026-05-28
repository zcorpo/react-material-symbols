import type { SVGProps, JSX } from 'react'

export default function AddColumnLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M806-194v-572H528v572h278Zm-594 22v-111h22v89h272v-572H234v89h-22v-111h616v616H212Zm294-308Zm22 0h-22 22Zm0 0Zm-316 91v-80h-80v-22h80v-80h22v80h80v22h-80v80h-22Z" />
    </svg>
  )
}
