namespace CrudApp.Models.DataAccess
{
    public interface IStudent
    {
        IEnumerable<Student> GetStudent();
        Student GetStudentByID(string id);
        void CreateStudent(Student student);
        void UpdateStudent(string id, Student student);
        void DeleteStudent(string id);
    }
}
