const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('add user that is not in the list', () => {
  const controller = new UserController();
  const user = new User(1, "Ana", "ana@mail.com");
  expect(controller.getUsers()).not.toContain(user);
  controller.add(user);
  expect(controller.getUsers()).toContain(user);
});

test('remove user that is not in the list', () => {
  const controller = new UserController();
  const existing = new User(1, "Ana", "ana@mail.com");
  const notInList = new User(2, "Luis", "luis@mail.com");
  controller.add(existing);
  controller.remove(notInList);
  expect(controller.getUsers()).toEqual([existing]);
});

test('findByEmail returns the user when it exists', () => {
  const controller = new UserController();
  const user = new User(1, "Ana", "ana@mail.com");
  controller.add(user);
  expect(controller.findByEmail("ana@mail.com")).toBe(user);
});

test('findByEmail returns undefined when it does not exist', () => {
  const controller = new UserController();
  expect(controller.findByEmail("nadie@mail.com")).toBeUndefined();
});

test('findById returns the user when it exists', () => {
  const controller = new UserController();
  const user = new User(1, "Ana", "ana@mail.com");
  controller.add(user);
  expect(controller.findById(1)).toBe(user);
});

test('findById returns undefined when it does not exist', () => {
  const controller = new UserController();
  expect(controller.findById(99)).toBeUndefined();
});