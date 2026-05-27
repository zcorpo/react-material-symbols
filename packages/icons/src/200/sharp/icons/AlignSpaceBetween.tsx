import type { SVGProps } from 'react'

export default function AlignSpaceBetween({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M304.62-738.46v-70.77H120V-840h720v30.77H655.38v70.77H304.62ZM120-120v-30.77h184.62v-70.77h350.76v70.77H840V-120H120Z" />
    </svg>
  )
}
