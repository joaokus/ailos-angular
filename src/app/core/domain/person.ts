import { Account } from "./accounts"

export interface Person {
    name: string
    status: string
    accounts: Account[]
}
