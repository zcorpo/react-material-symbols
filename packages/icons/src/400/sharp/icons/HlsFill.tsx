import type { SVGProps, JSX } from 'react'

export default function HlsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-360v-240h48v89h98v-89h48v240h-48v-103h-98v103h-48Zm276 0v-240h48v192h120v48H396Zm224 0v-80h48v32h104v-53H620v-139h200v80h-48v-32H668v53h152v139H620Z" />
    </svg>
  )
}
