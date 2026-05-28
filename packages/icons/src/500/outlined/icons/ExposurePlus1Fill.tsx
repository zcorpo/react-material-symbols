import type { SVGProps, JSX } from 'react'

export default function ExposurePlus1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M247.37-277.37v-130h-130v-65.26h130v-130h65.26v130h130v65.26h-130v130h-65.26ZM650-194.5v-473.93l-99 71-37.63-57.07 153-111h60.56v571H650Z" />
    </svg>
  )
}
