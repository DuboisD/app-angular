export class UserService {
  users = [
    {
      id: 1,
      name: 'Jean Michou',
      status: 'actif'
    },
    {
      id: 2,
      name: 'Maria des Baies',
      status: 'non actif'
    },
    {
      id: 3,
      name: 'Paul Eau',
      status: 'actif'
    }
  ];
  switchOnAll() {
    for (const user of this.users) {
      user.status = 'actif';
    }
  }
  switchOffAll() {
    for (const user of this.users) {
      user.status = 'non actif';
    }
  }
  switchOnOne(userIndex: number) {
    this.users[userIndex].status = 'actif';
  }
  switchOffOne(userIndex: number) {
    this.users[userIndex].status = 'non actif';
  }
  getUserById(id: number) {
    const user = this.users.find(
      (s) => {
        return s.id === id;
      }
    );
    return user;
  }
}
