import { MarksPipe } from './marks.pipe';
// WE HAVE USED THIS IN OUR APP COMPONENT
//SO WE NEED TO DECLARE THIS PIPE  IN APP COMPONENT SPECS 
describe('MarksPipe', () => {
  it('create an instance', () => {
    const pipe = new MarksPipe();
    expect(pipe).toBeTruthy();
  });
  it('should assign a for marks 89++',()=>{
    const pipe = new MarksPipe();
    let gradePipe = pipe.transform(98)
    expect(gradePipe).toBe('A');
  });
  it('should not fail for marks 59',()=>{
    const pipe = new MarksPipe();
    let gradePipe = pipe.transform(59)
    expect(gradePipe).toBe('E');
  });
});
