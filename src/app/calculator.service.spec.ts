import { TestBed } from "@angular/core/testing"
import { CalculatorService } from "./calculator.service"
import { SharedService } from "./shared.service"


/**######################### without shared dependency #############################*/
// describe('CalculatorService',()=>{   /// we can write any number of test specifications inside this
//   it('multiply two numbers',()=>{   // it() -- helps to write test specifications or define any test 
//     const calc = new CalculatorService()
//     const result = calc.multiply(3,5)
//     expect(result).toBe(15)
//   })
// })
/**########################## without shared dependency ############################*/

/**########################## shared dependency ############################*/
// describe('CalculatorService',()=>{   /// we can write any number of test specifications inside this
//   it('multiply two numbers',()=>{   // it() -- helps to write test specifications or define any test 
//     const shared  = new SharedService()  // first instantiate as calculator service has dependency on shared service
//     const calc = new CalculatorService(shared)
//     const result = calc.multiply(3,5)
//     expect(result).toBe(15)
//   })
// })
/**########################## shared dependency ############################*/

// ################# TO CHECK A PARTICULAR FUNCTION IS CALLED OR NOT ######################
// in this case we are calling this.shared.sharedFunction() 
// describe('CalculatorService',()=>{   /// we can write any number of test specifications inside this
//   it('multiply two numbers',()=>{   // it() -- helps to write test specifications or define any test 
//     const shared  = new SharedService()  // first instantiate as calculator service has dependency on shared service
//     const calc = new CalculatorService(shared)
//     const result = calc.multiply(3,5)
//     expect(result).toBe(15)
//   }),
//   it("check shared Function call",()=>{
//     // const shared  = new SharedService()  // first instantiate as calculator service has dependency on shared service
//     // when we are instantiating any service the constructor is called by default so if any HTTP request it will be called multiple times 
//     //so to avoid the constructor call we need to create mockService 
//    // mock service -- provided by Jasmine -- specify -- service Name , list of service
//     const shared = jasmine.createSpyObj('SharedService',['sharedFunction']) // this is with spy also
//     const calc = new CalculatorService(shared)
//     // spyOn(shared,"sharedFunction") // spyOn(OBJECT NAME INSTANCE,METHOD NAME )
//     const result = calc.multiply(3,5)
//     expect(result).toBe(15)
//     // expect(shared.sharedFunction).toHaveBeenCalled()
//   })
// })
// ################# TO CHECK A PARTICULAR FUNCTION IS CALLED OR NOT ######################

//####################################USE OF BEFORE EACH & TEST BEDS########################################################

//If we add another functions in calc service 
// we need to duplicate codes again 
// these are totally redundant codes needs to be used again & again
// const shared  = new SharedService() 
// const calc = new CalculatorService(shared)
//so we use
// beforeEach(()=>{
  
// })
describe('CalculatorService',()=>{   /// we can write any number of test specifications inside this
  let shared :SharedService
  let calc :CalculatorService
  beforeEach(()=>{
    // In this we are manually creating instances and not using dependency injection 
    //  By this we are calling constructors explicitly
    // shared = new SharedService()
    // calc = new CalculatorService(shared)

    //Hence use TEST BEDS
    shared = jasmine.createSpyObj('SharedService',['sharedFunction']) // this is with spy also
    TestBed.configureTestingModule({ //just like appModule -- imports,exports,declarations,providers arrays
      providers:[CalculatorService,{
        provide:SharedService ,useValue:shared
      }
      ]
    })
    shared = TestBed.inject(SharedService) // now inject
    calc = TestBed.inject(CalculatorService)

    //NOW TEST BEDS WITH SPYING ALSO WITHOUT CREATING AN ACTUAL INSTANCE
    // TestBed.configureTestingModule({ //just like appModule -- imports,exports,declarations,providers arrays
    //   providers:[CalculatorService,SharedService]
    // })
    // shared = TestBed.inject(SharedService) // now inject
    // calc = TestBed.inject(CalculatorService)
})
  it('multiply two numbers',()=>{   // it() -- helps to write test specifications or define any test 
    // const shared  = new SharedService()  // first instantiate as calculator service has dependency on shared service
    // const calc = new CalculatorService(shared)
    const result = calc.multiply(3,5)
    expect(result).toBe(15)
  })
  it('add two numbers',()=>{   // it() -- helps to write test specifications or define any test 
    // const shared  = new SharedService()  // first instantiate as calculator service has dependency on shared service
    // const calc = new CalculatorService(shared)
    const result = calc.add(3,5)
    expect(result).toBe(8)
  })
})


//###################################USE OF BEFORE EACH & TEST BEDS#########################################################
//Skip testbed or specs
//describe --xdescribe
//it --->xit

//focus on a testbed ot specs
//describe --fdescribe
//it --->fit