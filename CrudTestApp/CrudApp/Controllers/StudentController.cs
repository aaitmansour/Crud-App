using CrudApp.Models;
using CrudApp.Models.DataAccess;
using Microsoft.AspNetCore.Mvc;


namespace CrudApp.Controllers
{
    [Route("api/[Student]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudent _student;
        public StudentController (IStudent student)
        {
            _student = student;
        }

        [HttpGet]
        public IEnumerable<Student> Get()
        {
            var student = _student.GetStudent();
            return student;
        }

        [HttpGet("{id}", Name = "GetStudentByID")]
        public Student Get(string id)
        {
            var student = _student.GetStudentByID(id);
            return student;
        }

        [HttpPost]
        public void Post([FromBody] Student student)
        {
            _student.CreateStudent(student);
        }

        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Student student)
        {
            _student.UpdateStudent(id, student);
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _student.DeleteStudent(id);
        }
        

    }
}
