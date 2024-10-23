import { PurchaseModel } from '@/domain/models'

export interface LoadPurchases {
  loadAll: () => Array<LoadPurchases.Result>
}

export namespace LoadPurchases {
  export type Result = PurchaseModel
}

