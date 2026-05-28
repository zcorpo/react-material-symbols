import type { SVGProps, JSX } from 'react'

export default function Sip({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M459-357h48v-246h-48v246Zm108 0h50v-89h150v-157H567v246Zm-375 0h200v-148H242v-48h150v-50H192v148h150v48H192v50Zm425-139v-57h100v57H617ZM55-135v-691h851v691H55Zm94-94h662v-502H149v502Zm0 0v-502 502Z" />
    </svg>
  )
}
