const Intern = require('../lib/Intern');
const intern = new Intern('alfie', '9', 'alfiecat@email.com', 'cat u');

describe('internData', () => {
    it('Collects employee data', () => {
      expect(intern.name).toEqual('alfie');
      expect(intern.id).toEqual('9');
      expect(intern.email).toBe('alfiecat@email.com');
      expect(intern.school).toBe('cat u')
    });

    it('Testing the getName() method', () => {
        expect(intern.getName()).toBe('alfie');
    });

    it('Testing the getId() method', () => {
        expect(intern.getId()).toBe('9');
    });

    it('Testing the getEmail() method', () => {
        expect(intern.getEmail()).toBe('alfiecat@email.com');
    });

    it('Testing the getSchool() method', () => {
        expect(intern.getSchool()).toBe('cat u');
    });

    it('Testing the getRole() method', () => {
        expect(intern.getRole()).toBe('Intern');
    });

});