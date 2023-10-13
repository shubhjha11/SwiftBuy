export interface ProductFilter {
  id: string,
  name: string,
  options: ProductFilterOption[]
}

export interface ProductFilterOption {
  value: string,
  label: string
}