import type { SVGProps } from 'react'

export default function HomeMaxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M332-224v-25H220q-54 0-91-37t-37-91v-203q0-54 37-91t91-37h520q54 0 91 37t37 91v203q0 54-37 91t-91 37H628v25H332Z" />
    </svg>
  )
}
