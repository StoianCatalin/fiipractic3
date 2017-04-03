import { TestBed, inject } from '@angular/core/testing';
import 'rxjs/Rx';

import { EventsService } from './events.service';
import {MockBackend} from "@angular/http/testing";
import {Http, BaseRequestOptions, Response, ResponseOptions} from "@angular/http";
import {AuthService} from "../shared/services/auth.service";

class MockAuthService {
  getToken() {
    return 'token';
  }
}

describe('EventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsService, BaseRequestOptions, AuthService, MockBackend,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend, options) => { return new Http(backend, options); }
        },
        {
          provide: AuthService,
          use: MockAuthService
        }]
    });
  });


  it('should be Truthy', inject([EventsService], (service: EventsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all events', inject([EventsService, MockBackend], (EventsService, MockBackend) => {

    let mockResponse = {
      events: [1,2,3,4]
    };

    MockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: mockResponse
      })));
    });

    EventsService.getEvents().subscribe((response) => {
      expect(response).toBe(mockResponse);
    });
  }));

});
