using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameApi.Domain.Game.DTO;

public class UserDTO 
{
    public string Username { get; set; } = default!;

    public string Password { get; set; } = default!;

    public string Email { get; set; } = default!;
}

