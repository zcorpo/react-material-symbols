import type { SVGProps, JSX } from 'react'

export default function AddCardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M149-503h662v-139H149v139ZM776-87v-109H667v-68h109v-109h68v109h109v68H844v109h-68ZM55-135v-691h851v393H776q-70.14 0-119.57 49.43Q607-334.14 607-264v129H55Z" />
    </svg>
  )
}
