export type addressType = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
}

export type contactType = {
  id?: string,
  name: string,
  email: string,
  address: addressType
}

export type postType = {
  title: string,
  body: string
}

export type socialsType = {
  map(arg0: ({ id, icon, path }: { id: any; icon: any; path: any }) => JSX.Element): import("react").ReactNode
  id: number,
  icon: string,
  path: string
}
