export interface FilterParam {
  filterName: string;
  filterValue: string;
}

export class FilterParam implements FilterParam {
  filterName :string;
  filterValue: string;
  
  constructor(filterName: string, filterValue: string){
    this.filterName = filterName;
    this.filterValue = filterValue;
  }
}