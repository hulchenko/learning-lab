// Map data from getUsers and getUserStatuses to get array of users with id, name, isActive

const users = [
  { id: 1, name: "Jack" },
  { id: 2, name: "John" },
  { id: 3, name: "Mike" },
];

const userStatuses = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

// alternative approach
// const mapData = async () => {
//   try {
//     const users = await getUsers();
//     const statuses = await getUserStatuses();
//     const combined = users.map((user, idx) => ({...user, isActive: userStatuses[idx].isActive}));
//     return combined;
//   } catch(error) {
//     throw Error(error);
//   }
// };

// Promise.all approach
const mapData = async () => {
  try {
    const [users, statuses] = await Promise.all([getUsers(), getUserStatuses()]);
    const combined = users.map((user) => {
      const status = statuses.find((s) => s.id === user.id);
      return { ...user, isActive: status.isActive };
    });
    return combined;
  } catch (error) {
    console.log("Error mapping data: ", error);
  }
};

mapData().then((data) => console.log(data));
