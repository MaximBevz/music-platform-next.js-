export type userType = {
    id: number,
    name: string,
    email: string
    address: addressType
}

export type addressType = {
    street: string,
    city: string,
    zipcode: string
}

export type socialItemType = {
    id: number,
    name: string,
    path: string,
    icon: string
}

export type postType = {
    body: string,
    id: number,
    title: string,
    userId: number
}