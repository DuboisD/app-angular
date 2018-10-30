export class UserService {
  users = [
    {
      name: 'jean michou',
      status: 'actif'
    },
    {
      name: 'maira daibé',
      status: 'non actif'
    },
    {
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
}
