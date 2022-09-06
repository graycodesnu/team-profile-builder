const Engineer = require('../lib/Engineer');
const engineer = new Engineer('malcolm', '5', 'malcolmcat@email.com', 'maccodes1');

describe('employeeData', () => {
    it('Collects employee data ', () => {
      expect(engineer.name).toEqual('malcolm');
      expect(engineer.id).toEqual('5');
      expect(engineer.email).toBe('malcolmcat@email.com');
      expect(engineer.github).toBe('maccodes1');
    });

    it('Testing the getName() method', () => {
        expect(engineer.getName()).toBe('malcolm');
    });

    it('Testing the getId() method', () => {
        expect(engineer.getId()).toBe('5');
    });

    it('Testing the getEmail() method', () => {
        expect(engineer.getEmail()).toBe('malcolmcat@email.com');
    });

    it('Testing the getGitHub() method', () => {
        expect(engineer.getGithub()).toBe('maccodes1');
    });

    it('Testing the getRole() method', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });

});