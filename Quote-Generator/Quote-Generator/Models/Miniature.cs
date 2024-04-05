using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Quote_Generator.Models
{
    public class Miniature
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [DisplayName("Table Ready")]
        public bool TableReady { get; set; }
        public string? Description { get; set; }
    }

    }
