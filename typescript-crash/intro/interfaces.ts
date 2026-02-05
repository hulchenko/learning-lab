interface Rect {
  readonly id: string;
  color?: string; //(?) for optional parameters
  size: {
    width: number;
    height: number;
  };
}

// ---
const rect1: Rect = {
  id: 'some string',
  size: {
    width: 20,
    height: 30,
  },
  color: '#aaa',
};

// ---
const rect2: Rect = {
  id: 'test string', // cannot reassign to (rect2.id = 'another test string';) as it has readonly property
  size: {
    width: 10,
    height: 15,
  },
};
rect2.color = '#fff';

// Alternative object declarations ---
const rect3 = {} as Rect;
const rect4 = <Rect>{};

// Extending the object ---
interface RectWithArea extends Rect {
  getArea: () => number; //function used as an example, it can be anything, additional on top of what original Object didn't have
}
const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 10,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// Class implementation from interface(same as extends from interface to interface) ---
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// Set key types ---
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: '1px solid red',
  marginTop: '2px',
  borderRadius: '5px',
};
