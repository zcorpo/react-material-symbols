import type { SVGProps } from 'react'

export default function Speed4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M439-319q34 17 69 4.5t42-48.5q25-107 52-211.5T659-785q-61 91-123.5 180T408-429q-21 28-11.5 61.5T439-319ZM191-135q-25 0-46-12t-34-33q-29-49-42.5-104.5T55-398q-1-87 33-164.5t92.5-136Q239-757 317-791t164-34q88 0 165.5 33.5t135 91.5Q839-642 872-564t33 166q0 58-15 113t-43 105q-11 22-33 33.5T768-135H191Z" />
    </svg>
  )
}
