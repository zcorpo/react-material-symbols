import type { SVGProps, JSX } from 'react'

export default function Spo2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M446-141v-240h180v240H446Zm60-60h60v-120h-60v120ZM671-74v-144h132v-48H671v-60h192v144H731v48h132v60H671ZM374-56Q237-66 146-163T55-395q0-114 83.76-240.53Q222.53-762.05 400-913q149 126 238.5 246T743-453H374v397Z" />
    </svg>
  )
}
