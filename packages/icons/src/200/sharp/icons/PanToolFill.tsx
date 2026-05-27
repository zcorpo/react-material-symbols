import type { SVGProps } from 'react'

export default function PanToolFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M386.31-100 111.69-504.15l34.31-30.7 174 125.54v-368.38h30.77V-500h119.31v-357.69h30.77V-500h119.3v-317.69h30.77V-500h118.31v-260H800v660H386.31Z" />
    </svg>
  )
}
