type Merge<T, U> = Omit<T, keyof U> & U
type MergeRemoveNever<T, U> = Omit<T, keyof U> & U
type RemoveNever<T> = {}
