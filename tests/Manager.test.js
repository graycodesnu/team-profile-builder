const Manager = require('../lib/Manager');
const manager = new Manager('ana', '12', 'fritofeet@email.com', '88');

describe('employeeData', () => {
    it('Collects employee data', () => {
      expect(manager.name).toEqual('ana');
      expect(manager.id).toEqual('12');
      expect(manager.email).toBe('fritofeet@email.com');
      expect(manager.officeNumber).toBe('88')
    });

    it('Testing the getName() method', () => {
        expect(manager.getName()).toBe('ana');
    });

    it('Testing the getId() method', () => {
        expect(manager.getId()).toBe('12');
    });

    it('Testing the getEmail() method', () => {
        expect(manager.getEmail()).toBe('fritofeet@email.com');
    });

    it('Testing the getRole() method', () => {
        expect(manager.getRole()).toBe('Manager');
    });

});