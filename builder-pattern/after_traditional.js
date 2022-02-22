class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

//Give only required properties in the class.
class User {
  constructor(name) {
    this.name = name;
  }
}

//Only the builder is called. User is never called directly.
class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }
  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const user1 = new UserBuilder("Bob").build();
const user2 = new UserBuilder("John").setAge(25).build();
const user3 = new UserBuilder("Joe")
  .setAge(30)
  .setAddress(new Address(1234, "Rock"))
  .build();
