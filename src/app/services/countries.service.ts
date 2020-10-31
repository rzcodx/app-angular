import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { Country, Post } from '../interfaces';
import { delay, flatMap, mergeMap, retry, retryWhen, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService implements OnDestroy {
  selectedCountry$: Subject<Country> = new Subject<Country>();
  error$: Subject<string> = new Subject<string>();

  private url = 'https://restcountries.eu/rest/v2/all';
  private urlJsonApi = 'https://jsonplaceholder.typicode.com';

  private destroyAll$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) { }

  getList(): Observable<Country[]> {
    // return this.http.get<Country[]>(this.url);
    // return this.http.get<Country[]>(this.url).pipe(retry(3));
    return this.http.get<Country[]>(this.url)
      .pipe(
        retryWhen(err => {
          let retries = 3;
          return err
            .pipe(
              delay(1000),
              mergeMap(currentErr => {
                if (retries-- > 0) {
                  return of(currentErr);
                } else {
                  throwError(currentErr);
                }
              })
            );
        })
      );
  }

  getCountry(code: number): void {
    const ds = this.http.get(this.url)
      .pipe(
        takeUntil(this.destroyAll$)
      )
      .subscribe(countries => {
          if (countries[code]) {
            this.error$.next(null);
            this.selectedCountry$.next(countries[code]);
            ds.unsubscribe();
          } else {
            this.selectedCountry$.next(null);
            this.error$.next(`No existe un país con el código ${code}`);
          }
        },
        error => {
          ds.unsubscribe();
        },
        () => {
          ds.unsubscribe();
        }
      );
  }

  // addPost(post: Post): void {
  //   this.http.post<Post>(`${this.urlJsonApi}/posts`, post)
  //     .subscribe();
  // }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.urlJsonApi}/posts`, post);
  }

  putPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.urlJsonApi}/posts/${post.userID}`, post);
  }

  patchPost(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${this.urlJsonApi}/posts/${post.userID}`, post);
  }

  deletePost(id: number): Observable<unknown> {
    return this.http.delete<Post>(`${this.urlJsonApi}/posts/${id}`);
  }

  ngOnDestroy(): void {
    this.destroyAll$.next();
    this.destroyAll$.complete();
    this.destroyAll$.unsubscribe();
  }
}
