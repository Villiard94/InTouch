import {Injectable} from '@angular/core';

@Injectable()
export class CacheService {
    Set<T>(key:string, value:T) {
        var json = JSON.stringify(value);
        localStorage.setItem(key, json);
    }

    Get<T>(key:string) : T {
        var json = localStorage.getItem(key);
        return <T>JSON.parse(json);
    }

    Delete(key:string){
        localStorage.removeItem(key);
    }

    Clear(){
        localStorage.clear();
    }
}