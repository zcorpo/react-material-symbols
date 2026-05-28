import type { SVGProps, JSX } from 'react'

export default function InkSelectionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M439-120v-401h401v60H542l298 298-43 43-298-298v298h-60Zm-154 0v-60h60v60h-60ZM120-780v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60ZM120-120v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm660 0v-60h60v60h-60Z" />
    </svg>
  )
}
