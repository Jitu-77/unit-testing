import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { USERS } from './mock_data';

describe('DataService', () => {
  let service: DataService;
  let testController :HttpTestingController // to populate test data
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ] // for HTTP CLIENT REQUEST S
    });
    service = TestBed.inject(DataService);
    testController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call all users',()=>{
    // we need to subscribe the request
    service.getAllUSers().subscribe((res:any)=>{
      //to make ensure the data is coming 
      expect(res).toBeTruthy()
      // we can length too
      expect(res.length).toBeTruthy()
      //we can check specific data 
      const secondItem = res.find((el:any)=>{
        return el?.id ==2
      })
      expect (secondItem.name).toBe('asd2')
    })
    //mocking data 
    //invoke a mock request by expectOne function of testing controller with the actual end point
    // we can pass mock data into the mockRequest by using the FLUSH method
    const mockReq = testController.expectOne('api/all')
    //we can check the method call too 
    expect(mockReq.request.method).toEqual('GET')
    mockReq.flush(Object.values(USERS))
    //to ensure that no other HTTP Call is invoked we use .verify()
    // testController.verify()

  }),
  it('should call one users',()=>{
    // we need to subscribe the request
    service.getUSersById(1).subscribe((res:any)=>{
      //to make ensure the data is coming 
      expect(res).toBeTruthy()
      // we can length too
      // expect(res.length).toBeTruthy()
      //we can check specific data 
      expect (res.name).toBe('asd1')
    })
    //mocking data 
    //invoke a mock request by expectOne function of testing controller with the actual end point
    // we can pass mock data into the mockRequest by using the FLUSH method
    const mockReq = testController.expectOne('api/all/1')
    //we can check the method call too 
    expect(mockReq.request.method).toEqual('GET')
    mockReq.flush(USERS[1])
    //to ensure that no other HTTP Call is invoked we use .verify()
    // testController.verify()

  })
  //just like beforeEach there is AfterEach
  afterEach(()=>{
    //to ensure that no other HTTP Call is invoked we use .verify()
    testController.verify()
  })
});
