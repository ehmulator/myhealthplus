using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Appointment
    {
        public int Id { get; set; }
        public DateTime? BookingDate { get; set; }
        public bool? Type { get; set; }
        public bool? IsComplete { get; set; }
    }
}
