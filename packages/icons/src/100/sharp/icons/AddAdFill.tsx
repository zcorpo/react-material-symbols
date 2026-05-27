import type { SVGProps, JSX } from 'react'

export default function AddAdFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M732-192v-125H607v-22h125v-124h22v124h124v22H754v125h-22ZM82-172v-621h621v236h-22v-120H104v483h534v22H82Z" />
    </svg>
  )
}
