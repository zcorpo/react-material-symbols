import type { SVGProps, JSX } from 'react'

export default function AddColumnLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M809.23-190.77v-578.46H533.31v578.46h275.92ZM200-160v-120h30.77v89.23h271.77v-578.46H230.77V-680H200v-120h640v640H200Zm302.54-320Zm30.77 0h-30.77 30.77Zm0 0ZM200-384.62v-80h-80v-30.76h80v-80h30.77v80h80v30.76h-80v80H200Z" />
    </svg>
  )
}
