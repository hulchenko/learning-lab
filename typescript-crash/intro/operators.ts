interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';
key = 'job'; //cannot assign, as it wasn't declared

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeys1 = Exclude<keyof User, '_id' | 'createdAt'>; //'name' | 'email' are the only remaining fields
type UserKeys2 = Pick<User, 'name' | 'email'>;

let u1: UserKeys1 = 'name';
u1 = '_id'; //cannot be assigned as we removed the field in UserKeys1 (Exclude<keyof User, '_id' | 'createdAt'>)
