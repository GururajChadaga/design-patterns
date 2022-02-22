class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age = 25, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user1 = new User("Bob");
const user2 = new User("Joe", { age: 45 });
const user3 = new User("John", { address: new Address(1234, "Rock") });
