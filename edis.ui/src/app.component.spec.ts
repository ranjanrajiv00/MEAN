import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    it('verify title', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance.title).toBe('edis');
    }));
});