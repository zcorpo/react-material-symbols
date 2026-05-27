import type { SVGProps, JSX } from 'react'

export default function TvDisplays({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-308v-598h679v95H149v503H55ZM463.94-55v-80H249v-576h701v576H736.14v80h-272.2ZM344-229h512v-388H344v388Zm256-194Z" />
    </svg>
  )
}
