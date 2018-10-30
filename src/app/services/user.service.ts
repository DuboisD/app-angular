export class UserService {
  users = [
    {
      id: 1,
      name: 'jean michou',
      status: 'actif'
    },
    {
      id: 2,
      name: 'maira daibé',
      status: 'non actif'
    },
    {
      id: 3,
      name: 'paul eau',
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
  switchOnOne(i: number) {
    this.users[i].status = 'actif';
  }
  switchOffOne(i: number) {
    this.users[i].status = 'non actif';
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
