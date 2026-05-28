import type { SVGProps, JSX } from 'react'

export default function LabProfileFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M340-504.62h280v-30.76H340v30.76Zm0-160h280v-30.76H340v30.76Zm420 514.93L587.08-375.38H200V-840h560v690.31ZM200-120v-224.62h372.69L744.46-120H200Z" />
    </svg>
  )
}
