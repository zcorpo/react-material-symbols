import type { SVGProps, JSX } from 'react'

export default function LuggageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M298-172h-54v-528h150v-128h173v128h149v528h-54v12q0 11-8.5 19.5T634-132q-11 0-19.5-8.5T606-160v-12H354v12q0 11-8.5 19.5T326-132q-11 0-19.5-8.5T298-160v-12Zm96-108h22v-312h-22v312Zm151 0h22v-312h-22v312ZM416-700h129v-106H416v106Z" />
    </svg>
  )
}
