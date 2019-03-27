import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Blog } from '../models/blog.model';
import { BlogService } from '../services/blog.service';

// TODO: Replace this with your own data model type
export interface PostListItem {
  title: string;
  id: number;
  date: string;
  content: string
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: PostListItem[] = [
  {id: 1, title: 'Hydrogen', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 2, title: 'Helium', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 3, title: 'Lithium', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 4, title: 'Beryllium', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 5, title: 'Boron', date: "abc", content: 'Mùa hoa lê kia ma nở, ở quê ta miền đất đở'},
  {id: 6, title: 'Carbon', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 7, title: 'Nitrogen', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 8, title: 'Oxygen', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 9, title: 'Fluorine', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 10, title: 'Neon', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 11, title: 'Sodium', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 12, title: 'Magnesium', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 13, title: 'Aluminum', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 14, title: 'Silicon', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 15, title: 'Phosphorus', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 16, title: 'Sulfur', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 17, title: 'Chlorine', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 18, title: 'Argon', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 19, title: 'Potassium', date: "abc", content: 'dsdsb ạbdba ậbs'},
  {id: 20, title: 'Calcium', date: "abc", content: 'dsdsb ạbdba ậbs'},
];

/**
 * Data source for the PostList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PostListDataSource extends MatTableDataSource<Blog> {
  data: Blog[];

  constructor(
    private blogService: BlogService
  ) {
    super();
    this.blogService.getBlogs().subscribe(blogs => this.data = blogs);
  }

  // /**
  //  * Connect this data source to the table. The table will only update when
  //  * the returned stream emits new items.
  //  * @returns A stream of the items to be rendered.
  //  */
  // connect(): Observable<PostListItem[]> {
  //   // Combine everything that affects the rendered data into one update
  //   // stream for the data-table to consume.
  //   const dataMutations = [
  //     observableOf(this.data),
  //     this.paginator.page,
  //     this.sort.sortChange
  //   ];

  //   // Set the paginator's length
  //   this.paginator.length = this.data.length;

  //   return merge(...dataMutations).pipe(map(() => {
  //     return this.getPagedData(this.getSortedData([...this.data]));
  //   }));
  // }

  // /**
  //  *  Called when the table is being destroyed. Use this function, to clean up
  //  * any open connections or free any held resources that were set up during connect.
  //  */
  // disconnect() {}

  // /**
  //  * Paginate the data (client-side). If you're using server-side pagination,
  //  * this would be replaced by requesting the appropriate data from the server.
  //  */
  // private getPagedData(data: PostListItem[]) {
  //   const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //   return data.splice(startIndex, this.paginator.pageSize);
  // }

  // /**
  //  * Sort the data (client-side). If you're using server-side sorting,
  //  * this would be replaced by requesting the appropriate data from the server.
  //  */
  // private getSortedData(data: PostListItem[]) {
  //   if (!this.sort.active || this.sort.direction === '') {
  //     return data;
  //   }

  //   return data.sort((a, b) => {
  //     const isAsc = this.sort.direction === 'asc';
  //     switch (this.sort.active) {
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       case 'id': return compare(+a.id, +b.id, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
