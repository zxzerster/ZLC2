import {Subject} from 'rxjs';
import {} from 'rxjs/operators';

export default () => {
  const subject = new Subject();
  subject.subscribe(x => {
    console.log(`[A]: ${x}`);
  });
  subject.subscribe(y => {
    console.log(`[B]: ${y}`);
  });

  subject.next(1);
  subject.next(2);
};
