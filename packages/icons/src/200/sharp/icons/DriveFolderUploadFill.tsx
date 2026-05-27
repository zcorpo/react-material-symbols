import type { SVGProps, JSX } from 'react'

export default function DriveFolderUploadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-560h273.31l70.77 70.77H840V-200H120Zm344.62-110.77h30.76v-215.46l89.39 89.38 22-22-126.77-126-125.23 124.47 22 22 87.85-87.85v215.46Z" />
    </svg>
  )
}
