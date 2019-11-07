import { getUserZip } from "../users/users";

describe('optional chaining test suite', () => {
  
    const users = [{
        name: "Jimi",
        address: {
            zip: 1628546
        }
    },
    {
        name: "Lea"
    },
    {
        name: "Ted",
        address: {}
    }];
  
    it('should return undefined when nested object is undefined', () => {
      expect(getUserZip(users[0])).toMatchSnapshot();
  });
});
