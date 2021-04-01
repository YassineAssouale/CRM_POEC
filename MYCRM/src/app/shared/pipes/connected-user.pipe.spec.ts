import { ConnectedUserPipe } from './connected-user.pipe';

describe('ConnectedUserPipe', () => {
  it('create an instance', () => {
    const pipe = new ConnectedUserPipe();
    expect(pipe).toBeTruthy();
  });
});
