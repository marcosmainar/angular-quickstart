import { AwesomePipe } from './awesome.pipe';

describe('AwesomePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  let pipe = new AwesomePipe();
  it('transforms "abc" to "Awesome abc"', () => {
    expect(pipe.transform('abc')).toBe('Awesome abc');
  });
});
