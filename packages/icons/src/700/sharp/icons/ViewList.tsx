import type { SVGProps, JSX } from 'react'

export default function ViewList({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M375-229h436v-118H375v118ZM149-613h146v-118H149v118Zm0 187h146v-107H149v107Zm0 197h146v-118H149v118Zm226-197h436v-107H375v107Zm0-187h436v-118H375v118ZM55-135v-691h851v691H55Z" />
    </svg>
  )
}
