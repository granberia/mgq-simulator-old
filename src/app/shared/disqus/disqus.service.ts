import { Injectable, Inject } from '@angular/core';
import { SHORTNAME } from './disqus.token';

declare const global: any;

@Injectable()
export class DisqusService {

  constructor( @Inject(SHORTNAME) public shortname: string) {
  }

  get window() {
    return _window();
  }
}

function _window() {
  return typeof window !== 'undefined' ? window : global;
}

