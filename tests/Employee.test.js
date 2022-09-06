
const Employee = require('../lib/Employee');
const employee = new Employee('frankie', '28', 'frankenpup@email.com');

describe('employeeData', () => {
    it('Collects employee data', () => {
      expect(employee.name).toEqual('frankie');
      expect(employee.id).toEqual('28');
      expect(employee.email).toBe('frankenpup@email.com');
    });

    it('Testing the getName() method', () => {
        expect(employee.getName()).toBe('frankie');
    });

    it('Testing the getId() method', () => {
        expect(employee.getId()).toBe('28');
    });

    it('Testing the getEmail() method', () => {
        expect(employee.getEmail()).toBe('frankenpup@email.com');
    });

    it('Testing the getRole() method', () => {
        expect(employee.getRole()).toBe('Employee');
    });

});