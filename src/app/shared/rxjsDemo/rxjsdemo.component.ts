import { Component } from "@angular/core";
import { AsyncSubject, BehaviorSubject, filter, from, interval, map, merge, Observable, Observer, of, range, ReplaySubject, Subject, take } from "rxjs";

@Component({
    selector: "rxjs",
    template: `<h1>{{pageTitle}}</h1>`
})
export class RxjsDemoComponent{
    pageTitle = "Rxjs Demo"
    observable$: any

    ngOnInit(){
        const observable$ = from(range(97, 26)).pipe(filter( x=> x%2==0)).pipe(map(x=> x*10)).pipe(take(5));
        // number$.forEach((x) => console.log(x));
        
        const number$ = interval(1000).pipe(take(10));
        const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        const alpha = interval(1010).pipe(map(x => array[x])).pipe(take(5))
        const output = merge(number$, alpha); //.subscribe(x => console.log(x));
        
        var data = of(1.2, 3.4, 5.6, 6.7).subscribe(x => console.log(x))
    }

    ngOnDestoy(){
        console.log("From onDestroy")
    }









    
    
    // EXAMPLE 1
    // observable$: any
    // ngOnInit(){
    //     this.observable$ = new Observable((observer: Observer<any>) =>{
    //         observer.next(1);
    //         observer.next(2);
    //         observer.next(3);
    //         observer.next(4);
    //         observer.complete();
    //     });

    //     this.observable$.subscribe(
    //         (value:any) => console.log("The emitted data is "+ value),
    //         (err:any) => {},
    //         () => console.log("Stream Ended")
    //     )
    // }

    // EXAMPLE SUBJECT
    // ngOnInit(){
    //     this.subject$ = new Subject();
    //     this.subject$.subscribe((x : any) => console.log("First Subscriber "+ x))
    //     this.subject$.next(1)
    //     this.subject$.next(2)
    //     this.subject$.next(3)

    //     this.subject$.subscribe((x : any) => console.log("second Subscriber "+ x))
    //     this.subject$.next(4)
    //     this.subject$.next(5)

    //     this.subject$.subscribe((x : any) => console.log("Third Subscriber "+ x))
    //     this.subject$.next(6)
    //     this.subject$.next(7)
    // }

    // ngOnDestroy(){
    //     console.log("From onDestroy");
    //     this.subject$.unsubscribe();
    // }


    // EXAMPLE Behavior SUBJECT
    // ngOnInit(){
    //     this.subject$ = new BehaviorSubject(100);
    //     this.subject$.subscribe((x : any) => console.log("First Subscriber "+ x))
    //     this.subject$.next(1)
    //     this.subject$.next(2)
    //     this.subject$.next(3)
        
    //     this.subject$.subscribe((x : any) => console.log("second Subscriber "+ x))
    //     this.subject$.next(4)
    //     this.subject$.next(5)

    //     this.subject$.subscribe((x : any) => console.log("Third Subscriber "+ x))
    //     this.subject$.next(6)
    //     this.subject$.next(7)
    // }

    // ngOnDestroy(){
    //     console.log("From onDestroy");
    //     this.subject$.unsubscribe();
    // }

    // ngOnInit(){
    //     this.subject$ = new ReplaySubject();
    //     this.subject$.subscribe((x : any) => console.log("First Subscriber "+ x))
    //     this.subject$.next(1)
    //     this.subject$.next(2)
    //     this.subject$.next(3)
        
    //     this.subject$.subscribe((x : any) => console.log("second Subscriber "+ x))
    //     this.subject$.next(4)
    //     this.subject$.next(5)

    //     this.subject$.subscribe((x : any) => console.log("Third Subscriber "+ x))
    //     this.subject$.next(6)
    //     this.subject$.next(7)
    // }

    // ngOnDestroy(){
    //     console.log("From onDestroy");
    //     this.subject$.unsubscribe();
    // }


    // ngOnInit(){
    //     this.subject$ = new AsyncSubject();
    //     this.subject$.subscribe((x : any) => console.log("First Subscriber "+ x))
    //     this.subject$.next(1)
    //     this.subject$.next(2)
    //     this.subject$.next(3)
        
    //     this.subject$.subscribe((x : any) => console.log("second Subscriber "+ x))
    //     this.subject$.next(4)
    //     this.subject$.next(5)

    //     this.subject$.subscribe((x : any) => console.log("Third Subscriber "+ x))
    //     this.subject$.next(6)
    //     this.subject$.next(7)
    //     this.subject$.complete();
    // }

    // ngOnDestroy(){
    //     console.log("From onDestroy");
    //     this.subject$.unsubscribe();
    // }





}