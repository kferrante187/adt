import { Result } from './status-response';
describe('using the status response thing', () => {
  it('an example', () => {
    function doIt(x: number): Result<number> {
      if (x % 2 === 0) {
        return {
          status: 'OK',
          value: x + x,
        };
      } else {
        return {
          status: 'FAIL',
          message: 'Could no do that work',
        };
      }
    }
    const response = doIt(2);
    if (response.status === 'OK') {
      expect(response.value).toBe(4);
    } else {
      fail();
    }

    const response3 = doIt(3);
    if (response3.status === 'OK') {
      expect(response3.value).toBe(4);
    } else {
      expect(response3.message).toBe('Could no do that work');
    }

    expect(handleIt(response3)).toBe('Not So Good!');

    function handleIt(h: Result<number>) {
      switch (h.status) {
        case 'OK': {
          return 'That went ok!';
        }
        case 'FAIL': {
          return 'Not So Good!';
        }
      }
    }
  });
});
