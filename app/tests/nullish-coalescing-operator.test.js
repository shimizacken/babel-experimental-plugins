import { isUserRent } from "../users/users";

describe('nullish coalescing operator test suite', () => {
  
    const users = [{
        name: "Jimi",
        address: {
            zip: 1628546,
            isHouse: false
        }
    }];
  
    it('should return undefined when nested object is undefined', () => {
      expect(isUserRent(users[1])).toMatchSnapshot();
    });

    it('should return zip when nested object is not undefined', () => {
        expect(isUserRent(users[0])).toMatchSnapshot();
      });
});
